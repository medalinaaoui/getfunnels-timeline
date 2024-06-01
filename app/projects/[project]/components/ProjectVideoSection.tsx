// import Image from "next/image";
import axios from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import Description from "./StrategieDescription";
const ProjectVideoSection = ({
  videoUrl,
  projectDetailsID,
}: {
  videoUrl: string;
  projectDetailsID: string;
}) => {
  const {
    data: projectDetailsData,
    isError: projectDetailsisError,
    isLoading: projectDetailsisLoading,
    error: projectDetailsError,
  } = useQuery({
    queryKey: [projectDetailsID, "all project details"],
    queryFn: () =>
      axios.get(`/task/${projectDetailsID}`).then((response) => response.data),
    enabled: projectDetailsID ? true : false,
  });

  // console.log("from project video sec: ", projectDetailsData);

  return (
    <section className="py-14 px-5">
      <div className=" flex flex-col gap-4 items-center text-center w-10/12 mx-auto my-8">
        <h2 className="text-primary text-center text-lg">Get Funnels Agency</h2>
        <h3 className="text-5xl font-semibold text-center text-darkText">
          Lorem Ipsum est un texte d&apos;espace réservé
        </h3>

        <p className="text-sm text-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim consequat.
        </p>
      </div>

      <div className="grid grid-cols-2 w-5/6 gap-6 mx-auto mt-4">
        <div className="grid gap-2 items-center">
          {!projectDetailsisLoading && (
            <Description
              id={
                projectDetailsData?.subtasks?.find(
                  (task: any) => task.name === "Stratégie"
                ).id
              }
            />
          )}
          <p className="text-primary">
            Duis aute irure dolor in reprehenderit in voluptate
          </p>
        </div>
        <div className="">
          <p className="text-xs text-darkText text-center block mb-2">
            Video de lexplication du project sur Funnelytics
          </p>

          <div className="w-full">
            <iframe
              title="video"
              src={videoUrl}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectVideoSection;
