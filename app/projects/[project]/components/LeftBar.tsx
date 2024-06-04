"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

const LeftBar = ({ name, tasks }: { name: string; tasks: any }) => {
  const [timeline, setTimeline] = useState(true);

  const hiddeTimeline = () => {
    setTimeline(!timeline);
  };

  return (
    <aside
      className={`${
        timeline ? "lg:w-56" : "w-0"
      } min-h-full z-10 transition-all duration-300 ease-in bg-primary`}
    >
      <div
        className={`w-56 h-full px-6 gap-16 bg-primary text-lightText fixed flex items-center transition-all duration-300 ease-in ${
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
    <div className="w-[3px] h-[90%] relative bg-lightText">
      <div className="flex items-center absolute top-32  left-[-10px]">
        <div className="w-5 h-5 aspect-square bg-lightText rounded-full"></div>
        <div className="relative">
          <span className="absolute right-[5px] top-[5vh] left-2 rotate-[270deg] text-sm whitespace-nowrap">
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

  return (
    <div className="dashed-bar border-l-[3px] border-dashed h-[90%] flex flex-col justify-center gap-8">
      {tasks?.map((t: any) => (
        <div key={t.id} className="">
          <h5 className="-translate-x-8 bg-primary">{t?.name}</h5>
          <ul className="ml-2 text-sm flex flex-col gap-3 mt-3">
            {t?.subtasks?.map((subt: any) => (
              <li key={subt?.id}>{subt?.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
