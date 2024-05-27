import Image from "next/image";

import MeetingImage from "@/public/GF_Meeting_Section_Image_GF.png";
import { BluredShip } from "@/app/components/Button";
import axios from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import Meeting from "./Meeting";

const Meetings = ({ projectDetailsID }: { projectDetailsID: string }) => {
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

  // console.log("from Meetings: ", projectDetailsData);

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
              {projectDetailsData?.subtasks
                ?.find((task: any) => task.name === "Réunions")
                ?.subtasks?.map((sub: any) => {
                  if (sub.status.status === "to do") {
                    return <Meeting key={sub.id} id={sub.id} />;
                  }
                })}
            </div>
          </article>
          <article className="text-darkText mt-4">
            <h3 className="text-xl mb-2 font-semibold">Réunion passer</h3>
            <div className="project-details-card text-darkText p-2 flex flex-col min-h-[300px] gap-2">
              {/* <Meeting href="" text="Réunion de 17/05/24" /> */}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
export default Meetings;

// const Meeting = ({ meetingId }: { meetingId: string }) => {
//   return (
//     <Link
//       href={meetingId}
//       className="inspiration-btn h-fit flex w-full px-6 py-4 items-center justify-between"
//     >
//       <span className="text-lg">{meetingId}</span>
//       <span className="text-lg">
//         <CiMicrophoneOn />
//       </span>
//     </Link>
//   );
// };
