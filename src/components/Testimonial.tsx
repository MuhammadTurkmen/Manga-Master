import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  return (
    <div className="md:max-w-6xl mx-auto lg:max-w-[1400px] items-center px-8 py-20 text-white text-center">
      <h1 className="font-extrabold mb-4 md:text-5xl">Testimonial</h1>
      <p className="md:text-xl">
        Hear from our satisfied clients who share their experiences working with
        Ayendah. Their <br /> success is our success, and their words speak
        volumes.
      </p>
      <TestimonialCard />
    </div>
  );
}

export default Testimonial;
