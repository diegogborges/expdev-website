import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white mt-20 border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">E</span>
              </div>
              <span className="font-mono font-bold text-lg">EXPDEV</span>
            </div>
            <p className="text-sm text-gray-300">
              Especialistas em sustentação, manutenção e correção de sistemas
              existentes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-semibold text-sm mb-4 text-accent">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#how-we-work"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Como Trabalhamos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono font-semibold text-sm mb-4 text-accent">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a
                  href="mailto:contato@expdev.com"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  contato@expdev.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a
                  href="tel:+5511999999999"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  +55 (11) 9 9999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} EXPDEV. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
