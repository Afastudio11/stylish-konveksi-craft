import { useState, useEffect } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [products.length]);

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
    <section className="py-10 md:py-12 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-10 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3">
            Our <span className="text-primary">Portofolio</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Lihat berbagai produk konveksi berkualitas yang telah kami buat untuk klien kami
          </p>
        </div>

        <div className="relative h-[380px] md:h-[480px] mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ perspective: '1500px', perspectiveOrigin: 'center center' }}>
            <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
              {getVisibleProducts().map((product, idx) => {
                const { position } = product;
                const isCenter = position === 0;
                
                const scale = isCenter ? 1.1 : 0.7;
                const opacity = Math.abs(position) <= 1 ? 1 : 0.3;
                const translateX = position * 320;
                const translateZ = isCenter ? 50 : -100;
                const rotateY = position * 5;
                const zIndex = isCenter ? 20 : 10 - Math.abs(position);

                return (
                  <div
                    key={`${product.id}-${idx}`}
                    className="absolute"
                    style={{
                      transform: `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, 1)`,
                      opacity,
                      zIndex,
                      transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 1s cubic-bezier(0.4, 0, 0.2, 1)',
                      transformStyle: 'preserve-3d',
                      willChange: 'transform, opacity',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                      WebkitTransform: `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, 1)`,
                    }}
                  >
                    <div className={`relative overflow-hidden rounded-2xl bg-white h-[380px] md:h-[450px] w-[280px] md:w-[320px] ${
                      isCenter ? 'ring-[6px] ring-accent shadow-2xl' : 'ring-2 ring-white/20'
                    }`}
                    style={{
                      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                      WebkitTransform: 'translateZ(0)',
                    }}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      
                      <div className={`absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent ${
                        isCenter ? 'opacity-90' : 'opacity-70'
                      }`}
                      style={{
                        transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)'
                      }} />
                      
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase rounded shadow-lg">
                          DETAILS
                        </span>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                        <span className="inline-block px-4 py-1.5 bg-accent text-foreground text-sm font-bold rounded-full mb-3 shadow-lg">
                          {product.category}
                        </span>
                        <h3 className={`font-black text-white drop-shadow-lg ${
                          isCenter ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
                        }`}
                        style={{
                          transition: 'font-size 1s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}>
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
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-primary shadow-2xl rounded-full flex items-center justify-center text-white hover:bg-primary/90 hover:scale-110 transition-all duration-300 z-30 group"
            aria-label="Previous"
          >
            <ChevronLeft className="w-7 h-7 md:w-8 md:h-8" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-primary shadow-2xl rounded-full flex items-center justify-center text-white hover:bg-primary/90 hover:scale-110 transition-all duration-300 z-30 group"
            aria-label="Next"
          >
            <ChevronRight className="w-7 h-7 md:w-8 md:h-8" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
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
      </div>
    </section>
  );
};

export default ProductGallery;
