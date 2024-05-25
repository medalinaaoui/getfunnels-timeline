"use client";
import { useQuery } from "@tanstack/react-query";
import ProjectHero from "./components/ProjectHero";
import ProjectDetails from "./components/ProjectDetails";
import ProjectVideoSection from "./components/ProjectVideoSection";
import Meetings from "./components/Meetings";
import StructureSection from "./components/StructureSection";
import ShowOffSection from "./components/ShowOffSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Loader from "@/app/components/Loader";
import axios from "@/lib/axios";

const ProjectPage = ({ params }: any) => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: [params.project, "project"],
    queryFn: () =>
      axios
        .get(`/projects/${params.project}`)
        .then((response) => response.data),
  });

  console.log("project: ", data);

  const details = data?.data?.tasks[0]?.custom_fields.reduce(
    (acc: any, field: any) => {
      acc[field.name] = field.value !== undefined ? field.value : null;
      return acc;
    },
    {} as { [key: string]: any }
  );
  console.log("🚀 ~ ProjectPage ~ details:", details);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <ProjectHero
        name={data?.data?.tasks[0]?.list?.name}
        description={data?.data?.tasks[0]?.description}
        bgImage={details["Projet / Lien de Background"]}
      />
      <ProjectDetails
        tasks={data?.structure?.subtasks}
        urlsString={details["Projet / Liens d'inspirations"]}
        AdditionalInfo={{
          responsable: details["Projet / Responsable du projet"] || "",
          tools: details["Projet / Plateforme & Outils"] || "",
          devisUrl: details["Offre / Lien de page"] || "",
        }}
      />

      <ProjectVideoSection
        videoUrl={details["Stratégie / Lien de vidéo"] || ""}
        description={
          details["Stratégie / Description"] ||
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam autem porro, facilis velit minima deserunt"
        }
      />
      <Meetings />
      <StructureSection />
      <ShowOffSection />
      <Testimonials />
      <Footer />
    </>
  );
};
export default ProjectPage;
