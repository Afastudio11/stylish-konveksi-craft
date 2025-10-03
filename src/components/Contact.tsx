import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Hubungi <span className="text-accent">Kami</span>
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Siap melayani konsultasi dan pemesanan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="border-0 bg-card/95 backdrop-blur">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-hero p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground mb-2">Telepon / WhatsApp</h3>
                  <a 
                    href="tel:085754777068" 
                    className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
                  >
                    0857-5477-7068
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/95 backdrop-blur">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-hero p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground mb-2">Jam Operasional</h3>
                  <p className="text-xl font-bold text-primary">
                    9.00 AM - 17.00 PM
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Senin - Sabtu</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/95 backdrop-blur">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-hero p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground mb-2">Email</h3>
                  <a 
                    href="mailto:info@sekalaindustry.com" 
                    className="text-lg font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    info@sekalaindustry.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/95 backdrop-blur">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-hero p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground mb-2">Lokasi</h3>
                  <p className="text-muted-foreground">
                    Jawa Barat, Indonesia
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-block bg-accent px-10 py-5 mb-6 transform rotate-1 shadow-glow">
            <p className="text-xl md:text-2xl font-bold text-accent-foreground">
              ORDER AND CONSULTATION
            </p>
          </div>
          
          <div className="mb-8">
            <a 
              href="tel:085754777068"
              className="text-3xl md:text-5xl font-black text-accent hover:text-accent-glow transition-colors"
            >
              0857-5477-7068
            </a>
          </div>

          <Button 
            size="lg"
            className="bg-accent hover:bg-accent-glow text-accent-foreground font-bold text-lg px-12 py-6 shadow-glow transition-all hover:scale-105"
            onClick={() => window.open('https://wa.me/6285754777068', '_blank')}
          >
            <Phone className="mr-2" />
            Chat WhatsApp
          </Button>

          <p className="mt-8 text-primary-foreground/70 text-sm">
            #KALACINTABERPOLA
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
