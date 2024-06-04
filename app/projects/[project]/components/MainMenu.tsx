"use client";
import Link from "next/link";
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
          !showMenu ? "top-2 sm:top-8 opacity-100" : "-top-40 opacity-70"
        } cursor-pointer rounded-3xl bg-primary fixed right-8 transition-all duration-700 flex items-center z-50  hover:bg-[#310061] `}
      >
        <div className="h-6 w-6 sm:w-8 sm:h-8 aspect-square mr-2">
          <Image
            src={Icon}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[2px] h-7 rounded-lg my-auto bg-lightText"></div>
        <span className="text-3xl sm:text-4xl ml-2">
          <IoIosMenu />
        </span>
      </button>
      <nav
        className={`px-2 py-1 ${
          showMenu ? "top-2 sm:top-8 opacity-100" : "-top-40 opacity-70"
        } left-0 right-0 w-fit mx-auto cursor-pointer rounded-3xl bg-primary fixed  shadow-md  transition-all duration-700 flex items-center z-50`}
      >
        <div className="h-6 w-6 sm:w-8 sm:h-8 aspect-square mr-2">
          <Image
            src={Icon}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[2px] h-7 rounded-lg my-auto bg-lightText"></div>

        <ul className="flex gap-2 sm:gap-4 mx-2 sm:mx-4 max-sm:text-xs ul-nav-bar">
          <li>
            <Link
              className="hover:opacity-70 transition-all duration-300"
              href="#details"
            >
              Détails
            </Link>
          </li>
          <li>
            <Link
              className="hover:opacity-70 transition-all duration-300"
              href="#strategy"
            >
              Stratégie
            </Link>
          </li>
          <li>
            <Link
              className="hover:opacity-70 transition-all duration-300"
              href="#meetings"
            >
              Réunions
            </Link>
          </li>
          <li>
            <Link
              className="hover:opacity-70 transition-all duration-300"
              href="#structure"
            >
              Structure
            </Link>
          </li>
        </ul>

        <span onClick={toggleMenu} className="text-2xl sm:text-4xl ml-2">
          <IoMdClose />
        </span>
      </nav>
    </>
  );
};
export default MainMenu;
//  showMenu ? "top-20" : "-top-56"
