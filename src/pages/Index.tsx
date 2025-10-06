import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGallery from "@/components/ProductGallery";
import About from "@/components/About";
import ClientLogos from "@/components/ClientLogos";
import Products from "@/components/Products";
import OrderSystem from "@/components/OrderSystem";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ClientLogos />
      <ProductGallery />
      <Products />
      <OrderSystem />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
