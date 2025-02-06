import { card_data } from "@/data";
import Marquee from "react-fast-marquee";
import { Button } from "./ui/button";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import heart from "../../public/Heart.svg";

function CardSlider({
  title,
  direction,
}: {
  title?: string;
  direction: "left" | "right" | "up" | "down" | undefined;
}) {
  const [liked, setLiked] = useState(Array(card_data.length).fill(true));

  const toggle = (index: number) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  return (
    <div>
      <div className=" md:max-w-6xl lg:max-w-[1400px] mx-auto px-4 py-16 text-start">
        <h1 className="md:max-w-6xl mx-auto lg:max-w-[1400px] text-white">
          {title && title}
        </h1>
        {title && <div className="bg-blue-600 h-[5px] w-36"></div>}
      </div>
      <Marquee pauseOnHover className="relative" direction={direction}>
        {card_data.map((card, index) => {
          return (
            <div className="w-[250px] mx-4 text-center self-start" key={index}>
              <img
                src={card.img}
                className="w-full h-[370px] object-cover"
                alt="card"
              />
              <div>
                <p className="text-gray-400 mt-4 mb-0">
                  Istanbul, {card.date} - current
                </p>
                <h4 className="my-1 text-3xl text-white">{card.title}</h4>
                <Button
                  variant={"default"}
                  size={"lg"}
                  className="bg-blue-500 inline-block rounded-none my-4 font-bold text-black"
                >
                  Read now
                </Button>
              </div>
              {/* free or pro and like button */}
              <div className="absolute top-2 p-2  w-[250px] flex justify-between items-center text-start">
                <span
                  style={{
                    background: "rgba(243, 244, 246, 0.50)",
                  }}
                  className={`text-[12px] px-3 rounded-xl ${
                    card.cost === "Free"
                      ? "text-green-300"
                      : "text-blue-200 font-bold"
                  }`}
                >
                  {card.cost === "Free" ? card.cost : card.cost}
                </span>
                <button
                  className="text-[12px] p-2 rounded-full text-xl"
                  style={{ background: "rgba(243, 244, 246, 0.50)" }}
                  onClick={() => toggle(index)}
                >
                  {liked[index] ? <CiHeart /> : <img src={heart} />}
                </button>
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

export default CardSlider;
