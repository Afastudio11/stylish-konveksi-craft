import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import uniformImg from "@/assets/product-uniforms.jpg";
import tshirtImg from "@/assets/product-tshirts.jpg";
import jacketImg from "@/assets/product-jackets.jpg";

const products = [
  {
    title: "Seragam Kantor & Institusi",
    description: "Seragam profesional dengan desain modern dan bahan berkualitas tinggi untuk perusahaan dan institusi pendidikan",
    image: uniformImg,
    features: ["Custom Design", "Berbagai Ukuran", "Bahan Premium"],
  },
  {
    title: "Kaos & Polo Custom",
    description: "Kaos dan polo shirt dengan printing berkualitas untuk kebutuhan promosi, event, atau merchandise",
    image: tshirtImg,
    features: ["Sablon Premium", "Bordir Presisi", "Warna Variatif"],
  },
  {
    title: "Jaket & Hoodie",
    description: "Koleksi jaket dan hoodie dengan berbagai model dan material untuk gaya kasual hingga formal",
    image: jacketImg,
    features: ["Bahan Pilihan", "Cutting Modern", "Detail Rapi"],
  },
];

const Products = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider">
              Produk Kami
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            Produk Berkualitas untuk <span className="gradient-text">Setiap Kebutuhan</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Eksplorasi berbagai produk konveksi kami yang dirancang dengan detail dan kualitas terbaik
          </p>
        </div>

        <div className="space-y-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
              data-testid={`product-card-${index}`}
            >
              <div className={`bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${
                index % 2 === 0 ? 'lg:hover:-translate-x-2' : 'lg:hover:translate-x-2'
              }`}>
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-80 lg:h-96 overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      data-testid={`product-image-${index}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 px-4 py-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-bold text-primary">Premium Quality</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl lg:text-4xl font-black text-card-foreground mb-4 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-semibold border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                          data-testid={`product-feature-${index}-${idx}`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Button 
                      onClick={scrollToContact}
                      className="w-fit bg-accent hover:bg-accent-dark text-primary font-bold px-8 py-6 transition-all duration-300 hover:scale-105 shadow-glow-accent group/btn"
                      data-testid={`button-order-${index}`}
                    >
                      Pesan Sekarang
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
