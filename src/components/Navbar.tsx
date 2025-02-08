import Logo from "/public/Logo.png";
import { Button } from "./ui/button";
import Sidebar from "./Sidebar";
import { links } from "@/utils";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black text-white">
      <nav className="hidden  md:flex md:py-3 md:pr-10 justify-between md:max-w-6xl mx-auto lg:max-w-[1400px] items-center">
        <img src={Logo} alt="logo" className="w-24" />
        <div className="flex gap-8 items-center">
          {links.map((link) => {
            return (
              <NavLink
                to={link.path}
                key={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-500 py-2 no-underline"
                    : "text-gray-400 py-2 no-underline"
                }
              >
                {link.text}
              </NavLink>
            );
          })}
        </div>
        <Button
          variant={"outline"}
          className="bg-black border-blue-400 text-blue-400 rounded-xl hover:bg-black hover:text-primary hover:opacity-90 no-underline"
          size={"lg"}
          asChild
        >
          <Link to={"/mangas"}>Read now</Link>
        </Button>{" "}
      </nav>
      <Sidebar />
    </div>
  );
}

export default Navbar;
