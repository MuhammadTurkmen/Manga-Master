import img from "../../public/services-image.png";

function ServicesHero() {
  return (
    <div
      className="pt-24 px-2 pb-20 lg:pb-24 lg:pt-36 text-center bg-cover text-gray-200"
      style={{
        background: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-blue-500 font-semibold md:text-4xl lg:text-5xl">
        Discover Our Services
      </h1>
      <p className="md:text-xl lg:text-2xl">
        Explore our Services in production, marketing, and consulting
      </p>
    </div>
  );
}

export default ServicesHero;
