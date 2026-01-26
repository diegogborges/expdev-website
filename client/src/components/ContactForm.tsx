import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

/**
 * ContactForm Component
 * Integrates with Google Sheets via Apps Script
 * Sends form data to a Google Sheet for lead capture
 */

interface FormData {
  name: string;
  email: string;
  company: string;
  problem: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    problem: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.company || !formData.problem) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    setIsLoading(true);

    try {
      // Send to Google Sheets via Apps Script
      // Replace YOUR_GOOGLE_APPS_SCRIPT_URL with your actual URL
      const GOOGLE_APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || "";

      if (!GOOGLE_APPS_SCRIPT_URL) {
        toast.error("Formulário não configurado. Entre em contato diretamente.");
        setIsLoading(false);
        return;
      }

      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: formData.name,
          email: formData.email,
          company: formData.company,
          problem: formData.problem,
        }),
      });

      // With no-cors, we can't check response status, so we assume success
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        problem: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Nome
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Seu nome completo"
          value={formData.name}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          E-mail
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
          Empresa
        </label>
        <Input
          id="company"
          name="company"
          type="text"
          placeholder="Nome da sua empresa"
          value={formData.company}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
      </div>

      <div>
        <label htmlFor="problem" className="block text-sm font-medium text-foreground mb-2">
          Descreva o Problema
        </label>
        <Textarea
          id="problem"
          name="problem"
          placeholder="Qual é o desafio técnico que seu sistema enfrenta?"
          value={formData.problem}
          onChange={handleChange}
          disabled={isLoading}
          required
          className="min-h-[120px]"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
        size="lg"
      >
        {isLoading ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  );
}
