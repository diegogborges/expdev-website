import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const { theme, toggleTheme } = useTheme();

  const navItems = language === "pt" 
    ? [
        { label: "Clientes", href: "#clients" },
        { label: "Serviços", href: "#services" },
        { label: "Como Trabalhamos", href: "#how-we-work" },
        { label: "Contato", href: "#contact" },
      ]
    : [
        { label: "Clients", href: "#clients" },
        { label: "Services", href: "#services" },
        { label: "How We Work", href: "#how-we-work" },
        { label: "Contact", href: "#contact" },
      ];

  const ctaText = language === "pt" ? "Fale Conosco" : "Get in Touch";

  return (
    <header className="sticky top-0 z-50 bg-primary text-white border-b border-secondary shadow-sm">
      <div className="container flex items-center justify-between h-20 md:h-24 px-4 md:px-6">
        {/* Logo - Aumentado */}
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
          <img src="/logo.png" alt="EXPONENTIAL DEV" className="h-16 w-auto md:h-20" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white hover:text-secondary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-secondary/20 transition-colors"
            aria-label="Toggle theme"
            title={theme === "light" ? "Dark mode" : "Light mode"}
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-white" />
            ) : (
              <Sun className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            className="p-2 rounded-md hover:bg-secondary/20 transition-colors flex items-center gap-1"
            aria-label="Toggle language"
            title={language === "pt" ? "English" : "Português"}
          >
            <Globe className="w-5 h-5 text-white" />
            <span className="text-xs font-semibold text-white">{language.toUpperCase()}</span>
          </button>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              className="bg-white hover:bg-secondary text-primary font-semibold"
              onClick={() => {
                window.open('https://wa.me/5516992507202?text=Ol%C3%A1%20EXPONENTIAL%20DEV!%20Gostaria%20de%20conhecer%20seus%20servi%C3%A7os.', '_blank');
              }}
            >
              {ctaText}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-primary border-t border-secondary">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full bg-white hover:bg-secondary text-primary font-semibold"
              onClick={() => {
                setIsOpen(false);
                window.open('https://wa.me/5516992507202?text=Ol%C3%A1%20EXPONENTIAL%20DEV!%20Gostaria%20de%20conhecer%20seus%20servi%C3%A7os.', '_blank');
              }}
            >
              {ctaText}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
