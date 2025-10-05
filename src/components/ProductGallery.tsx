import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductGallery = () => {
  const products = [
    {
      id: 1,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0016_1759648130417.jpg",
      title: "Celana Chino",
      category: "Casual"
    },
    {
      id: 2,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0018_1759648130418.jpg",
      title: "Varsity Jacket",
      category: "Streetwear"
    },
    {
      id: 3,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0024_1759648130419.jpg",
      title: "Seragam Formal",
      category: "Formal"
    },
    {
      id: 4,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0026_1759648130419.jpg",
      title: "Toga Wisuda",
      category: "Akademik"
    },
    {
      id: 5,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0028_1759648130419.jpg",
      title: "Dress Motif",
      category: "Fashion"
    },
    {
      id: 6,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0030_1759648130420.jpg",
      title: "Jumpsuit Custom",
      category: "Workwear"
    },
    {
      id: 7,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0014_1759648130420.jpg",
      title: "Coach Jacket",
      category: "Streetwear"
    },
    {
      id: 8,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0012_1759645213700.jpg",
      title: "Sweater Custom",
      category: "Streetwear"
    },
    {
      id: 9,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0004_1759645213702.jpg",
      title: "Jersey Olahraga",
      category: "Sport"
    },
    {
      id: 10,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0022_1759645213702.jpg",
      title: "Seragam Sekolah",
      category: "Formal"
    },
    {
      id: 11,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0020_1759645213702.jpg",
      title: "Vest Tactical",
      category: "Streetwear"
    },
    {
      id: 12,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0006_1759645213702.jpg",
      title: "Kemeja Bordir",
      category: "Casual"
    },
    {
      id: 13,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0008_1759645213703.jpg",
      title: "Polo Shirt",
      category: "Corporate"
    },
    {
      id: 14,
      image: "/products/SEKALA PRICELIST KONVEKSI_page-0010_1759645213703.jpg",
      title: "Hoodie Premium",
      category: "Streetwear"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const scrollNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const getVisibleProducts = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + products.length) % products.length;
      visible.push({ ...products[index], position: i });
    }
    return visible;
  };

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            Our <span className="text-accent">Portofolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat berbagai produk konveksi berkualitas yang telah kami buat untuk klien kami
          </p>
        </div>

        <div className="relative h-[450px] md:h-[550px] mb-12">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              {getVisibleProducts().map((product, idx) => {
                const { position } = product;
                const isCenter = position === 0;
                
                const scale = isCenter ? 1 : 0.75;
                const opacity = Math.abs(position) <= 1 ? 1 : 0.3;
                const translateX = position * 300;
                const zIndex = isCenter ? 20 : 10 - Math.abs(position);

                return (
                  <div
                    key={`${product.id}-${idx}`}
                    className="absolute transition-all duration-500 ease-out"
                    style={{
                      transform: `translateX(${translateX}px) scale(${scale})`,
                      opacity,
                      zIndex,
                    }}
                  >
                    <div className={`relative overflow-hidden rounded-2xl bg-white shadow-xl h-[380px] md:h-[450px] w-[280px] md:w-[320px] transition-all duration-500 ${
                      isCenter ? 'ring-4 ring-accent shadow-2xl' : ''
                    }`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      
                      <div className={`absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent transition-opacity duration-500 ${
                        isCenter ? 'opacity-80' : 'opacity-60'
                      }`} />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                        <span className="inline-block px-4 py-1.5 bg-accent text-foreground text-sm font-bold rounded-full mb-2 shadow-lg">
                          {product.category}
                        </span>
                        <h3 className={`font-black text-white drop-shadow-lg transition-all duration-500 ${
                          isCenter ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                        }`}>
                          {product.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-primary backdrop-blur-md shadow-xl rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-foreground transition-all duration-300 z-30 group border-2 border-white/20"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-primary backdrop-blur-md shadow-xl rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-foreground transition-all duration-300 z-30 group border-2 border-white/20"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-accent w-10" 
                  : "bg-primary/40 w-2.5 hover:bg-primary"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center animate-fade-in">
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
