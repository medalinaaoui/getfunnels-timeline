"use client";
// import { useQuery } from "@tanstack/react-query";
import ProjectHero from "./components/ProjectHero";

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
    </>
  );
};
export default ProjectPage;
