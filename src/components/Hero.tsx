import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import { hero_slider_data } from "@/data";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Button } from "./ui/button";

function Hero() {
  return (
    <div className="relative">
      <CCarousel indicators>
        {hero_slider_data.map((hero, index) => {
          return (
            <CCarouselItem key={index} className="">
              {/* background Image */}
              <CImage
                src={hero.image}
                className="d-block w-full h-72 sm:h-96 lg:h-[500px] object-cover xl:h-[700px] "
                alt={hero.title}
              />
              {/* Text on top of the image */}
              <CCarouselCaption className="-ml-10 max-w-56 mb-4 sm:max-w-80 sm:mb-96 xl:mb-[300px] text-start lg:max-w-lg ">
                <h1 className="text-4xl text-bold sm:text-5xl lg:text-[5rem]">
                  {hero.title}
                </h1>
                <p className="text-gray-400 text-sm lg:text-xl">{hero.desc}</p>
                <img
                  src={hero.little_hero}
                  className="absolute top-0 bottom-0 h-72 object-cover right-0 left-48 sm:h-96 sm:left-80 md:left-96 md:-mt-12 lg:h-[500px] lg:left-[450px] lg:-mt-20 xl:h-[700px] xl:left-[600px] xl:-mt-24 2xl:left-[860px]"
                />
                <div>
                  <Button
                    variant={"outline"}
                    className="bg-black mr-4 border-blue-500 text-blue-400 rounded-xl hover:bg-black hover:text-primary hover:opacity-90 sm:mb-16 sm:mt-8 md:mb-5 xl:mb-52"
                    size={"lg"}
                  >
                    Read now
                  </Button>
                  <Button
                    variant={"outline"}
                    className="bg-black hidden sm:inline border-blue-500 text-blue-400 rounded-xl hover:bg-black hover:text-primary hover:opacity-90 sm:mb-16 sm:mt-8 md:mb-5 xl:mb-52"
                    size={"lg"}
                  >
                    Our services
                  </Button>
                </div>
              </CCarouselCaption>
            </CCarouselItem>
          );
        })}
      </CCarousel>
    </div>
  );
}

export default Hero;
