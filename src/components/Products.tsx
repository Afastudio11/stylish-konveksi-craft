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
    <section id="products" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Produk Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Produk Berkualitas untuk <span className="text-primary">Setiap Kebutuhan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Eksplorasi berbagai produk konveksi kami yang dirancang dengan detail dan kualitas terbaik
          </p>
        </div>

        <div className="space-y-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border ${
                index % 2 === 0 ? 'hover:border-primary/30' : 'hover:border-accent/30'
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-80 lg:h-auto overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button 
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-fit group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Pesan Sekarang
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
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
