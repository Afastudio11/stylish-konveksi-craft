import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    title: "Seragam Kantor",
    description: "Seragam kantor profesional dengan bahan berkualitas dan jahitan rapi",
  },
  {
    title: "Kaos Custom",
    description: "Kaos dengan desain custom untuk berbagai keperluan acara dan promosi",
  },
  {
    title: "Jaket & Hoodie",
    description: "Jaket dan hoodie dengan berbagai model dan bahan pilihan",
  },
  {
    title: "Seragam Sekolah",
    description: "Seragam sekolah dengan standar kualitas tinggi dan harga terjangkau",
  },
  {
    title: "Jersey Olahraga",
    description: "Jersey olahraga dengan bahan breathable dan printing berkualitas",
  },
  {
    title: "Topi & Aksesoris",
    description: "Topi, tas, dan aksesoris pendukung dengan custom branding",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Produk <span className="text-primary">Unggulan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berbagai produk konveksi berkualitas tinggi yang dapat disesuaikan dengan kebutuhan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-elegant group bg-card"
            >
              <CardContent className="p-8">
                <div className="h-32 bg-gradient-hero rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-4xl font-black text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
