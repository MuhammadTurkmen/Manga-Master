import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import { review } from "@/data";
import React from "react";

function TestimonialCard() {
  const autoplay = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );

  return (
    <div className="md:max-w-6xl mx-auto lg:max-w-[1400px] p-8">
      <Carousel
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
        className="w-full max-w-[900px] mx-auto"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="-ml-1">
          {review.map((card) => {
            return (
              <CarouselItem
                key={card.id}
                className="pl-1 md:basis-1/2 lg:basis-1/2"
              >
                <div className="p-4">
                  <Card className="mt-20 lg:px-7 bg-black text-white">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <img
                        src={card.img}
                        alt="img"
                        className="-mt-20 relative z-10"
                      />

                      <p className="text-sm md:text-lg">{card.desc}</p>
                      <div className="flex flex-col md:flex-row items-center gap-2 justify-center">
                        {card.rating}
                        <div className="flex text-yellow-400 gap-1">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="bg-black mt-10 mr-52 hover:text-white hover:opacity-50" />
        <CarouselNext className="bg-black mt-10 ml-52 hover:text-white hover:opacity-50" />
      </Carousel>
    </div>
  );
}

export default TestimonialCard;
