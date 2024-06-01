import Image from "next/image";
import Logo from "@/public/logo-ds.png";
import { BluredShip } from "@/app/components/Button";

const ProjectHero = ({
  name,
  description,
  bgImage,
}: {
  name: string;
  description: string;
  bgImage: string;
}) => {
  const backgroundImageStyle = bgImage
    ? { backgroundImage: `url(${bgImage})` }
    : {};

  return (
    <section
      style={backgroundImageStyle}
      className={`bg-darkText project-hero-section text-lightText py-14 px-5 min-h-screen flex flex-col`}
    >
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
        <h1 className="text-primary text-xl">{name}</h1>

        <h2 className="text-4xl">{description}</h2>
      </div>
      <div className="bg-overlay"></div>
      <BluredShip />
      <BluredShip className="top-0 right-0" />
    </section>
  );
};
export default ProjectHero;
