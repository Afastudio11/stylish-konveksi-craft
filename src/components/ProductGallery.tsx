import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductGallery = () => {
  const products = [
    {
      id: 1,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0012_1759645213700.jpg",
      title: "Sweater Custom",
      category: "Streetwear"
    },
    {
      id: 2,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0004_1759645213702.jpg",
      title: "Jersey Olahraga",
      category: "Sport"
    },
    {
      id: 3,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0022_1759645213702.jpg",
      title: "Seragam Sekolah",
      category: "Formal"
    },
    {
      id: 4,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0020_1759645213702.jpg",
      title: "Vest Tactical",
      category: "Streetwear"
    },
    {
      id: 5,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0006_1759645213702.jpg",
      title: "Kemeja Bordir",
      category: "Casual"
    },
    {
      id: 6,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0008_1759645213703.jpg",
      title: "Polo Shirt",
      category: "Corporate"
    },
    {
      id: 7,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0010_1759645213703.jpg",
      title: "Hoodie Premium",
      category: "Streetwear"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollToIndex(currentIndex - 1);
    } else {
      setCurrentIndex(products.length - 1);
      scrollToIndex(products.length - 1);
    }
  };

  const scrollNext = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollToIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
      scrollToIndex(0);
    }
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const clientWidth = carouselRef.current.clientWidth;
      const scrollPosition = (scrollWidth / products.length) * index - (clientWidth / 2) + (scrollWidth / products.length / 2);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            Our <span className="text-accent">Portofolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat berbagai produk konveksi berkualitas yang telah kami buat untuk klien kami
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-12 md:px-16">
          <div 
            ref={carouselRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 md:gap-8 pb-4">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`flex-shrink-0 w-[280px] md:w-[350px] lg:w-[400px] transition-all duration-500 ${
                    index === currentIndex 
                      ? "scale-100 opacity-100" 
                      : "scale-90 opacity-50"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl aspect-[3/4] group">
                    {/* Image */}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent opacity-90" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <span className="inline-block px-4 py-2 bg-accent text-primary text-sm font-bold rounded-full mb-3 shadow-lg">
                        {product.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">
                        {product.title}
                      </h3>
                    </div>

                    {/* Border Glow */}
                    <div className="absolute inset-0 border-4 border-accent/0 group-hover:border-accent/60 rounded-3xl transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-primary backdrop-blur-md shadow-2xl rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-foreground transition-all duration-300 z-10 group border border-primary"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-primary backdrop-blur-md shadow-2xl rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-foreground transition-all duration-300 z-10 group border border-primary"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-accent w-8" 
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-accent text-foreground font-bold rounded-full hover:bg-accent-dark transition-all duration-300 shadow-glow-accent hover:shadow-xl hover:scale-105"
          >
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
