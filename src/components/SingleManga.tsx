import { card_data } from "@/data";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function SingleManga() {
  const { id } = useParams();

  const card = card_data.filter((card) => card.id === Number(id));

  return (
    <div className="bg-black">
      <div className="md:max-w-6xl mx-auto lg:max-w-[1400px] items-center px-8 pb-32 pt-20">
        {card.map((manga) => {
          return (
            <div
              className={`flex  flex-col-reverse justify-center items-center gap-10 xl:gap-20 lg:flex-row-reverse`}
              key={manga.id}
            >
              <div className="flex flex-col items-center  lg:items-start text-center">
                <h1 className="text-white text-4xl xl:text-6xl font-semibold mb-4 ">
                  {manga.title}
                </h1>
                <p className="text-gray-200 lg:text-xl lg:leading-8 xl:text-2xl xl:leading-10  lg:text-start mb-5">
                  {manga.desc}
                </p>
                <p className="flex gap-1 items-center text-white">
                  4
                  <span className="text-yellow-400">
                    <FaStar />
                  </span>
                  <span className="text-yellow-400">
                    <FaStar />
                  </span>
                  <span className="text-yellow-400">
                    <FaStar />
                  </span>
                  <span className="text-yellow-400">
                    <FaStar />
                  </span>
                  (22,65)
                </p>
                <p className="text-white">Published in {manga.date}</p>
                <p className="text-white">Adana, Turkey</p>
                <button className="w-full block text-xl border-1 border-1 border-blue-500 rounded-xl py-3 mt-5 text-blue-500 hover:text-white hover:bg-blue-500 transition-all duration-500">
                  Download now
                </button>
              </div>
              <img src={manga.img} alt="" className="w-full rounded-3xl" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SingleManga;
