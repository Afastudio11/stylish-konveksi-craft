const logos = [
  { name: "Mercedes-Benz", image: "/attached_assets/Mercedes-Benz_Logo_2010.svg_1759738260407.png" },
  { name: "Pegadaian", image: "/attached_assets/Pegadaian_logo_(2013).svg_1759738260409.png" },
  { name: "Kota Makassar", image: "/attached_assets/Logo-Kota-Makassar-Format-PNG-CDR-AI-PDF-SVG-EPS_1759738260409.png" },
  { name: "Antam", image: "/attached_assets/logo-antam_1759738260409.png" },
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-primary overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-white">
          Dipercaya oleh <span className="text-accent">Berbagai Perusahaan</span>
        </h3>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-8 inline-flex items-center justify-center px-10 py-6 bg-white rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <img 
                src={logo.image} 
                alt={logo.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
