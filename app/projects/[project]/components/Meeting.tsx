import { ActionButton, Button } from "@/app/components/Button";
import axios from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { CiMicrophoneOn } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import { CiMicrophoneOff } from "react-icons/ci";
import { formatData } from "@/lib/utils";

const Meeting = ({ id, passed }: { id: string; passed?: boolean }) => {
  const {
    data: MeetingData,
    isError: MeetingisError,
    isLoading: MeetingisLoading,
    error: MeetingError,
  } = useQuery({
    queryKey: [id, "Meeting"],
    queryFn: () => axios.get(`/task/${id}`).then((response) => response.data),
    enabled: id ? true : false,
  });
  console.log("MeetingData: ", MeetingData);

  const showModel = () => {
    const modal = document.getElementById(
      `${id}_meeting`
    ) as HTMLDialogElement | null;

    if (modal) {
      modal.showModal();
    } else {
      console.error("modal not found.", id);
    }
  };

  return (
    <>
      <button
        onClick={showModel}
        className="inspiration-btn h-fit flex w-full px-6 py-4 items-center justify-between"
      >
        <div className="flex flex-col">
          <span className="text-lg">{MeetingData?.name}</span>

          <span className="text-left text-xs -mt-1 text-paragraph">
            {MeetingData?.due_date
              ? formatData(MeetingData?.due_date)
              : "--/--/----"}
          </span>
        </div>
        <span className="text-lg">
          {passed ? <CiMicrophoneOff /> : <CiMicrophoneOn />}
        </span>
      </button>
      <dialog id={`${id}_meeting`} className="modal">
        <div className="modal-box model-popup ">
          <h3 className="font-bold text-lg text-center text-primary">
            {passed ? "Récapitulatif de la réunion" : "Objectif de réunion"}
          </h3>

          <div className="step-info-card p-6 min-h-[250px] mt-6">
            <p className="text-darkText">
              {passed
                ? MeetingData?.description
                : MeetingData?.custom_fields?.find(
                    (field: any) =>
                      field.name === "Réunion / Objectif de réunion"
                  ).value}
            </p>
          </div>
          {passed && (
            <Button className="mt-6 mx-auto">
              <Link
                href={
                  MeetingData?.custom_fields?.find(
                    (field: any) =>
                      field.name === "Réunion / Lien d’enregistrement"
                  )?.value || ""
                }
              >{`Voir l'enregistrement`}</Link>
            </Button>
          )}

          <div className="modal-action">
            <form method="dialog">
              <ActionButton className="absolute top-2 right-2">
                <span className="text-xl">
                  <MdOutlineClose />
                </span>
              </ActionButton>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Meeting;
