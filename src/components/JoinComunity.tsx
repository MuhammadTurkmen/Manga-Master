import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function JoinComunity() {
  return (
    <div className="max-w-3xl mx-auto text-white text-center mt-20 p-4">
      <h1 className="text-3xl font-bold lg:text-5xl">
        Join Our Discord Community
      </h1>
      <div className="w-28 h-1 bg-blue-500 mx-auto lg:w-40"></div>
      <p className="text-gray-400 my-3">
        Dive into the world of manga with us! Join our vibrant Discord community
        where fans like you gather to share their love for the best manga out
        there. Connect with fellow enthusiasts, discuss your favorite series,
        and discover hidden gems!
      </p>
      <Button asChild variant={"default"} size={"lg"} className="bg-blue-500">
        <Link to={""} className="no-underline text-xl font-bold">
          Join now
        </Link>
      </Button>
    </div>
  );
}

export default JoinComunity;
