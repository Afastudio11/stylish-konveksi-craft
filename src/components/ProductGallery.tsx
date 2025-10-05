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

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-4">
            Portofolio <span className="text-accent">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat berbagai produk konveksi berkualitas yang telah kami buat untuk klien kami
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4] animate-scale-in hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-accent text-primary text-xs font-bold rounded-full mb-2">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {product.title}
                </h3>
              </div>

              {/* Border Accent */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors duration-300 shadow-glow-primary hover:shadow-xl"
          >
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
