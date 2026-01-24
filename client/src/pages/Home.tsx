import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientsSection from "@/components/ClientsSection";
import { CheckCircle2, AlertCircle, Zap, Shield } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: AlertCircle,
      title: "Correção de Bugs",
      description:
        "Identificamos e eliminamos falhas críticas que comprometem a experiência do usuário e a integridade dos dados.",
      problem: "Instabilidade Crônica / Bugs Recorrentes",
    },
    {
      icon: Shield,
      title: "Sustentação Técnica",
      description:
        "Monitoramento proativo, gestão de dependências e patches de segurança para manter seu ambiente saudável 24/7.",
      problem: "Risco de Parada / Falha de Infraestrutura",
    },
    {
      icon: Zap,
      title: "Otimização de Performance",
      description:
        "Análise de código e otimização de banco de dados para restaurar velocidade e eficiência do sistema.",
      problem: "Lentidão / Performance Degradada",
    },
    {
      icon: CheckCircle2,
      title: "Suporte Técnico Nível 3",
      description:
        "Atendimento direto para incidentes críticos, garantindo que seu sistema volte a funcionar no menor tempo possível.",
      problem: "Falta de Suporte Especializado",
    },
  ];

  const workModels = [
    {
      title: "Resolução Pontual",
      subtitle: "Para problemas específicos e críticos",
      features: [
        "Análise inicial rápida (gratuita)",
        "Proposta com valor fechado",
        "Resolução completa do incidente",
        "Diagnóstico técnico detalhado",
        "Testes de validação",
        "Relatório da solução",
      ],
      highlight: false,
    },
    {
      title: "Sustentação Mensal",
      subtitle: "Para estabilidade e paz de espírito",
      features: [
        "Escopo definido de horas",
        "Monitoramento proativo",
        "Suporte técnico prioritário",
        "Manutenção preventiva",
        "Gestão de dependências",
        "SLA para incidentes críticos",
      ],
      highlight: true,
    },
  ];

  const whyChoose = [
    {
      title: "Foco Exclusivo",
      description:
        "Não somos uma software house genérica. Especializamos apenas em sustentação e manutenção de sistemas existentes.",
    },
    {
      title: "Transparência Total",
      description:
        "Comunicação clara e direta, sem jargões de marketing. Você sabe exatamente o que esperar.",
    },
    {
      title: "Resolução Garantida",
      description:
        "Medimos sucesso pela eliminação de problemas, não pelas horas trabalhadas. Seu sistema funciona é o que importa.",
    },
    {
      title: "Expertise Técnica",
      description:
        "Node.js, Django, React, PostgreSQL, MySQL. Infraestrutura em VPS e Docker. Experiência real em produção.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-16 md:py-28 border-b border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6 text-foreground leading-tight">
                Seu sistema não pode parar.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A EXPDEV é a sua parceira técnica especializada em garantir a
                estabilidade e o funcionamento contínuo de sistemas de missão
                crítica. Não criamos do zero,{" "}
                <strong>resolvemos o que já está no ar.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white"
                  size="lg"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Solicitar Diagnóstico
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    const servicesSection =
                      document.getElementById("services");
                    servicesSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Conhecer Serviços
                </Button>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-sm border-2 border-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-mono font-bold text-primary mb-4">
                    99.9%
                  </div>
                  <p className="text-foreground font-medium">
                    Uptime Garantido
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients">
          <ClientsSection />
        </section>

        {/* Services Section */}
        <section id="services" className="container py-16 md:py-24 border-b border-border">
          <div className="mb-12">
            <h2 className="mb-4 text-foreground">Serviços Especializados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Resolvemos os problemas mais críticos de sistemas em produção.
              Cada serviço foi desenhado para eliminar uma dor específica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-card rounded-sm border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="text-xs font-mono text-accent mb-2 uppercase tracking-wide">
                        {service.problem}
                      </div>
                      <h3 className="text-xl font-mono font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* How We Work Section */}
        <section id="how-we-work" className="container py-16 md:py-24 border-b border-border">
          <div className="mb-12">
            <h2 className="mb-4 text-foreground">Como Trabalhamos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Dois modelos simples e transparentes. Escolha o que faz mais
              sentido para seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workModels.map((model, index) => (
              <div
                key={index}
                className={`p-8 rounded-sm border-2 transition-all ${
                  model.highlight
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                {model.highlight && (
                  <div className="inline-block px-3 py-1 bg-accent text-white text-xs font-mono font-semibold rounded-sm mb-4">
                    Recomendado
                  </div>
                )}
                <h3 className="text-2xl font-mono font-bold text-foreground mb-1">
                  {model.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {model.subtitle}
                </p>
                <ul className="space-y-3">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-secondary rounded-sm border border-border">
            <p className="text-center text-foreground font-medium">
              Em ambos os modelos, nosso foco é o mesmo:{" "}
              <span className="text-primary">a saúde e a continuidade do seu negócio.</span>
            </p>
          </div>
        </section>

        {/* Why Choose Section */}
        <section id="why-choose" className="container py-16 md:py-24 border-b border-border">
          <div className="mb-12">
            <h2 className="mb-4 text-foreground">Por Que Escolher EXPONENTIAL DEV</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Não somos apenas uma empresa de tecnologia. Somos seu parceiro
              técnico de confiança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-accent/10">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-mono font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="container py-16 md:py-24 border-b border-border">
          <div className="bg-foreground text-white p-12 md:p-16 rounded-sm">
            <div className="max-w-2xl">
              <h2 className="text-white mb-4">Pronto para Estabilidade?</h2>
              <p className="text-lg text-gray-200 mb-8">
                Agende uma conversa de 15 minutos com nosso time técnico. Vamos
                entender os desafios do seu sistema e apresentar uma solução
                prática.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/5516992507202?text=Ol%C3%A1%20EXPONENTIAL%20DEV!%20Gostaria%20de%20agendar%20uma%20conversa%20sobre%20sustenta%C3%A7%C3%A3o%20de%20sistemas." target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-foreground"
                    size="lg"
                  >
                    Agendar Conversa
                  </Button>
                </a>
                <a href="mailto:exponetialdev.it@gmail.com">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-white text-white hover:bg-white/10"
                  >
                    Enviar E-mail
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="container py-16 md:py-24 border-b border-border">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-foreground">Tecnologias que Dominamos</h2>
            <p className="text-lg text-muted-foreground">
              Expertise em sistemas reais de produção.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Node.js",
              "Django",
              "React",
              "PostgreSQL",
              "MySQL",
              "Docker",
            ].map((tech, index) => (
              <div
                key={index}
                className="p-4 bg-card border border-border rounded-sm text-center hover:border-primary/50 hover:shadow-md transition-all"
              >
                <p className="font-mono font-semibold text-foreground text-sm">
                  {tech}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
