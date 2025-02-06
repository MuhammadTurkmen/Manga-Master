import img from "../../public/writeing-img.jpg";

function OurMangas() {
  return (
    <div className="md:max-w-6xl mx-auto lg:max-w-[1400px] items-center px-8 pb-32 pt-20">
      <div
        className={`flex flex-col-reverse justify-center items-center gap-10 xl:gap-20 lg:flex-row`}
      >
        <div className="flex flex-col items-center  lg:items-start text-center">
          <h1 className="text-white text-4xl xl:text-6xl font-semibold mb-4 ">
            Our <span className="text-blue-500">Mangas</span>
          </h1>
          <p className="text-gray-200 lg:text-xl lg:leading-8 xl:text-2xl xl:leading-10  lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            risus at lorem dictum tempus. Nam lacinia, justo a cursus tempor,
            ante sapien convallis turpis, at dapibus augue erat ut dui. Integer
            id mauris nec lectus vestibulum vehicula. Aenean vulputate est in
            ante dignissim, vel tristique libero consequat. Cras non diam quis
            ante interdum tincidunt. Sed non felis malesuada, imperdiet magna
            sed.
          </p>
        </div>
        <img src={img} alt="" className="w-full rounded-3xl" />
      </div>
    </div>
  );
}

export default OurMangas;
