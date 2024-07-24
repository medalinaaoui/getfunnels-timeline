import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { Button } from "@/app/components/Button";
import { ActionButton } from "@/app/components/Button";
import toast from "react-hot-toast";
import axios from "@/lib/axios";

const ValideTask = ({
  id,
  timeline,
  disabled,
}: {
  id: string;
  timeline?: boolean;
  disabled?: boolean;
}) => {
  const showModel = () => {
    const modal = document.getElementById(
      `${id}Valide`
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    } else {
      console.error("modal not found.", `${id} Valide`);
    }
  };

  const hideModel = () => {
    const modal = document.getElementById(
      `${id}Valide`
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.close();
    } else {
      console.error("Modal not found.", `${id}Valide`);
    }
  };

  const validTaskMutation: UseMutationResult = useMutation({
    mutationFn: async (commentData) => {
      return await axios.post(`/task/${id}`, commentData);
    },
    onSuccess: (response: any) => {
      hideModel();
      console.log("🚀 ~ ValideTask ~ response:", response);
      toast.success("Validation envoyée avec succès.", {
        style: {
          borderRadius: "10px",
          background: "#8200FF",
          color: "#fff",
        },
      });
    },
    onError: (error: any) => {
      console.log("🚀 ~ ValideTask ~ error:", error);
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

  return (
    <>
      <ActionButton
        disabled={disabled}
        className={`${timeline ? "bg-white" : ""} ${
          disabled
            ? "hover:bg-white active:bg-white cursor-default pointer-events-none"
            : ""
        }`}
        onClick={showModel}
      >
        <span className={`text-xl ${timeline ? "text-primary" : ""}`}>
          <IoMdCheckmark />
        </span>
      </ActionButton>
      <dialog id={`${id}Valide`} className="modal">
        <div className="modal-box model-popup">
          <h3 className="font-bold text-lg text-center text-primary">
            Validation
          </h3>

          <p className="text-sm text-center mt-3 text-paragraph">
            Merci de nous faire savoir si vous validez cette phase du projet
          </p>
          <div className="modal-action">
            <div className="w-full flex justify-center gap-6">
              <form method="dialog">
                <ActionButton className="absolute top-2 right-2">
                  <span className="text-xl">
                    <MdOutlineClose />
                  </span>
                </ActionButton>
                <div className="w-full flex justify-center">
                  <Button className="">Non</Button>
                </div>
              </form>
              <Button onClick={handleCommentSent}>Oui</Button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ValideTask;
