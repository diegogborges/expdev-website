export default function ClientsSection() {
  const clients = [
    {
      name: "ExpVet",
      logo: "EV",
      description: "Plataforma de gestão para hospital Veterinário",
      color: "bg-blue-100",
      textColor: "text-blue-700",
    },
    {
      name: "Meu Feedback",
      logo: "MF",
      description: "Sistema para Empresas que querem melhoras seu negocio a partir de Feedbacks de Clientes",
      color: "bg-purple-100",
      textColor: "text-purple-700",
    },
    {
      name: "NeuroAnimal",
      logo: "NA",
      description: "Aplicativo especialista para diagnóstico Neurologico Veterinário",
      color: "bg-green-100",
      textColor: "text-green-700",
    }
  ];

  return (
    <section className="container py-16 md:py-24 border-b border-border">
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-mono font-semibold rounded-sm mb-4">
          Confiança Comprovada
        </div>
        <h2 className="mb-4 text-foreground">Projetos criados pela Exponential SE</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A Exponetial SE também desenvolve projetos próprios, idealizados, construídos e evoluídos internamente pela empresa.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className="p-6 bg-card border border-border rounded-sm hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className={`w-12 h-12 ${client.color} ${client.textColor} rounded-sm flex items-center justify-center font-mono font-bold text-lg mb-4`}>
              {client.logo}
            </div>
            <h4 className="font-mono font-semibold text-foreground mb-1 text-sm">
              {client.name}
            </h4>
            <p className="text-xs text-muted-foreground">{client.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-secondary rounded-sm border border-border text-center">
        <p className="text-sm text-muted-foreground">
          A Exponential SE une expertise técnica e inovação para criar soluções escaláveis.
        </p>
      </div>
    </section>
  );
}
