import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    value: "0857-5477-7068",
    link: "tel:085754777068",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@sekalaindustry.com",
    link: "mailto:info@sekalaindustry.com",
  },
  {
    icon: MapPin,
    title: "Lokasi",
    value: "Jawa Barat, Indonesia",
    link: "#",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    value: "Senin - Sabtu, 09:00 - 17:00",
    link: "#",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              Hubungi Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Siap Membantu <span className="text-primary">Kebutuhan Anda</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tim kami siap memberikan konsultasi dan solusi terbaik untuk proyek konveksi Anda
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="group bg-card p-6 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1 text-sm">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-medium">
                      {info.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-primary p-12 rounded-3xl text-center shadow-2xl">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Mulai Proyek Anda Sekarang
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan konveksi Anda dengan tim profesional kami. 
              Dapatkan penawaran terbaik dan layanan yang memuaskan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 transition-all hover:scale-105 shadow-xl"
                onClick={() => window.open('https://wa.me/6285754777068', '_blank')}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat WhatsApp
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 transition-all hover:scale-105"
                onClick={() => window.location.href = 'tel:085754777068'}
              >
                <Phone className="mr-2 w-5 h-5" />
                Telepon Kami
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
