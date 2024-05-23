import Image from "next/image";
import Link from "next/link";
import { CiMicrophoneOn } from "react-icons/ci";
import MeetingImage from "@/public/GF_Meeting_Section_Image_GF.png";
import { BluredShip } from "@/app/components/Button";

const Meetings = () => {
  return (
    <section className="pb-14">
      <div className="bg-darkText text-lightText py-14 px-5 overflow-hidden relative">
        <h2>Réunion</h2>
        <BluredShip className="top-0 right-0" />
        <BluredShip className="bottom-0 left-0" />
      </div>

      <div className="pt-8 grid grid-cols-2 gap-3 px-12 w-11/12 mx-auto">
        <div className="w-3/4">
          <Image
            src={MeetingImage}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="grid gap-3">
          <article className="text-darkText mt-4">
            <h3 className="text-xl mb-2 font-semibold">Réunion planifiée</h3>
            <div className="project-details-card text-darkText p-2 flex flex-col min-h-[300px] gap-2">
              <ProjectSimpleButton href="" text="Réunion de 17/05/24" />
            </div>
          </article>
          <article className="text-darkText mt-4">
            <h3 className="text-xl mb-2 font-semibold">Réunion planifiée</h3>
            <div className="project-details-card text-darkText p-2 flex flex-col min-h-[300px] gap-2">
              <ProjectSimpleButton href="" text="Réunion de 17/05/24" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
export default Meetings;

const ProjectSimpleButton = ({
  href,
  text,
}: {
  href: string;
  text: string;
}) => {
  return (
    <Link
      href={href}
      className="inspiration-btn h-fit flex w-full px-6 py-4 items-center justify-between"
    >
      <span className="text-lg">{text}</span>
      <span className="text-lg">
        <CiMicrophoneOn />
      </span>
    </Link>
  );
};
