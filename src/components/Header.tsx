import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#sistema", label: "Sistema" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-bon-line/80 bg-white/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          className="focus-ring rounded-sm text-lg font-bold tracking-[0.18em] text-bon-950"
          href="#inicio"
        >
          BON
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-10 text-sm font-medium text-bon-950/60 md:flex"
          aria-label="Principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="relative py-1 transition-colors duration-200 hover:text-bon-blue after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-bon-blue after:transition-all after:duration-300 hover:after:w-full"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="focus-ring hidden rounded-full bg-gradient-to-r from-bon-blue to-bon-blue px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-bon-blue/25 transition-all duration-300 hover:from-bon-pink hover:to-bon-coral hover:shadow-bon-pink/25 sm:inline-flex"
            href="#aplicar"
          >
            Aplicar
          </a>

          {/* Mobile Menu Button */}
          <button
            className="focus-ring rounded-lg p-2 text-bon-950 transition-colors hover:bg-bon-soft md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-full overflow-hidden bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-80 border-b border-bon-line/80" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4" aria-label="Menu movil">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="py-3 text-base font-medium text-bon-950/70 transition-colors hover:text-bon-blue"
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="mt-4 rounded-full bg-bon-blue px-6 py-3 text-center text-sm font-semibold text-white"
            href="#aplicar"
            onClick={() => setIsMenuOpen(false)}
          >
            Aplicar ahora
          </a>
        </nav>
      </div>
    </header>
  );
}
