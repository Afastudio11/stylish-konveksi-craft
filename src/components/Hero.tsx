import { ArrowRight } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary-dark/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-4 leading-none tracking-tight">
            SEKALA<br />
            INDUSTRY
          </h1>

          {/* IS OPEN NOW */}
          <div className="inline-block mb-12">
            <div className="bg-accent px-8 py-3 md:px-12 md:py-4">
              <p className="text-2xl md:text-3xl lg:text-4xl font-black text-primary uppercase tracking-wide">
                IS OPEN NOW!
              </p>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="mb-16">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              9.00 AM - 17.00 PM
            </p>

            {/* Order and Consultation */}
            <div className="space-y-3">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
                ORDER AND
                <br />
                CONSULTATION
              </p>
              <a 
                href="tel:085754777068"
                className="inline-block text-3xl md:text-4xl lg:text-5xl font-black text-accent hover:text-accent-light transition-colors"
                data-testid="link-phone"
              >
                0857-5477-7068
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <Button 
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-accent hover:bg-accent-dark text-primary font-bold px-10 py-7 text-lg transition-all hover:scale-105 shadow-2xl"
              data-testid="button-consultation"
            >
              Mulai Konsultasi
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          {/* Hashtag */}
          <div className="pt-8 border-t-2 border-white/20">
            <p className="text-xl md:text-2xl font-bold text-white/90 tracking-wider">
              #KALACINTABERPOLA
            </p>
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
