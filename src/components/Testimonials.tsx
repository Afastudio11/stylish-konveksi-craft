import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    position: "Manager Operasional",
    company: "PT Maju Bersama",
    text: "Kualitas produk konveksi dari Sekala Industry sangat memuaskan. Bahan berkualitas tinggi dan jahitan rapi - mitra terpercaya untuk kebutuhan konveksi profesional.",
    avatar: "B"
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    position: "HRD Manager",
    company: "Bank Mandiri",
    text: "Pelayanan yang sangat baik dan responsif. Tim Sekala Industry membantu kami mewujudkan desain seragam yang profesional untuk karyawan.",
    avatar: "S"
  },
  {
    id: 3,
    name: "Ahmad Hidayat",
    position: "Ketua Organisasi",
    company: "KNPI Sulawesi Selatan",
    text: "Hasil cetak sablon dan bordir sangat tajam dan awet. Harga yang ditawarkan juga sangat kompetitif - sangat direkomendasikan untuk kebutuhan organisasi.",
    avatar: "A"
  },
  {
    id: 4,
    name: "Dewi Lestari",
    position: "Event Organizer",
    company: "Creative Event",
    text: "Sekala Industry adalah partner terbaik untuk kebutuhan merchandise event kami. Selalu puas dengan hasil dan kecepatan produksinya - sangat reliable.",
    avatar: "D"
  },
  {
    id: 5,
    name: "Rizki Maulana",
    position: "Owner",
    company: "Tiga Rasa",
    text: "Kerjasama yang sangat profesional. Dari konsultasi, produksi hingga pengiriman semuanya berjalan lancar dan memuaskan - highly recommended partner.",
    avatar: "R"
  },
  {
    id: 6,
    name: "Indah Permata",
    position: "Koordinator Acara",
    company: "Universitas Hasanuddin",
    text: "Pengalaman bekerja sama dengan Sekala Industry sangat menyenangkan. Produk berkualitas tinggi dengan harga yang kompetitif - pilihan tepat untuk kampus.",
    avatar: "I"
  }
];

const Testimonials = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3">
            Apa Kata <span className="text-primary">Mereka</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Testimoni dari klien yang puas dengan layanan kami
          </p>
        </div>

        {/* Scrolling Grid */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll-testimonials">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary mb-4" />
                
                {/* Testimonial Text */}
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-6">
                  {testimonial.text}
                </p>

                {/* Profile Section */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm md:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
