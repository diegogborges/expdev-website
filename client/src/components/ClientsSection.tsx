export default function ClientsSection() {
  const clients = [
    {
      name: "TechFlow Systems",
      logo: "TF",
      description: "Plataforma de gestão de pedidos",
      color: "bg-blue-100",
      textColor: "text-blue-700",
    },
    {
      name: "DataCore Solutions",
      logo: "DC",
      description: "Sistema de análise de dados",
      color: "bg-purple-100",
      textColor: "text-purple-700",
    },
    {
      name: "CloudSync Pro",
      logo: "CS",
      description: "Infraestrutura em nuvem",
      color: "bg-green-100",
      textColor: "text-green-700",
    },
    {
      name: "FinanceHub",
      logo: "FH",
      description: "Sistema de gestão financeira",
      color: "bg-amber-100",
      textColor: "text-amber-700",
    },
  ];

  return (
    <section className="container py-16 md:py-24 border-b border-border">
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-mono font-semibold rounded-sm mb-4">
          Confiança Comprovada
        </div>
        <h2 className="mb-4 text-foreground">Empresas que Confiam na EXPDEV</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Pequenas e médias empresas que transformaram a estabilidade de seus
          sistemas em um ativo competitivo.
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
          Estas empresas reduziram downtime em até{" "}
          <span className="text-primary font-semibold">95%</span> e melhoraram
          performance em até{" "}
          <span className="text-primary font-semibold">3x</span> após parceria
          com EXPDEV.
        </p>
      </div>
    </section>
  );
}
