"use client";
// import { useQuery } from "@tanstack/react-query";
import ProjectHero from "./components/ProjectHero";
import ProjectDetails from "./components/ProjectDetails";
import ProjectVideoSection from "./components/ProjectVideoSection";
import Meetings from "./components/Meetings";
import StructureSection from "./components/StructureSection";
// import Loader from "@/app/components/Loader";
// import axios from "@/lib/axios";

const ProjectPage = ({ params }: any) => {
  // const { data, isError, isLoading, error } = useQuery({
  //   queryKey: [params.client, "client"],
  //   queryFn: () =>
  //     axios
  //       .get(`/folder/${params.client}/list`)
  //       .then((response) => response.data),
  // });

  // console.log(data);

  return (
    <>
      <ProjectHero />
      <ProjectDetails />
      <ProjectVideoSection />
      <Meetings />
      <StructureSection />
    </>
  );
};
export default ProjectPage;
