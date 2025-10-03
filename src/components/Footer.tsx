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
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Sekala Industry" className="h-8 w-auto" />
              <span className="text-xl font-bold">SEKALA INDUSTRY</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Solusi konveksi profesional dengan kualitas premium untuk kebutuhan bisnis dan organisasi Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Menu</h4>
            <ul className="space-y-3">
              {["Beranda", "Tentang", "Layanan", "Produk", "Kontak"].map((item, index) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(["home", "about", "services", "products", "contact"][index])}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Layanan</h4>
            <ul className="space-y-3 text-white/70">
              <li>Seragam Kantor</li>
              <li>Kaos Custom</li>
              <li>Jaket & Hoodie</li>
              <li>Polo Shirt</li>
              <li>Merchandise</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/70">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:085754777068" className="hover:text-accent transition-colors">
                  0857-5477-7068
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@sekalaindustry.com" className="hover:text-accent transition-colors">
                  info@sekalaindustry.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Jawa Barat, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2024 Sekala Industry. All rights reserved.
          </p>
          <p className="text-accent font-semibold">
            #KALACINTABERPOLA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
