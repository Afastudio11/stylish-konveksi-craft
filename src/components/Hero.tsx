import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Manufacturing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32 md:py-40">
        <div className="max-w-4xl animate-fade-in">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent-foreground text-sm font-medium">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Solusi Konveksi Terpercaya
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Wujudkan Brand Identity<br />
            Anda dengan <span className="text-accent">Kualitas Premium</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
            Sekala Industry adalah mitra terpercaya untuk kebutuhan konveksi profesional Anda. 
            Dari seragam perusahaan hingga merchandise custom, kami hadirkan dengan standar kualitas tinggi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 py-6 text-base transition-all hover:scale-105 shadow-xl"
            >
              Mulai Konsultasi
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection("products")}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-base transition-all hover:scale-105"
            >
              Lihat Produk Kami
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-8 text-white/80">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <div>
                <p className="text-xs uppercase tracking-wider mb-1">Hubungi Kami</p>
                <p className="font-semibold text-white">0857-5477-7068</p>
              </div>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div>
              <p className="text-xs uppercase tracking-wider mb-1">Jam Operasional</p>
              <p className="font-semibold text-white">Senin - Sabtu, 09:00 - 17:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
