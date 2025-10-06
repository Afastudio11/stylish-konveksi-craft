import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "glassmorphism-dark shadow-lg py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection("home")}
            data-testid="link-home"
          >
            <div className="relative">
              <img 
                src={logo} 
                alt="Sekala Industry" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {["Beranda", "Tentang", "Pricelist", "Kontak"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(["home", "about", "products", "contact"][index])}
                className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group rounded-lg ${
                  scrolled 
                    ? "text-foreground hover:text-accent" 
                    : "text-white/90 hover:text-white"
                }`}
                data-testid={`nav-${["home", "about", "products", "contact"][index]}`}
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 bg-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-3/4" />
              </button>
            ))}
            <div className="ml-2">
              <Button 
                onClick={() => scrollToSection("contact")}
                size="sm"
                className="bg-accent hover:bg-accent-dark text-foreground font-bold px-6 py-2 transition-all duration-300 hover:scale-105 shadow-glow-accent"
                data-testid="button-contact-header"
              >
                Hubungi Kami
              </Button>
            </div>
          </nav>

          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled 
                ? "text-foreground hover:bg-accent/10" 
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 flex flex-col gap-3 animate-slide-down">
            {["Beranda", "Tentang", "Pricelist", "Kontak"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(["home", "about", "products", "contact"][index])}
                className={`px-4 py-3 text-left font-semibold transition-all duration-300 rounded-lg ${
                  scrolled
                    ? "text-foreground hover:bg-accent/10 hover:text-accent"
                    : "text-white hover:bg-white/10"
                }`}
                data-testid={`nav-mobile-${["home", "about", "services", "products", "contact"][index]}`}
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent-dark text-foreground font-bold w-full mt-2 shadow-glow-accent"
              data-testid="button-contact-mobile"
            >
              Hubungi Kami
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
