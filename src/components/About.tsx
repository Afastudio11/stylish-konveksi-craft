import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Klien Puas" },
  { value: 1000, suffix: "+", label: "Produk Terjual" },
  { value: 5, suffix: "+", label: "Tahun Pengalaman" },
  { value: 100, suffix: "%", label: "Kepuasan Pelanggan" },
];

const features = [
  "Kualitas bahan premium dan tahan lama",
  "Proses produksi cepat dan tepat waktu",
  "Harga kompetitif untuk semua kalangan",
  "Customisasi design sesuai kebutuhan",
  "Layanan konsultasi gratis",
  "After-sales support terpercaya",
];

const CountUpAnimation = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={countRef} className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
      {count}{suffix}
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="inline-block mb-3">
              <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                Tentang Kami
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
              Mitra Terpercaya untuk Kebutuhan <span className="gradient-text">Konveksi Anda</span>
            </h2>
            
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Sekala Industry berdiri dengan komitmen untuk memberikan solusi konveksi terbaik bagi bisnis dan organisasi di Indonesia. 
              Dengan pengalaman bertahun-tahun, kami memahami kebutuhan setiap klien dan menghadirkan produk berkualitas tinggi 
              yang tidak hanya memenuhi ekspektasi, tetapi melampaui standar industri.
            </p>

            <div className="space-y-2.5">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-2.5 group animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  data-testid={`about-feature-${index}`}
                >
                  <div className="p-1 bg-accent rounded-md group-hover:bg-accent transition-all duration-300 group-hover:scale-110 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-foreground flex-shrink-0" />
                  </div>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up h-full" style={{ animationDelay: '0.1s' }}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-card to-card/50 p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 flex flex-col justify-center"
                data-testid={`about-stat-${index}`}
              >
                <div className="relative">
                  <CountUpAnimation end={stat.value} suffix={stat.suffix} />
                  <div className="text-sm text-muted-foreground font-semibold group-hover:text-foreground transition-colors mt-1">
                    {stat.label}
                  </div>
                  
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
