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
    <section id="strategy" className="py-14 px-5 bg-white">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-4 items-center text-center w-10/12 mx-auto my-8">
          <h2 className="text-primary text-center text-lg">
            Get Funnels Agency
          </h2>
          <h3 className="text-2xl md:text-4xl font-semibold text-center text-darkText">
            Stratégie et objectifs
          </h3>

          <p className="text-sm text-paragraph">
            {`Nous nous engageons à comprendre vos besoins, à vous offrir des
            stratégies d'experts, et à collaborer étroitement avec vous pour
            atteindre vos objectifs.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-5/6 gap-6 mx-auto mt-4 ">
          <div className="flex flex-col items-start justify-center gap-2">
            {!projectDetailsisLoading && (
              <Description
                id={
                  projectDetailsData?.subtasks?.find(
                    (task: any) => task.name === "Stratégie"
                  ).id
                }
              />
            )}
            <p className="text-primary max-sm:text-center">
              {`Une feuille de route qui guide nos efforts vers l'excellence !`}
            </p>
          </div>
          <div className="">
            {/* <p className="text-xs text-darkText text-center block mb-2">
              Video de lexplication du project sur Funnelytics
            </p> */}

            <div className="w-full h-72 ">
              <iframe
                title="video"
                src={videoUrl}
                width={1000}
                height={1000}
                className="w-full h-full rounded-md object-cover border border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectVideoSection;
