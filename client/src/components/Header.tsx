import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Clientes", href: "#clients" },
    { label: "Serviços", href: "#services" },
    { label: "Como Trabalhamos", href: "#how-we-work" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="EXPONENTIAL DEV" className="h-12 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => {
              window.open('https://wa.me/5516992507202?text=Ol%C3%A1%20EXPONENTIAL%20DEV!%20Gostaria%20de%20conhecer%20seus%20servi%C3%A7os.', '_blank');
            }}
          >
            Fale Conosco
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white"
              onClick={() => {
                setIsOpen(false);
                window.open('https://wa.me/5516992507202?text=Ol%C3%A1%20EXPONENTIAL%20DEV!%20Gostaria%20de%20conhecer%20seus%20servi%C3%A7os.', '_blank');
              }}
            >
              Fale Conosco
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
