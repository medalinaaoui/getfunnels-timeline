const LeftBar = () => {
  return (
    <aside className="w-1/6 min-h-full">
      <div className="w-1/6 h-full px-6 gap-16 bg-primary text-lightText fixed flex items-center ">
        <ProjectBar />
        <DashedBar />
      </div>
    </aside>
  );
};
export default LeftBar;

const ProjectBar = () => {
  return (
    <div className="w-[3px] h-[90%] relative bg-lightText">
      <div className="flex items-center absolute top-32  left-[-10px]">
        <div className="w-5 h-5 aspect-square bg-lightText rounded-full"></div>
        <span className="absolute left-[5px] rotate-[270deg] text-sm ">
          Project
        </span>
      </div>
    </div>
  );
};

const DashedBar = () => {
  return (
    <div className="border-l-[3px] border-dashed h-[90%] flex flex-col justify-center gap-8">
      <div className="">
        <h5 className="-translate-x-8 bg-primary">Project</h5>
        <ul className="ml-2 text-sm flex flex-col gap-3 mt-3">
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
      </div>
      <div className="">
        <h5 className="-translate-x-8 bg-primary">Project</h5>
        <ul className="ml-2 text-sm flex flex-col gap-3 mt-3">
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
      </div>
      <div className="">
        <h5 className="-translate-x-8 bg-primary">Project</h5>
        <ul className="ml-2 text-sm flex flex-col gap-3 mt-3">
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
      </div>
    </div>
  );
};
