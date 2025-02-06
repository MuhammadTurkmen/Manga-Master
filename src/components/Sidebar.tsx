import { useState } from "react";
import { Button } from "./ui/button";
import Logo from "/public/Logo.png";
import menu from "/public/menu.svg";

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
            ? `fixed top-0 bottom-0 left-0 right-0 bg-black text-blue-400`
            : "hidden"
        }
      >
        <Button
          variant={"outline"}
          onClick={() => setIsOpen((oldstate) => !oldstate)}
          size={"lg"}
        >
          Close
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
