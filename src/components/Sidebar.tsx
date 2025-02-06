import { useState } from "react";
import { Button } from "./ui/button";
import Logo from "/public/Logo.png";
import menu from "/public/menu.svg";
import { IoClose } from "react-icons/io5";
import { links } from "@/utils";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between items-center py-4 pr-6 md:hidden bg-black text-white">
      <img src={Logo} alt="logo" />
      <div className="flex items-center gap-4">
        <Button
          variant={"outline"}
          className="bg-black border-blue-400 text-blue-400 rounded-xl hover:bg-black hover:text-primary hover:opacity-90"
          size={"lg"}
        >
          Read now
        </Button>
        <img
          src={menu}
          alt="menu"
          className="cursor-pointer"
          onClick={() => setIsOpen((oldState) => !oldState)}
        />
      </div>

      {/* links */}
      <div
        className={
          isOpen
            ? `fixed top-0 bottom-0 left-0 right-0 bg-black text-blue-400 z-10 py-3 px-4 `
            : "hidden"
        }
      >
        <div className="flex justify-between items-center mb-4">
          <img src={Logo} alt="logo" className="w-28 -ml-8" />
          <span
            className="text-blue-500 text-4xl"
            onClick={() => setIsOpen((oldstate) => !oldstate)}
          >
            <IoClose />
          </span>
        </div>
        <div className="flex flex-col gap-y-8">
          {links.map((link, index) => {
            return (
              <NavLink
                to={link.path}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-500 py-2 no-underline flex items-center gap-x-2 text-2xl"
                    : "text-white py-2 no-underline flex items-center gap-x-2 text-2xl"
                }
                onClick={() => setIsOpen((oldstate) => !oldstate)}
              >
                <IoClose />
                <span>{link.text}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
