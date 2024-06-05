import Image from "next/image";
const Loader = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center z-[60]">
      <div className="flex flex-col items-center gap-8 w-2/3  2xl:mx-auto 2xl:max-w-7xl">
        <p className="text-center text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          obcaecati placeat sequi facere totam veniam incidunt provident
        </p>
        <span className="loader1"></span>
      </div>
    </div>
  );
};
export default Loader;
