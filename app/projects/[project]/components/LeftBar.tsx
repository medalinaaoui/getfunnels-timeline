"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { isDone, isNow } from "@/lib/utils";

const LeftBar = ({ name, tasks }: { name: string; tasks: any }) => {
  const [timeline, setTimeline] = useState(window.innerWidth > 1024);

  const hiddeTimeline = () => {
    setTimeline(!timeline);
  };

  return (
    <aside
      className={`${
        timeline ? "lg:w-56 2xl:w-96" : "w-0"
      } min-h-full z-10 transition-all duration-300 ease-in bg-primary`}
    >
      <div
        className={`w-56 2xl:w-96 h-full 2xl:px-12 2xl:gap-28 px-6 gap-16 bg-primary text-lightText fixed flex items-center transition-all duration-300 ease-in ${
          timeline ? "" : "-translate-x-full"
        }`}
      >
        <ProjectBar name={name} />
        <DashedBar tasks={tasks} />
        <button
          onClick={hiddeTimeline}
          title="hidde the timeline"
          className="h-20 px-1 flex items-center bg-primary absolute -right-6 top-0 bottom-0 my-auto rounded-sm cursor-pointer"
        >
          <span
            className={`text-xl ${
              timeline ? "" : "rotate-180"
            } transition-all duration-300 ease-in `}
          >
            <IoIosArrowBack />
          </span>
        </button>
      </div>
    </aside>
  );
};
export default LeftBar;

const ProjectBar = ({ name }: { name: string }) => {
  return (
    <div className="w-[3px] 2xl:w-[5px] h-[90%] relative bg-lightText">
      <div className="flex items-center absolute top-32  left-[-10px]">
        <div className="w-5 h-5 aspect-square bg-lightText rounded-full"></div>
        <div className="relative">
          <span className="absolute right-[5px] top-[5vh] left-2 rotate-[270deg] text-sm whitespace-nowrap 2xl:text-xl 2xl:right-[8px] 2xl:ml-4">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

const DashedBar = ({ tasks }: { tasks: any }) => {
  const testArr = () => {
    const index = 0;
  };

  const handleClick = (ele: string) => {
    // e.preventDefault();
    const element = document.getElementById(ele);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      element.classList.add("glow-scroll");
      setTimeout(() => {
        element.classList.remove("glow-scroll");
      }, 1000); // Duration should match the CSS animation duration
    }
  };

  return (
    <div className="dashed-bar border-l-[3px] 2xl:border-l-[5px] border-dashed h-[90%] flex flex-col justify-center gap-8 2xl:gap-16">
      {tasks?.map((t: any) => {
        const done = isDone(t?.status);
        const now = isNow(t?.status);
        return (
          <div key={t.id} className="">
            <h5
              onClick={() => handleClick(t.id)}
              className={`${
                done ? "" : now ? "animate-pulse" : "opacity-40"
              }  -translate-x-8  bg-primary hover:opacity-70 transition-all duration-300 cursor-pointer 2xl:text-xl`}
            >
              {t?.name}
            </h5>
            <ul className="ml-2 text-sm flex flex-col gap-3 mt-3 ">
              {t?.subtasks?.map((subt: any) => {
                const done = isDone(subt?.status);
                const now = isNow(subt?.status);

                return (
                  <li
                    className={`${
                      done ? "" : now ? "animate-pulse" : "opacity-40"
                    } hover:opacity-70 transition-all duration-300 cursor-pointer 2xl:text-lg`}
                    key={subt?.id}
                    onClick={() => handleClick(subt.id)}
                  >
                    {subt?.name}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
