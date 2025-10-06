import HeroGallery from "./HeroGallery";
import { Users, Package, Award, TrendingUp } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Klien Puas" },
    { icon: Package, value: "1000+", label: "Produk Terjual" },
    { icon: Award, value: "5+", label: "Tahun Pengalaman" },
    { icon: TrendingUp, value: "100%", label: "Kepuasan" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#343CCD' }}>
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#343CCD] via-[#343CCD]/95 to-[#2a32a8]" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-slide-up lg:pt-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
              Wujudkan Brand Identity
              <span className="bg-accent text-foreground px-3 py-1 inline-block shadow-glow-accent mt-3 rounded-lg ml-2">Premium Anda</span>
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-xl">
              Sekala Industry adalah mitra terpercaya untuk kebutuhan konveksi profesional. Dari seragam perusahaan hingga merchandise custom dengan kualitas terbaik.
            </p>

            {/* Mobile Gallery */}
            <div className="lg:hidden mt-8">
              <HeroGallery />
            </div>

            {/* Stats for mobile */}
            <div className="grid grid-cols-2 gap-3 lg:hidden mt-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <Icon className="w-5 h-5 text-accent mb-2" />
                    <div className="text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="hidden lg:flex flex-col gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {/* Image Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <HeroGallery />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                    <Icon className="w-6 h-6 text-accent mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-black text-white">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Feature Card */}
            <div className="bg-accent/90 backdrop-blur-sm rounded-xl p-5 border border-accent">
              <h3 className="text-lg font-bold text-foreground mb-2">Kualitas Terjamin</h3>
              <p className="text-sm text-foreground/80">Bahan premium, jahitan rapi, dan desain custom sesuai kebutuhan Anda</p>
            </div>
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
