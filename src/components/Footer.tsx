import { Link } from "react-router-dom";
import logo from "../../public/Logo.png";
import { LuMapPin } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className=" bg-black text-gray-300">
      {/* links and desc */}
      <div className="md:max-w-6xl mx-auto lg:max-w-[1400px] grid grid-cols-1 gap-y-6 md:grid-cols-2  px-4 py-20 lg:grid-cols-5">
        <div className="flex justify-center items-center md:items-start flex-col text-center md:col-span-2">
          <img src={logo} alt="logo" className="w-32" />
          <p className="text-lg p-2 md:text-start md:ml-8 md:mr-8">
            Unleash your love for manga with us! Explore, discuss, and enjoy the
            finest titles. Join our community and let’s celebrate the art of
            storytelling together!
            <br />
            All Rights Reserved 2025
          </p>
        </div>
        {/* Get in tuch */}
        <div className="flex flex-col items-center gap-y-3">
          <h2 className="font-light text-blue-700">Get in Touch</h2>
          <div className="flex items-center gap-2 text-xl">
            <LuMapPin /> <span>Istanbul, Turkey</span>{" "}
          </div>
          <div className="flex items-center gap-2 text-xl my-2">
            <HiOutlineMail /> <span>Production.com</span>{" "}
          </div>
          <div className="flex items-center gap-2 text-xl">
            <LuMapPin /> <span>Istanbul, Turkey</span>{" "}
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-center gap-y-3">
          <h2 className="font-light text-blue-700">Quick Links</h2>
          <Link to="/services" className="text-xl no-underline text-gray-300">
            Services
          </Link>
          <Link to="/about" className="text-xl no-underline text-gray-300 my-2">
            Portfolios
          </Link>
          <Link to="/contact" className="text-xl no-underline text-gray-300">
            Contact us
          </Link>
        </div>
        {/* Leagle information */}
        <div className="flex flex-col items-center gap-y-3">
          <h2 className="font-light text-blue-700">Legal Information</h2>
          <Link to={"#"} className="text-xl no-underline text-gray-300">
            Terms of service
          </Link>
          <Link to={"#"} className="text-xl no-underline text-gray-300">
            Privacy policy
          </Link>
        </div>
      </div>
      {/* social media Icons */}
      <div className="mx-auto text-center flex justify-center items-center gap-x-2 md:gap-x-4 lg:gap-x-10 p-8">
        <Link to={"#"} className="bg-white p-2 rounded-full text-black">
          <FaTiktok />
        </Link>
        <Link to={"#"} className="bg-white p-2 rounded-full text-black">
          <FaFacebookF />
        </Link>
        <Link to={"#"} className="bg-white p-2 rounded-full text-black">
          <FaYoutube />
        </Link>
        <Link to={"#"} className="bg-white p-2 rounded-full text-black">
          <FaLinkedinIn />
        </Link>
        <Link to={"#"} className="bg-white p-2 rounded-full text-black">
          <FaTwitter />
        </Link>
        <Link to={"#"} className="bg-white p-2 rounded-full text-black">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
