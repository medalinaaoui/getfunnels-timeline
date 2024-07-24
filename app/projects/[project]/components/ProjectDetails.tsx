import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { LiaToolsSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { RiBillFill } from "react-icons/ri";
import { getUrlsArray } from "@/lib/utils";

import { MdUnfoldMore } from "react-icons/md";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { FaGoogleDrive } from "react-icons/fa";
const ProjectDetails = ({
  urlsString,
  AdditionalInfo,
  tasks,
}: {
  urlsString: string;
  AdditionalInfo: AdditionalInfoI;
  tasks: any;
}) => {
  const inspirations = urlsString ? getUrlsArray(urlsString) : [];

  return (
    <div className="bg-darkText">
      <section
        id="details"
        className="container mx-auto text-lightText sm:-mb-12 pt-14 px-5 grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-3"
      >
        <Inspirations inspirations={inspirations} />
        <ProjectStructure tasks={tasks} />
        <AdditionalInfoComponent
          responsable={AdditionalInfo.responsable}
          tools={AdditionalInfo.tools}
          devisUrl={AdditionalInfo?.devisUrl}
          onBoarding={AdditionalInfo.onBoarding}
          driveLink={AdditionalInfo.driveLink}
        />
      </section>
    </div>
  );
};
export default ProjectDetails;

const Inspirations = ({ inspirations }: { inspirations: string[] }) => {
  return (
    <article className="max-md:w-11/12 max-md:mx-auto">
      <h3 className="text-xl md:text-xl max-md:text-center mb-2 ">
        Inspirations
      </h3>
      <div className="project-details-card text-darkText p-2 block h-[410px] overflow-y-auto project-details-card-scroll-bar">
        {inspirations.map((inspiration, index) => (
          <div key={inspiration} className={index > 0 ? "mt-2" : ""}>
            <ProjectSimpleButton
              href={inspiration}
              text={`Inspiration ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </article>
  );
};

const ProjectStructure = ({ tasks }: any) => {
  return (
    <article className="max-md:w-11/12 max-md:mx-auto">
      <h3 className="text-xl md:text-xl max-md:text-center mb-2">
        Structure du projet
      </h3>
      <div className="project-details-card text-darkText p-2 block h-[410px] overflow-y-auto project-details-card-scroll-bar">
        {tasks.map((task: any, i: any) => (
          <div key={task.id} className={i > 0 ? "mt-2" : ""}>
            <ProjectSimpleCollapse title={task.name} subs={task.subtasks} />
          </div>
        ))}
      </div>
    </article>
  );
};

const AdditionalInfoComponent = ({
  responsable,
  tools,
  devisUrl,
  onBoarding,
  driveLink,
}: AdditionalInfoI) => {
  return (
    <article className="max-md:w-11/12 max-md:mx-auto">
      <h3 className="text-xl md:text-xl max-md:text-center mb-2">
        Infos Supplémentaires
      </h3>
      <div className="project-details-card text-darkText p-2 block h-[410px] overflow-y-auto project-details-card-scroll-bar">
        <div className="-mt-2">
          <ProjectIconCollapse
            icon={<FiUser />}
            title="Responsable du project "
            text={responsable}
          />
        </div>
        <ProjectIconCollapse
          title="Plateformes et outils"
          text={tools}
          icon={<LiaToolsSolid />}
        />
        <div className="mt-2">
          <ProjectIconButton
            href={devisUrl}
            text="Devis"
            icon={<RiBillFill />}
          />
        </div>
        <div className="mt-2">
          <ProjectIconButton
            href={onBoarding}
            text="Onboarding"
            icon={<IoDocumentAttachOutline />}
          />
        </div>
        <div className="mt-2">
          <ProjectIconButton
            href={driveLink}
            text="Lien Google Drive"
            icon={<FaGoogleDrive />}
          />
        </div>
      </div>
    </article>
  );
};

/////// BUTTONS ////////

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
      target="_blank"
      className="inspiration-btn h-fit flex w-full px-6 py-4 items-center justify-between"
    >
      <span className="text-lg">{text}</span>
      <span className="text-lg">
        <FiExternalLink />
      </span>
    </Link>
  );
};

const ProjectIconButton = ({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon: any;
}) => {
  return (
    <Link
      href={href}
      title="Inspiration 1"
      target="_blank"
      className="inspiration-btn h-fit flex w-full px-4 py-4 items-center justify-between"
    >
      <div className="text-lg flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <span>{text}</span>
      </div>
      <span className="text-lg">
        <FiExternalLink />
      </span>
    </Link>
  );
};

const ProjectSimpleCollapse = ({
  title,
  subs,
}: {
  title: string;
  subs: any;
}) => {
  // const sub = [
  //   {
  //     name: "a",
  //     subtasks: [{ name: "aa" }, { name: "ab" }, { name: "ac" }],
  //   },
  //   {
  //     name: "b",
  //     subtasks: [{ name: "ba" }, { name: "bb" }, { name: "bc" }],
  //   },
  // ];

  return (
    <div className="collapse collapse-arrow inspiration-btn h-fit">
      <input title="input" type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title text-lg">{title}</div>
      <div className="collapse-content">
        {subs?.map((subtask: any, i: number) => (
          <div
            className={`bg-primary text-white p-2 rounded-lg ${
              i <= 0 ? "" : "mt-3"
            }`}
            key={i}
          >
            <details className="collapse">
              <summary className="collapse-title p-0 max-h-4 min-h-full leading-none">
                <div className="flex items-center w-full justify-between">
                  <span className="">
                    {i + 1}. {subtask.name}
                  </span>
                  <span className="text-base">
                    <MdUnfoldMore />
                  </span>
                </div>
              </summary>
              <div className="collapse-content">
                <ul className="list-inside list-disc ml-2">
                  {subtask?.subtasks?.map((subb: any, i: number) => (
                    <li key={`subb ${i}`}>{subb.name}</li>
                  ))}
                </ul>
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};
const ProjectIconCollapse = ({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: any;
}) => {
  return (
    <div
      defaultChecked
      className="collapse collapse-arrow inspiration-btn h-fit mt-2"
    >
      <input defaultChecked title="input" type="radio" name="my-accordion-2" />
      <div className="collapse-title text-lg flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <span className="truncate">{title}</span>
      </div>
      <div className="collapse-content">
        <p className="text-darkText">{text}</p>
      </div>
    </div>
  );
};

interface AdditionalInfoI {
  responsable: string;
  tools: string;
  devisUrl: string;
  onBoarding: string;
  driveLink: string;
}
