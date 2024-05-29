import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Button } from "@/app/components/Button";
import { ActionButton } from "@/app/components/Button";
import Note from "./sendComments/Note";
import { useState } from "react";
import MeetingRequest from "./sendComments/MeetingRequest";
import InsertLink from "./sendComments/InsertLink";
import UploadFile from "./sendComments/UploadFile";

const ModifyTask = ({ id }: { id: string }) => {
  const showModel = () => {
    const modal = document.getElementById(
      `${id}Modify`
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    } else {
      console.error("modal not found.", `${id} Modify`);
    }
  };

  const hideModel = () => {
    const modal = document.getElementById(
      `${id}Modify`
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.close();
    } else {
      console.error("Modal not found.", `${id}Modify`);
    }
  };
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);
  const handleOpenModal = (content: JSX.Element | null) => {
    setModalContent(content);
  };

  return (
    <>
      <ActionButton onClick={showModel}>
        <span className="text-xl">
          <MdOutlineEdit />
        </span>
      </ActionButton>
      <dialog id={`${id}Modify`} className="modal">
        <div className="modal-box model-popup min-h-[350px] flex justify-center items-center">
          {modalContent ? (
            modalContent
          ) : (
            <div>
              <h3 className="font-bold text-lg text-center text-primary">
                Lorem Ipsum est un texte out
              </h3>
              <div className="flex flex-col gap-2 items-center mt-1">
                <Button
                  className="w-10/12 justify-center"
                  onClick={() =>
                    handleOpenModal(
                      <Note id={id} closeModel={() => hideModel()} />
                    )
                  }
                >
                  Note supplémentaire
                </Button>
                <Button
                  className="w-10/12 justify-center"
                  onClick={() =>
                    handleOpenModal(
                      <MeetingRequest id={id} closeModel={() => hideModel()} />
                    )
                  }
                >
                  Demander un réunion
                </Button>
                <Button
                  className="w-10/12 justify-center"
                  onClick={() =>
                    handleOpenModal(
                      <InsertLink id={id} closeModel={() => hideModel()} />
                    )
                  }
                >
                  Insérer un lien
                </Button>
                <Button
                  className="w-10/12 justify-center"
                  onClick={() =>
                    handleOpenModal(
                      <UploadFile id={id} closeModel={() => hideModel()} />
                    )
                  }
                >
                  Ajouter un document
                </Button>
              </div>
            </div>
          )}

          <div className="modal-action">
            <div className="w-full">
              <form method="dialog">
                <ActionButton className="absolute top-2 right-2">
                  <span className="text-xl">
                    <MdOutlineClose />
                  </span>
                </ActionButton>
              </form>
              <ActionButton
                onClick={() => handleOpenModal(null)}
                className="absolute top-2 left-2 bg-transparent border border-black"
              >
                <span className="text-2xl text-darkText">
                  <IoIosArrowRoundBack />
                </span>
              </ActionButton>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModifyTask;
