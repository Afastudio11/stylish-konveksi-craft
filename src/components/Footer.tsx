import logo from "@/assets/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-foreground to-primary-dark text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4 group cursor-pointer" onClick={() => scrollToSection("home")}>
              <div className="relative">
                <img src={logo} alt="Sekala Industry" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-accent/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-xl font-black group-hover:text-accent transition-colors">SEKALA INDUSTRY</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              Solusi konveksi profesional dengan kualitas premium untuk kebutuhan bisnis dan organisasi Anda.
            </p>
            <div className="flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full w-fit">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent font-semibold text-sm">We're Open</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-black mb-6 text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full" />
              Menu
            </h4>
            <ul className="space-y-3">
              {["Beranda", "Tentang", "Layanan", "Produk", "Kontak"].map((item, index) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(["home", "about", "services", "products", "contact"][index])}
                    className="text-white/70 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                    data-testid={`footer-nav-${["home", "about", "services", "products", "contact"][index]}`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-black mb-6 text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full" />
              Layanan
            </h4>
            <ul className="space-y-3 text-white/70">
              {["Seragam Kantor", "Kaos Custom", "Jaket & Hoodie", "Polo Shirt", "Merchandise"].map((item) => (
                <li key={item} className="hover:text-accent transition-colors cursor-default">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-black mb-6 text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full" />
              Kontak
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 group">
                <div className="p-2 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                </div>
                <a href="tel:085754777068" className="hover:text-accent transition-colors" data-testid="footer-phone">
                  0857-5477-7068
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 group">
                <div className="p-2 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                </div>
                <a href="mailto:info@sekalaindustry.com" className="hover:text-accent transition-colors" data-testid="footer-email">
                  info@sekalaindustry.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 group">
                <div className="p-2 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-accent" />
                </div>
                <span>Jawa Barat, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-white/60 text-sm">
            © 2024 Sekala Industry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 px-6 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent font-black tracking-widest text-sm">
              #KALACINTABERPOLA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
