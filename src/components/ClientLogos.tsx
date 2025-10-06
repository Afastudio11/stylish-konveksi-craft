const logos = [
  { name: "RotoShow", icon: "🎬" },
  { name: "waves", icon: "🌊" },
  { name: "RotoShow", icon: "🎥" },
  { name: "travelers", icon: "✈️" },
  { name: "goldlines", icon: "✨" },
  { name: "velocity", icon: "⚡" },
  { name: "TechCorp", icon: "💻" },
  { name: "DesignHub", icon: "🎨" },
  { name: "MediaPro", icon: "📱" },
  { name: "CloudNet", icon: "☁️" },
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground">
          Dipercaya oleh <span className="gradient-text">Berbagai Perusahaan</span>
        </h3>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-8 inline-flex items-center justify-center gap-3 px-8 py-4 bg-background/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <span className="text-3xl">{logo.icon}</span>
              <span className="text-lg font-semibold text-foreground">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
