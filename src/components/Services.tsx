import { Sparkles, Palette, Clock, Shield } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Produksi Custom",
    description: "Buat produk sesuai kebutuhan dengan berbagai pilihan bahan, warna, dan design yang dapat disesuaikan",
  },
  {
    icon: Palette,
    title: "Design Konsultasi",
    description: "Tim desainer kami siap membantu mewujudkan ide Anda menjadi design yang menarik dan profesional",
  },
  {
    icon: Clock,
    title: "Pengerjaan Cepat",
    description: "Proses produksi yang efisien dengan timeline yang jelas dan dapat diandalkan untuk setiap pesanan",
  },
  {
    icon: Shield,
    title: "Quality Control",
    description: "Setiap produk melalui quality check ketat untuk memastikan standar kualitas terbaik",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold uppercase tracking-wider">
              Layanan Kami
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            Solusi Lengkap untuk <span className="gradient-text">Kebutuhan Konveksi</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kami menyediakan berbagai layanan profesional yang dirancang untuk memberikan hasil terbaik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`service-card-${index}`}
            >
              <div className="relative bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-3 h-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-glow-accent">
                    <service.icon className="w-8 h-8 text-accent transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  
                  <h3 className="text-xl font-black text-card-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Animated Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg text-muted-foreground mb-6">
            Siap untuk memulai proyek konveksi Anda?
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-foreground font-bold">Konsultasi Gratis Tersedia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
