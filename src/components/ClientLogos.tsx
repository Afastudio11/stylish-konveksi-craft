const logos = [
  { name: "Mercedes-Benz", image: "/mercedes-benz.png" },
  { name: "Pegadaian", image: "/pegadaian.png" },
  { name: "Kota Makassar", image: "/makassar.png" },
  { name: "Antam", image: "/antam.png" },
];

const ClientLogos = () => {
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];
  
  return (
    <section className="py-3 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="mx-10 inline-flex items-center justify-center flex-shrink-0"
            >
              <img 
                src={logo.image} 
                alt={logo.name}
                className="h-14 w-auto object-contain"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(21%) sepia(96%) saturate(3066%) hue-rotate(222deg) brightness(98%) contrast(101%)'
                }}
                onError={(e) => {
                  console.error(`Failed to load image: ${logo.image}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
