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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("home")}>
            <img src={logo} alt="Sekala Industry" className="h-7 w-auto" />
            <span className={`text-lg font-semibold transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
              SEKALA INDUSTRY
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {["Beranda", "Tentang", "Layanan", "Produk", "Kontak"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(["home", "about", "services", "products", "contact"][index])}
                className={`text-sm font-medium transition-colors relative group ${
                  scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="bg-accent hover:bg-accent-dark text-accent-foreground font-medium px-6 transition-all hover:scale-105"
            >
              Hubungi Kami
            </Button>
          </nav>

          <button
            className={`lg:hidden transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 flex flex-col gap-4 animate-fade-in">
            {["Beranda", "Tentang", "Layanan", "Produk", "Kontak"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(["home", "about", "services", "products", "contact"][index])}
                className="text-foreground hover:text-primary transition-colors text-left font-medium"
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent-dark text-accent-foreground font-medium w-full"
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
