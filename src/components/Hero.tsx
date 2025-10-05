const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/hero-products.png" 
          alt="Sekala Industry Products" 
          className="w-full h-full object-cover object-center"
        />
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 md:py-32">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight">
              Wujudkan<br />
              Brand Identity<br />
              <span className="bg-accent text-foreground px-6 py-2 inline-block shadow-glow-accent">Premium Anda</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              Sekala Industry adalah mitra terpercaya untuk kebutuhan konveksi profesional. Dari seragam perusahaan hingga merchandise custom dengan kualitas terbaik.
            </p>
          </div>
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
