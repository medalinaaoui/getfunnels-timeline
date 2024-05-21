import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { LiaToolsSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { RiBillFill } from "react-icons/ri";

const ProjectDetails = () => {
  return (
    <section className="bg-darkText text-lightText pt-14 px-5 grid grid-cols-3 gap-3">
      <Inspirations />
      <ProjectStructure />
      <AdditionalInfo />
    </section>
  );
};
export default ProjectDetails;

const Inspirations = () => {
  return (
    <article className="">
      <h3 className="text-xl mb-2">Inspirations</h3>
      <div className="project-details-card h-full text-darkText p-2 flex flex-col min-h-[340px] gap-2">
        <ProjectSimpleButton href="" text="Inspiration 1" />
      </div>
    </article>
  );
};

const ProjectStructure = () => {
  return (
    <article className="">
      <h3 className="text-xl mb-2">Structure du project</h3>
      <div className="project-details-card h-full text-darkText p-2 flex flex-col min-h-[340px] gap-2">
        <ProjectSimpleCollapse title="Lorem Ipsum" text="Hello" />
        <ProjectSimpleCollapse title="Lorem Ipsum" text="Hello" />
        <ProjectSimpleCollapse title="Lorem Ipsum" text="Hello" />
      </div>
    </article>
  );
};

const AdditionalInfo = () => {
  return (
    <article className="">
      <h3 className="text-xl mb-2">Infos Supplémentaires</h3>
      <div className="project-details-card h-full text-darkText p-2 flex flex-col min-h-[340px] gap-2">
        <ProjectIconCollapse
          icon={<FiUser />}
          title="Nom du responsable du project "
          text="Mohamed Ali"
        />
        <ProjectIconCollapse
          title="Platformes & Outils"
          text="ClickFunnels - Brevo"
          icon={<LiaToolsSolid />}
        />
        <ProjectIconButton href="" text="Devis" icon={<RiBillFill />} />
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
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <div className="collapse collapse-arrow inspiration-btn h-fit">
      <input title="input" type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title text-lg">{title}</div>
      <div className="collapse-content">
        <p className="text-darkText">{text}</p>
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
    <div className="collapse collapse-arrow inspiration-btn h-fit">
      <input title="input" type="radio" name="my-accordion-2" />
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
