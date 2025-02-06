import { services_data } from "@/data";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function OurServices() {
  return (
    <div>
      <div className="md:max-w-6xl mx-auto lg:max-w-[1400px] items-center py-20 lg:py-32 px-8 flex flex-col gap-y-20 ">
        {services_data.map((service) => {
          return (
            <div
              key={service.id}
              className={`flex flex-col-reverse justify-center items-center gap-10 xl:gap-20 ${
                service.id === 2 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="flex flex-col items-center  lg:items-start text-center">
                <h1 className="text-white text-4xl xl:text-5xl font-semibold mb-4 ">
                  {service.title}
                </h1>
                <p className="text-gray-200 lg:text-xl lg:leading-8 xl:text-2xl xl:leading-10  lg:text-start">
                  {service.desc}
                </p>
                <Button
                  asChild
                  variant={"default"}
                  className="bg-blue-500  mt-10 "
                  size="lg"
                >
                  <Link to={"/contact"} className="no-underline ">
                    Contact us
                  </Link>
                </Button>
              </div>
              <img src={service.img} alt="" className="w-full rounded-3xl" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurServices;
