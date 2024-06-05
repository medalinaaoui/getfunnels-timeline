import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { LiaToolsSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { RiBillFill } from "react-icons/ri";
import { getUrlsArray } from "@/lib/utils";

import { MdUnfoldMore } from "react-icons/md";
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
        className="bg-darkText 2xl:mx-auto 2xl:max-w-7xl text-lightText pt-14 px-5 grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-3"
      >
        <Inspirations inspirations={inspirations} />
        <ProjectStructure tasks={tasks} />
        <AdditionalInfoComponent
          responsable={AdditionalInfo.responsable}
          tools={AdditionalInfo.tools}
          devisUrl={AdditionalInfo?.devisUrl}
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
      <div className="project-details-card h-full text-darkText p-2 flex flex-col min-h-[340px] gap-2">
        {inspirations.map((inspiration, index) => (
          <ProjectSimpleButton
            key={inspiration}
            href={inspiration}
            text={`Inspiration ${index + 1}`}
          />
        ))}
      </div>
    </article>
  );
};

const ProjectStructure = ({ tasks }: any) => {
  return (
    <article className="max-md:w-11/12 max-md:mx-auto">
      <h3 className="text-xl md:text-xl max-md:text-center mb-2">
        Structure du project
      </h3>
      <div className="project-details-card h-full text-darkText p-2 flex flex-col min-h-[340px] gap-2">
        {tasks.map((task: any) => (
          <ProjectSimpleCollapse
            key={task.id}
            title={task.name}
            subs={task.subtasks}
          />
        ))}
      </div>
    </article>
  );
};

const AdditionalInfoComponent = ({
  responsable,
  tools,
  devisUrl,
}: AdditionalInfoI) => {
  return (
    <article className="max-md:w-11/12 max-md:mx-auto">
      <h3 className="text-xl md:text-xl max-md:text-center mb-2">
        Infos Supplémentaires
      </h3>
      <div className="project-details-card h-full text-darkText p-2 flex flex-col min-h-[340px] gap-2">
        <ProjectIconCollapse
          icon={<FiUser />}
          title="Responsable du project "
          text={responsable}
        />
        <ProjectIconCollapse
          title="Platformes & Outils"
          text={tools}
          icon={<LiaToolsSolid />}
        />
        <ProjectIconButton href={devisUrl} text="Devis" icon={<RiBillFill />} />
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
      className="inspiration-btn h-fit flex w-full px-6 py-4 items-center justify-between"
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
            className={`bg-[#C9C9C9] p-2 rounded-lg ${i <= 0 ? "" : "mt-3"}`}
            key={i}
          >
            <details className="collapse">
              <summary className="collapse-title p-0 max-h-4 -mb-7">
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
      className="collapse collapse-arrow inspiration-btn h-fit"
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
}
