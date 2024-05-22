import Image from "next/image";
import Logo from "@/public/logo-ds.png";

const ProjectHero = () => {
  return (
    <section className="bg-darkText text-lightText py-14 px-5 min-h-screen flex flex-col">
      <div className="w-full flex justify-center">
        <div className="w-32 ">
          <Image
            src={Logo}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 items-center justify-center gap-6 w-10/12 mx-auto">
        <h1 className="text-primary text-xl">Jody Cavalie</h1>

        <h2 className="text-4xl">
          Lorem Ipsum est un texte d&apos;espace réservé couramment utilisé dans
          les industries
        </h2>
      </div>
    </section>
  );
};
export default ProjectHero;
