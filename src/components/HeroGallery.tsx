import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroGallery = () => {
  const products = [
    {
      id: 1,
      image: "/products/rompi-tiga-rasa.png",
      alt: "Rompi Tiga Rasa - Konveksi Rompi Custom",
    },
    {
      id: 2,
      image: "/products/jersey-knpi.png",
      alt: "Jersey KNPI - Konveksi Jersey Olahraga",
    },
    {
      id: 3,
      image: "/products/jaket-planologi.png",
      alt: "Jaket Planologi Unhas - Konveksi Jaket Custom",
    },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id}>
              <div className="relative w-full h-[300px] lg:h-[350px]">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover rounded-xl"
                  loading="eager"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-accent/90 text-foreground border-0 hover:bg-accent shadow-lg h-8 w-8" />
        <CarouselNext className="right-2 bg-accent/90 text-foreground border-0 hover:bg-accent shadow-lg h-8 w-8" />
      </Carousel>
    </div>
  );
};

export default HeroGallery;
