import { ArrowRight, Phone, Clock, Sparkles } from "lucide-react";
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
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-dark" />
        <img 
          src={heroBg} 
          alt="Manufacturing" 
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8 animate-slide-up">
              {/* Badge */}
              <div className="inline-block">
                <div className="glassmorphism px-6 py-3 rounded-full">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <span className="text-white font-semibold">Solusi Konveksi Profesional</span>
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
                  Wujudkan Brand Identity Anda dengan{" "}
                  <span className="gradient-text">Kualitas Premium</span>
                </h1>
                <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                  Sekala Industry adalah mitra terpercaya untuk kebutuhan konveksi profesional Anda. 
                  Dari seragam perusahaan hingga merchandise custom.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-accent hover:bg-accent-dark text-primary font-bold px-8 py-6 text-base transition-all hover:scale-105 shadow-glow-accent group"
                  data-testid="button-consultation"
                >
                  Mulai Konsultasi
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => scrollToSection("products")}
                  size="lg"
                  variant="outline"
                  className="glassmorphism border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base transition-all hover:scale-105"
                  data-testid="button-products"
                >
                  Lihat Produk
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center lg:text-left">
                  <p className="text-3xl font-black text-accent">500+</p>
                  <p className="text-sm text-white/70">Klien Puas</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-3xl font-black text-accent">1000+</p>
                  <p className="text-sm text-white/70">Produk Dibuat</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-3xl font-black text-accent">5+</p>
                  <p className="text-sm text-white/70">Tahun Pengalaman</p>
                </div>
              </div>
            </div>

            {/* Right Column - Info Cards */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Status Card */}
              <div className="glassmorphism-dark rounded-2xl p-8 border-2 border-accent/30 hover:border-accent/50 transition-all duration-300 hover:shadow-glow-accent">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="text-accent font-bold uppercase tracking-wide">We're Open</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2">
                  SIAP MELAYANI
                </h3>
                <p className="text-white/70">Konsultasi gratis untuk kebutuhan konveksi Anda</p>
              </div>

              {/* Contact Card */}
              <div className="glassmorphism-dark rounded-2xl p-8 hover:shadow-glow-primary transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-xl group-hover:bg-accent/30 transition-colors">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white/70 text-sm mb-2">Hubungi Kami</p>
                    <a 
                      href="tel:085754777068"
                      className="text-2xl md:text-3xl font-bold text-white hover:text-accent transition-colors"
                      data-testid="link-phone"
                    >
                      0857-5477-7068
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="glassmorphism-dark rounded-2xl p-8 hover:shadow-glow-primary transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-xl group-hover:bg-accent/30 transition-colors">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white/70 text-sm mb-2">Jam Operasional</p>
                    <p className="text-xl font-bold text-white">9.00 AM - 17.00 PM</p>
                    <p className="text-white/60 text-sm mt-1">Senin - Sabtu</p>
                  </div>
                </div>
              </div>

              {/* Hashtag */}
              <div className="text-center pt-4">
                <p className="text-lg font-bold text-accent/80 tracking-widest">
                  #KALACINTABERPOLA
                </p>
              </div>
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
