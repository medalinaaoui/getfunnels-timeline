import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { Button } from "@/app/components/Button";
import { ActionButton } from "@/app/components/Button";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import { useState } from "react";
import { TextArea } from "@/app/components/Input";

import { IoIosArrowRoundBack } from "react-icons/io";

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

  const validTaskMutation: UseMutationResult = useMutation({
    mutationFn: async (commentData) => {
      return await axios.post(`/task/${id}`, commentData);
    },
    onSuccess: (response: any) => {
      hideModel();
      console.log("🚀 ~ ModifyTask ~ response:", response);
      toast.success("Validation envoyée avec succès.", {
        style: {
          borderRadius: "10px",
          background: "#8200FF",
          color: "#fff",
        },
      });
    },
    onError: (error: any) => {
      console.log("🚀 ~ ModifyTask ~ error:", error);
      toast.error(
        "Une erreur s'est produite lors de l'envoi de la vérification.",
        {
          style: {
            borderRadius: "10px",
            background: "#8200FF",
            color: "#fff",
          },
        }
      );
    },
  });

  const handleCommentSent = () => {
    validTaskMutation.mutate({
      comment_text: "Le client a donné son feu vert pour cette tâche",
    });
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
        <div className="modal-box model-popup min-h-[350px]">
          <h3 className="font-bold text-lg text-center text-primary">
            Lorem Ipsum est un texte
          </h3>

          {modalContent ? (
            modalContent
          ) : (
            <div className="flex flex-col gap-2 items-center mt-6">
              <Button
                className="w-10/12 justify-center"
                onClick={() => handleOpenModal(<Note />)}
              >
                Note supplémentaire
              </Button>
              <Button
                className="w-10/12 justify-center"
                onClick={() => handleOpenModal(<div>Content for Button 2</div>)}
              >
                Demander un réunion
              </Button>
              <Button
                className="w-10/12 justify-center"
                onClick={() => handleOpenModal(<div>Content for Button 3</div>)}
              >
                Insérer un lien
              </Button>
              <Button
                className="w-10/12 justify-center"
                onClick={() => handleOpenModal(<div>Content for Button 3</div>)}
              >
                Ajouter un document
              </Button>
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
                className="absolute top-2 left-2 bg-transparent"
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

const Note = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <p className="text-xs text-center text-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        consequat.
      </p>
      <TextArea
        className="w-full sm:w-full min-h-[140px]"
        placeholder="note..."
      />
    </div>
  );
};
