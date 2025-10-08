const customerPhotos = [
  {
    id: 1,
    image: "/attached_assets/IMG-20251008-WA0020_1759894910497.jpg",
    alt: "Pelanggan Sekala Industry"
  },
  {
    id: 2,
    image: "/attached_assets/IMG-20251008-WA0002_1759894910497.jpg",
    alt: "Pelanggan Sekala Industry"
  },
  {
    id: 3,
    image: "/attached_assets/IMG-20251008-WA0003_1759894910497.jpg",
    alt: "Pelanggan Sekala Industry"
  },
  {
    id: 4,
    image: "/attached_assets/IMG-20251008-WA0004_1759894910498.jpg",
    alt: "Pelanggan Sekala Industry"
  },
  {
    id: 5,
    image: "/attached_assets/IMG-20251008-WA0005_1759894910498.jpg",
    alt: "Pelanggan Sekala Industry"
  },
  {
    id: 6,
    image: "/attached_assets/IMG-20251008-WA0006_1759894910499.jpg",
    alt: "Pelanggan Sekala Industry"
  },
  {
    id: 7,
    image: "/attached_assets/IMG-20251008-WA0007_1759894910499.jpg",
    alt: "Pelanggan Sekala Industry"
  },
  {
    id: 8,
    image: "/attached_assets/IMG-20251008-WA0008_1759894910499.jpg",
    alt: "Pelanggan Sekala Industry"
  },
  {
    id: 9,
    image: "/attached_assets/IMG-20251008-WA0009_1759894910500.jpg",
    alt: "Pelanggan Sekala Industry"
  },
  {
    id: 10,
    image: "/attached_assets/IMG-20251008-WA0010_1759894910500.jpg",
    alt: "Pelanggan Sekala Industry"
  },
  {
    id: 11,
    image: "/attached_assets/IMG-20251008-WA0011_1759894910500.jpg",
    alt: "Pelanggan Sekala Industry"
  },
  {
    id: 12,
    image: "/attached_assets/IMG-20251008-WA0012_1759894910501.jpg",
    alt: "Pelanggan Sekala Industry"
  },
  {
    id: 13,
    image: "/attached_assets/IMG-20251008-WA0013_1759894910501.jpg",
    alt: "Pelanggan Sekala Industry"
  },
  {
    id: 14,
    image: "/attached_assets/IMG-20251008-WA0014_1759894910501.jpg",
    alt: "Pelanggan Sekala Industry"
  },
  {
    id: 15,
    image: "/attached_assets/IMG-20251008-WA0015_1759894910502.jpg",
    alt: "Pelanggan Sekala Industry"
  },
  {
    id: 16,
    image: "/attached_assets/IMG-20251008-WA0016_1759894910502.jpg",
    alt: "Pelanggan Sekala Industry"
  },
  {
    id: 17,
    image: "/attached_assets/IMG-20251008-WA0018_1759894910502.jpg",
    alt: "Pelanggan Sekala Industry"
  }
];

const Testimonials = () => {
  const duplicatedPhotos = [...customerPhotos, ...customerPhotos];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3">
            Galeri <span className="text-primary">Costumer</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas kami
          </p>
        </div>

        {/* Scrolling Photo Gallery */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll-testimonials">
            {duplicatedPhotos.map((photo, index) => (
              <div
                key={`${photo.id}-${index}`}
                className="flex-shrink-0 w-[320px] md:w-[380px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-[400px] md:h-[480px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
