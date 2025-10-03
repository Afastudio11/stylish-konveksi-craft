import { Shirt, Users, Palette, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Shirt,
    title: "Produksi Konveksi",
    description: "Memproduksi berbagai jenis pakaian seperti seragam, kaos, jaket, dan produk garmen lainnya dengan kualitas terbaik",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "Layanan desain custom sesuai kebutuhan Anda dengan tim desainer profesional yang berpengalaman",
  },
  {
    icon: Users,
    title: "Pesanan Satuan & Grosir",
    description: "Melayani pesanan dalam jumlah kecil maupun besar dengan harga kompetitif dan kualitas terjamin",
  },
  {
    icon: Clock,
    title: "Pengerjaan Cepat",
    description: "Proses produksi yang efisien dengan waktu pengerjaan yang dapat disesuaikan dengan kebutuhan Anda",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Layanan <span className="text-primary">Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan konveksi profesional untuk memenuhi kebutuhan bisnis dan organisasi Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-2xl mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
