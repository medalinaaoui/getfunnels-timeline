const LeftBar = () => {
  return (
    <aside className="w-1/6 min-h-full mr-2 ">
      <div className="w-1/6 h-full px-6 bg-blue-500 text-white fixed flex items-center ">
        <ProjectBar />
      </div>
    </aside>
  );
};
export default LeftBar;

const ProjectBar = () => {
  return (
    <div className="w-1 h-[90%] relative bg-white">
      <div className="flex items-center absolute top-32  left-[-10px]">
        <div className="w-6 h-6 aspect-square bg-white rounded-full"></div>
        <span className="absolute left-[10px] rotate-[270deg] ">Project</span>
      </div>
    </div>
  );
};
