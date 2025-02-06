import img from "../../public/contact-img.png";
import { LuMapPin } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

function ContactUs() {
  return (
    <div className="md:max-w-6xl mx-auto lg:max-w-[1400px] items-center px-8 pb-32 pt-20">
      <div
        className={`flex flex-col-reverse justify-center items-center gap-10 xl:gap-20 lg:flex-row`}
      >
        <div className="flex flex-col items-center  lg:items-start text-center">
          <h1 className="text-white text-4xl xl:text-6xl mb-4 font-extrabold">
            Reach Out to Us
            <br />
            <span className="text-blue-500 ">Right Away</span>
          </h1>
          <p className="text-gray-200 lg:text-xl lg:leading-8 xl:text-2xl xl:leading-10  lg:text-start">
            "Get in Touch with Us – We’re Here to Answer Your Questions and
            Assist You with Anything You Need."
          </p>
          <div className="flex flex-col gap-y-1 mt-8 items-center lg:items-start max-w-lg">
            {/* Email */}
            <div className="flex items-start text-white gap-4 justify-center">
              <span className="text-3xl font-light bg-blue-400 p-2 rounded-full">
                <HiOutlineMail />
              </span>
              <p className="flex flex-col text-start">
                <span className="font-bold">Email</span>
                <span>blah.com</span>
              </p>
            </div>
            {/* Phone */}
            <div className="flex items-start text-white gap-4 justify-center">
              <span className="text-3xl font-light bg-blue-400 p-2 rounded-full">
                <FiPhone />
              </span>
              <p className="flex flex-col text-start">
                <span className="font-bold">Phone</span>
                <span>+55 5555 55</span>
              </p>
            </div>
            {/* Location */}
            <div className="flex items-start text-white gap-4 justify-center">
              <span className="text-3xl font-light bg-blue-400 p-2 rounded-full">
                <HiOutlineMail />
              </span>
              <p className="flex flex-col text-start">
                <span className="font-bold">Location</span>
                <span>Istanbul,turkey</span>
              </p>
            </div>
          </div>
        </div>
        <img
          src={img}
          alt="Contact us"
          className="w-full rounded-3xl lg:w-[500px] xl:w-[600px]"
        />
      </div>
    </div>
  );
}

export default ContactUs;
