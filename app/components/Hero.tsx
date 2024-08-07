import Light from "@/public/Union.svg";
import Logo from "@/public/logo-ds.png";
import Image from "next/image";
import Card from "./Card";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen  relative bg-primary max-sm:px-8 flex flex-col overflow-hidden items-center justify-start sm:justify-between pb-8 md:pb-14 z-10 welcome-hero">
      {/* <canvas className="min-h-screen w-1/2 anahowa absolute left-0 right-0 mx-auto -z-1 "></canvas> */}
      <div className="min-h-screen w-1/2 absolute left-0 right-0 mx-auto -z-20">
        <Image
          src={Light}
          alt=""
          width={400}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-24 aspect-square ">
        <Image
          src={Logo}
          alt=""
          width={1000}
          height={1000}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex flex-col items-center gap-4 max-sm:mt-14 ">
        <h1 className="flex text-center sm:w-2/3">
          À VOTRE TOUR DE SCALER VOTRE BUSINESS !
        </h1>
        <div className="flex max-sm:my-2 sm:w-1/2">
          <p className="text-center">
            {`Gardez un œil sur l'ensemble de vos projets pour avoir une vision
            claire et complète de l’état actuel et des prochaines étapes.`}
          </p>
        </div>

        <Card />
      </div>

      <div className="max-sm:flex-1 flex justify-center items-end">
        <span className="text-xs text-center sm:text-sm poppins">
          Pour toute demande, veuillez contacter -{" "}
          <Link href="mailto:contact@digitalspeak.group">
            contact@digitalspeak.group
          </Link>
        </span>
      </div>
    </div>
  );
};
export default Hero;
