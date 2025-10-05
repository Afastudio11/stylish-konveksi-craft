const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 md:py-32">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Wujudkan<br />
              Brand Identity<br />
              <span className="bg-accent text-primary px-4 py-2 inline-block">Premium Anda</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              Sekala Industry adalah mitra terpercaya untuk kebutuhan konveksi profesional. Dari seragam perusahaan hingga merchandise custom dengan kualitas terbaik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
