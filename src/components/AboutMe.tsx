import image from "../../public/About-image.png";

function AboutMe() {
  return (
    <div>
      <div>
        <div className="text-white flex flex-col md:flex-row-reverse md:max-w-6xl mx-auto lg:max-w-[1400px] items-center px-8 py-20 gap-5 text-center md:text-start">
          <img
            src={image}
            alt="profile picture"
            className="w-80 rounded-full lg:w-96 xl:w-[550px] object-cover xl:rounded-full relative border-2 border-indigo-600  p-2 lg:p-4"
          />
          <div>
            <h1 className="text-blue-600 font-extrabold text-4xl mb-4 md:text-5xl lg:text-6xl md:text-start">
              About Me
            </h1>
            <p className="md:text-xl lg:leading-7 xl:leading-10 md:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
              risus at lorem dictum tempus. Nam lacinia, justo a cursus tempor,
              ante sapien convallis turpis, at dapibus augue erat ut dui.
              Integer id mauris nec lectus vestibulum vehicula. Aenean vulputate
              est in ante dignissim, vel tristique libero consequat. Cras non
              diam quis ante interdum tincidunt. Sed non felis malesuada,
              imperdiet magna sed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
