import Image from "next/image";
import Logo from "@/public/logo-ds.png";

const ProjectHero = () => {
  return (
    <section className="bg-darkText text-lightText">
      <div className="w-full flex justify-center">
        <div className="w-24 aspect-square ">
          <Image
            src={Logo}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default ProjectHero;
