import { CheckCircle2 } from "lucide-react";

const services = [
  "Desain gratis sebelum proses produksi.",
  "Pemilihan bahan sesuai keinginan pelanggan dengan katalog bahan yang lengkap.",
  "Konsultasi model untuk menghasilkan produk yang sesuai dengan kebutuhan.",
];

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="inline-block mb-3">
            <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
              Tentang Kami
            </span>
          </div>
          
          <div className="bg-primary p-6 md:p-8 rounded-lg animate-slide-up">
            <p className="text-base md:text-lg text-white leading-relaxed mb-4">
              Sekala Industry adalah pabrik percetakan dan konveksi yang didirikan pada tahun 2024 dan berlokasi di Kota Makassar. Kami melayani berbagai kebutuhan cetak dan jahit untuk komunitas, perusahaan, maupun instansi. Kantor pemasaran kami berada di Jl. Maccini Sawah No 47, Kota Makassar
            </p>
            
            <p className="text-base md:text-lg text-white leading-relaxed">
              Sekala Industry memproduksi berbagai produk seperti kaos, jaket, seragam kerja, baju perawat, wearpack, jas almamater, topi, rompi, dan produk lainnya. Dengan kapasitas produksi mencapai ribuan potong setiap bulannya, kami melayani pelanggan di seluruh wilayah Indonesia. Didukung oleh tim profesional, berpengalaman, serta penggunaan peralatan modern, kami berkomitmen untuk menjadi salah satu perusahaan konveksi dan percetakan terbaik di Makassar.
            </p>
          </div>

          <div className="bg-muted/50 p-6 md:p-8 rounded-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Kepuasan pelanggan adalah prioritas utama kami. Oleh karena itu, kami menawarkan berbagai layanan, seperti:
            </h3>
            
            <div className="grid gap-y-4 mb-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 group"
                  data-testid={`about-service-${index}`}
                >
                  <div className="p-1.5 bg-accent rounded-md group-hover:bg-accent transition-all duration-300 group-hover:scale-110 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-foreground flex-shrink-0" />
                  </div>
                  <span className="text-base md:text-lg text-foreground group-hover:text-primary transition-colors">{service}</span>
                </div>
              ))}
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Didirikan dengan semangat inovasi dan dedikasi, Sekala Industry terus melakukan evaluasi dan pembaruan untuk memberikan hasil terbaik yang sesuai dengan harapan pelanggan. Kami siap menjadi mitra yang dapat diandalkan dalam mencipta kan produk yang berkualitas tinggi dan penuh nilai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
