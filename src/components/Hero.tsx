import HeroGallery from "./HeroGallery";

const stats = [
  { value: "500+", label: "Klien Puas" },
  { value: "1000+", label: "Produk Terjual" },
  { value: "5+", label: "Tahun Pengalaman" },
  { value: "100%", label: "Kepuasan Pelanggan" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#343CCD' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/hero-background.png" 
          alt="Sekala Industry Products" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#343CCD] via-[#343CCD] to-[#2a32a8]" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight">
              Wujudkan Brand Identity<br />
              <span className="bg-accent text-foreground px-4 py-1 inline-block shadow-glow-accent mt-4 rounded-lg">Premium Anda</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              Sekala Industry adalah mitra terpercaya untuk kebutuhan konveksi profesional. Dari seragam perusahaan hingga merchandise custom dengan kualitas terbaik.
            </p>

            {/* Stats - 4 kotak kecil berjejer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg flex flex-col items-center justify-center text-center"
                  style={{ backgroundColor: '#d4ff00' }}
                >
                  <div className="text-2xl md:text-3xl font-black text-black">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-black font-semibold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Gallery */}
          <div className="hidden lg:block animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <HeroGallery />
          </div>
        </div>

        {/* Mobile Gallery - Below text on small screens */}
        <div className="lg:hidden mt-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <HeroGallery />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
