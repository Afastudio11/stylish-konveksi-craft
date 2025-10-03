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
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Layanan Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Solusi Lengkap untuk <span className="text-primary">Kebutuhan Konveksi</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Kami menyediakan berbagai layanan profesional yang dirancang untuk memberikan hasil terbaik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
