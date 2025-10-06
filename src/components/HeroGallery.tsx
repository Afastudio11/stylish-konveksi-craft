import { Card } from "@/components/ui/card";
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
      image: "/attached_assets/SLIDE 2 TY_1759740701993.png",
      alt: "Rompi Tiga Rasa - Konveksi Rompi Custom",
    },
    {
      id: 2,
      image: "/attached_assets/SLIDE 5 TY_1759740701994.png",
      alt: "Jersey KNPI - Konveksi Jersey Olahraga",
    },
    {
      id: 3,
      image: "/attached_assets/SLIDE 3 TY_1759740701994.png",
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
          }),
        ]}
        className="w-full max-w-xl"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id}>
              <Card className="border-0 bg-white/10 backdrop-blur-sm overflow-hidden shadow-2xl">
                <div className="aspect-square relative">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-accent/90 text-foreground border-0 hover:bg-accent" />
        <CarouselNext className="right-4 bg-accent/90 text-foreground border-0 hover:bg-accent" />
      </Carousel>
    </div>
  );
};

export default HeroGallery;
