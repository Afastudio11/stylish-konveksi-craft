import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Sekala Industry" className="h-8 w-auto" />
            <span className="text-xl font-bold text-background">SEKALA INDUSTRY</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-background/80 mb-2">
              © 2024 Sekala Industry. All rights reserved.
            </p>
            <p className="text-accent font-semibold">
              #KALACINTABERPOLA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
