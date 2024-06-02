const LeftBar = () => {
  return (
    <aside className="w-1/6 min-h-full">
      <div className="w-1/6 h-full px-6 gap-16 bg-primary text-lightText fixed flex justify-start overflow-scroll ">
        <Structure />
      </div>
    </aside>
  );
};
export default LeftBar;

const Structure = () => {
  return (
    <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <span className="absolute left-[5px] rotate-[270deg] text-sm">
            1984
          </span>
          <p className="text-lg font-black mt-3">First Macintosh computer</p>
          The Apple Macintosh—later rebranded as the Macintosh 128K—is the
          original Apple Macintosh personal computer. It played
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">1998</time>
          <p className="text-lg font-black">iMac</p>
          iMac is a family of all-in-one Mac desktop comput
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end md:text-end mb-10">
          <time className="font-mono italic">2001</time>
          <p className="text-lg font-black">iPod</p>
          The iPod is a discontinued series of portable media
        </div>
        <hr />
      </li>
    </ul>
  );
};

//////////////////// TIMELINE 1 /////////////////////////////

const FirstTimeline = () => {
  return (
    <div className="w-1/6 h-full px-6 gap-16 bg-primary text-lightText fixed flex items-center ">
      <ProjectBar />
      <DashedBar />
    </div>
  );
};

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
    <div className="dashed-bar border-l-[3px] border-dashed h-[90%] flex flex-col justify-center gap-8">
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
