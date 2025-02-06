import { Link } from "react-router-dom";
import Image from "../../public/hot-one.png";

function HotManga() {
  return (
    <div className="md:max-w-6xl lg:max-w-[1400px] mx-auto px-4 py-20">
      <div className=" text-start mb-12">
        <h1 className="md:max-w-6xl mx-auto lg:max-w-[1400px] text-white">
          Hot Manga
        </h1>
        <div className="bg-blue-600 h-[5px] w-36"></div>
      </div>

      <Link to={"#"}>
        <img src={Image} alt="hot" className="w-full" />
      </Link>

      {/* <div
        className="flex justify-center items-center gap-4 flex-col w-full mt-12 text-white py-20"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <h1>War of gousts hot season</h1>
        <Button variant={"default"} size={"lg"}>
          Read now{" "}
        </Button>
      </div> */}
    </div>
  );
}

export default HotManga;
