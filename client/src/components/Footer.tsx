import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-20 border-t border-secondary">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <img src="/logo.png" alt="EXPONENTIAL DEV" className="h-16 w-auto mb-4" />
            <p className="text-sm text-secondary">
              Especialistas em sustentação, manutenção e correção de sistemas
              existentes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-semibold text-sm mb-4 text-secondary">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-white hover:text-secondary transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#how-we-work"
                  className="text-white hover:text-secondary transition-colors"
                >
                  Como Trabalhamos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white hover:text-secondary transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/exponentialdev.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/exp-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono font-semibold text-sm mb-4 text-secondary">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                <a
                  href="mailto:exponetialdev.it@gmail.com"
                  className="text-white hover:text-secondary transition-colors"
                >
                  exponetialdev.it@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <a
                  href="https://wa.me/5516992507202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors"
                >
                  +55 (16) 99250-7202
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary/30 pt-8">
          <p className="text-center text-sm text-secondary">
            © {currentYear} EXPONENTIAL DEV. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
