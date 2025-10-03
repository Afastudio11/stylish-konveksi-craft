import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "500+", label: "Klien Puas" },
  { value: "1000+", label: "Produk Terjual" },
  { value: "5+", label: "Tahun Pengalaman" },
  { value: "100%", label: "Kepuasan Pelanggan" },
];

const features = [
  "Kualitas bahan premium dan tahan lama",
  "Proses produksi cepat dan tepat waktu",
  "Harga kompetitif untuk semua kalangan",
  "Customisasi design sesuai kebutuhan",
  "Layanan konsultasi gratis",
  "After-sales support terpercaya",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Tentang Kami
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Mitra Terpercaya untuk Kebutuhan <span className="text-primary">Konveksi Anda</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Sekala Industry berdiri dengan komitmen untuk memberikan solusi konveksi terbaik bagi bisnis dan organisasi di Indonesia. 
              Dengan pengalaman bertahun-tahun, kami memahami kebutuhan setiap klien dan menghadirkan produk berkualitas tinggi 
              yang tidak hanya memenuhi ekspektasi, tetapi melampaui standar industri.
            </p>

            <div className="space-y-3 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
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
