import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientsSection from "@/components/ClientsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactForm from "@/components/ContactForm";
import { CheckCircle2, AlertCircle, Zap, Shield, Coffee, Leaf, Cpu, Database, Boxes, MessageSquare, Workflow, GitBranch } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: AlertCircle,
      title: "Correção de Bugs",
      description:
        "Identificamos e eliminamos falhas críticas que comprometem a experiência do usuário e a integridade dos dados.",
      problem: "Instabilidade Crônica / Bugs Recorrentes",
    },
    // {
    //   icon: Shield,
    //   title: "Sustentação Técnica",
    //   description:
    //     "Monitoramento proativo, gestão de dependências e patches de segurança para manter seu ambiente saudável 24/7.",
    //   problem: "Risco de Parada / Falha de Infraestrutura",
    // },
    {
      icon: Zap,
      title: "Otimização de Performance",
      description:
        "Análise de código e otimização de banco de dados para restaurar velocidade e eficiência do sistema.",
      problem: "Lentidão / Performance Degradada",
    },
    // {
    //   icon: CheckCircle2,
    //   title: "Suporte Técnico Nível 3",
    //   description:
    //     "Atendimento direto para incidentes críticos, garantindo que seu sistema volte a funcionar no menor tempo possível.",
    //   problem: "Falta de Suporte Especializado",
    // },
  ];

  const workModels = [
    {
      title: "Resolução Pontual",
      subtitle: "Para correções, melhorias ou problemas específicos",
      features: [
        "Análise técnica inicial (gratuita)",
        "Diagnóstico do sistema e da causa do problema",
        "Proposta com escopo e valor fechado",
        "Correção de bugs ou implementação da melhoria",
        "Ajustes de performance ou estabilidade",
        "Testes de validação",
        "Relatório técnico da solução",
      ],
      highlight: false,
    },
    {
      title: "Sustentação Mensal",
      subtitle: "Para evolução contínua, estabilidade e tranquilidade",
      features: [
        "Pacote mensal com escopo de horas definido",
        "Correções e melhorias contínuas",
        "Monitoramento e manutenção preventiva",
        "Ajustes de performance e escalabilidade",
        "Atualização tecnológica e gestão de dependências",
        "Suporte técnico prioritário",
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

          <div className="text-center mb-12">
            <h1 className="mb-6 text-foreground leading-tight">
              Seu sistema não pode parar.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A Exponential SE é a sua parceira técnica especializada em garantir a
              estabilidade e o funcionamento contínuo de sistemas.
            </p>
    
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
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
                className="bg-white hover:bg-secondary text-primary font-semibold border-2 border-primary"
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
        </section>

        {/* Clients Section */}
        {/* <section id="clients">
          <ClientsSection />
        </section> */}

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

        {/* Projects Section */}
        <section id="projects">
          <ProjectsSection />
        </section>

        {/* How We Work Section */}
        <section id="how-we-work" className="container py-16 md:py-24 border-b border-border">
          <div className="mb-12">
            <h2 className="mb-4 text-foreground">Como Trabalhamos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Dois modelos claros e eficientes, focados na evolução e estabilidade do seu sistema.
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
            <h2 className="mb-4 text-foreground">Por Que Escolher Exponential SE</h2>
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

        {/* Contact Form Section */}
        <section
          id="contact"
          className="container py-16 md:py-24 border-b border-border"
        >
          {/* Título + Subtítulo centralizados */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-foreground">
              Pronto para Estabilidade?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Agende uma conversa de 15 minutos com nosso time técnico. Vamos
              entender os desafios do seu sistema e apresentar uma solução
              prática.
            </p>
          </div>

          {/* Conteúdo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Formulário - esquerda */}
            <div>
              <ContactForm />
            </div>

            {/* WhatsApp - direita, alinhado à esquerda e sem fundo */}
            <div className="flex justify-start">
              <a
                href="https://wa.me/5516992507202?text=Ol%C3%A1%2C%20Exponential%20SE!%20Gostaria%20de%20conversar%20sobre%20um%20desafio%20t%C3%A9cnico%20que%20estamos%20enfrentando%20e%20entender%20como%20voc%C3%AAs%20podem%20nos%20apoiar."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <svg
                  className="w-14 h-14 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>

                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    WhatsApp
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    +55 (16) 99250-7202
                  </p>
                </div>
              </a>
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
              { name: "Java", icon: Coffee },
              { name: "Kotlin", icon: Leaf },
              { name: "Spring Boot", icon: Cpu },
              { name: "Node.js", icon: Database },
              { name: "Django", icon: Boxes },
              { name: "React", icon: Boxes },
              { name: "PostgreSQL", icon: Database },
              { name: "MySQL", icon: Database },
              { name: "Docker", icon: Boxes },
              { name: "RabbitMQ", icon: MessageSquare },
              { name: "Kafka", icon: Workflow },
              { name: "Arquitetura de Sistemas", icon: GitBranch },
            ].map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="p-4 bg-card border border-border rounded-sm text-center hover:border-primary/50 hover:shadow-md transition-all flex flex-col items-center gap-3"
                >
                  <Icon className="w-6 h-6 text-primary" />
                  <p className="font-mono font-semibold text-foreground text-sm">
                    {tech.name}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
