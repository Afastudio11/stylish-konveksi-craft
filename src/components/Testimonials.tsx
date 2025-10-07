import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    position: "Manager Operasional",
    company: "PT Maju Bersama",
    rating: 5,
    text: "Kualitas produk konveksi dari Sekala Industry sangat memuaskan. Bahan berkualitas tinggi dan jahitan rapi. Pesanan kami selalu selesai tepat waktu.",
    image: "/testimonial-1.jpg"
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    position: "HRD Manager",
    company: "Bank Mandiri",
    rating: 5,
    text: "Pelayanan yang sangat baik dan responsif. Tim Sekala Industry membantu kami mewujudkan desain seragam yang profesional untuk karyawan.",
    image: "/testimonial-2.jpg"
  },
  {
    id: 3,
    name: "Ahmad Hidayat",
    position: "Ketua Organisasi",
    company: "KNPI Sulawesi Selatan",
    rating: 5,
    text: "Hasil cetak sablon dan bordir sangat tajam dan awet. Harga yang ditawarkan juga sangat kompetitif. Sangat direkomendasikan!",
    image: "/testimonial-3.jpg"
  },
  {
    id: 4,
    name: "Dewi Lestari",
    position: "Event Organizer",
    company: "Creative Event",
    rating: 5,
    text: "Sekala Industry adalah partner terbaik untuk kebutuhan merchandise event kami. Selalu puas dengan hasil dan kecepatan produksinya.",
    image: "/testimonial-4.jpg"
  },
  {
    id: 5,
    name: "Rizki Maulana",
    position: "Owner",
    company: "Tiga Rasa",
    rating: 5,
    text: "Kerjasama yang sangat profesional. Dari konsultasi, produksi hingga pengiriman semuanya berjalan lancar dan memuaskan.",
    image: "/testimonial-5.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
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

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full -ml-16 -mb-16"></div>
            
            <div className="relative z-10">
              {/* Profile Section */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-lg">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {currentTestimonial.position} • {currentTestimonial.company}
                  </p>
                  
                  {/* Star Rating */}
                  <div className="flex gap-1 justify-center md:justify-start">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`w-5 h-5 ${
                          index < currentTestimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="mb-8">
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed italic">
                  "{currentTestimonial.text}"
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all duration-300 group"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-primary w-8"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all duration-300 group"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
