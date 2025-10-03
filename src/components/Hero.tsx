import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-6 leading-tight">
            SEKALA<br />
            <span className="text-accent">INDUSTRY</span>
          </h1>
          
          <div className="inline-block bg-accent px-8 py-4 mb-8 transform -rotate-2 shadow-glow">
            <p className="text-2xl md:text-4xl font-bold text-accent-foreground">
              IS OPEN NOW!
            </p>
          </div>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Solusi konveksi profesional untuk kebutuhan seragam, kaos, jaket, dan produk garmen berkualitas tinggi
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-accent hover:bg-accent-glow text-accent-foreground font-bold text-lg px-8 py-6 shadow-glow transition-all hover:scale-105"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold text-lg px-8 py-6 transition-all hover:scale-105"
            >
              Lihat Portfolio
            </Button>
          </div>

          <div className="mt-16 text-primary-foreground/80">
            <p className="text-lg md:text-xl font-semibold mb-2">JAM OPERASIONAL</p>
            <p className="text-2xl md:text-3xl font-bold">9.00 AM - 17.00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
