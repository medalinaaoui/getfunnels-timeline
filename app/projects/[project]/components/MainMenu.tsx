"use client";

import Image from "next/image";
import Icon from "@/public/getfunnels-icon.png";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";
const MainMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <button
        onClick={toggleMenu}
        title="show menu"
        className={`px-2 py-1 ${
          !showMenu ? "top-8 opacity-100" : "-top-40 opacity-70"
        } cursor-pointer rounded-3xl bg-primary fixed right-8 transition-all duration-700 flex items-center`}
      >
        <div className="w-8 h-8 aspect-square mr-2">
          <Image
            src={Icon}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[2px] h-7 rounded-lg my-auto bg-lightText"></div>
        <span className="text-4xl ml-2">
          <IoIosMenu />
        </span>
      </button>
      <nav
        className={`px-2 py-1 ${
          showMenu ? "top-8 opacity-100" : "-top-40 opacity-70"
        } left-0 right-0 w-fit mx-auto cursor-pointer rounded-3xl bg-primary fixed  shadow-md  transition-all duration-700 flex items-center`}
      >
        <div className="w-8 h-8 aspect-square mr-2">
          <Image
            src={Icon}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[2px] h-7 rounded-lg my-auto bg-lightText"></div>

        <ul className="flex gap-4 mx-4">
          <li>Project</li>
          <li>Project</li>
          <li>Project</li>
          <li>Project</li>
        </ul>

        <span onClick={toggleMenu} className="text-4xl ml-2">
          <IoMdClose />
        </span>
      </nav>
    </>
  );
};
export default MainMenu;
//  showMenu ? "top-20" : "-top-56"
