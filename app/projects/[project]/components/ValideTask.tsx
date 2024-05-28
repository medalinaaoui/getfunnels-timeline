import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { Button } from "@/app/components/Button";
import { ActionButton } from "@/app/components/Button";
import toast from "react-hot-toast";
import axios from "@/lib/axios";

const ValideTask = ({ id }: { id: string }) => {
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

  const validTaskMutation: UseMutationResult = useMutation({
    mutationFn: async (commentData) => {
      return await axios.post(`/task/${id}`, commentData);
    },
    onSuccess: (response: any) => {
      console.log("🚀 ~ ValideTask ~ response:", response);
      toast.success("message sent", {
        style: {
          borderRadius: "10px",
          background: "#474747",
          color: "#fff",
        },
      });
    },
    onError: (error: any) => {
      console.log("🚀 ~ ValideTask ~ error:", error);
      toast.error("couldn't send a message", {
        style: {
          borderRadius: "10px",
          background: "#474747",
          color: "#fff",
        },
      });
    },
  });

  const handleCommentSent = () => {
    validTaskMutation.mutate({
      comment_text: "comment sent",
    });
  };

  return (
    <>
      <ActionButton onClick={showModel}>
        <span className="text-xl">
          <IoMdCheckmark />
        </span>
      </ActionButton>
      <dialog id={`${id}Valide`} className="modal">
        <div className="modal-box model-popup">
          <h3 className="font-bold text-lg text-center text-primary">
            You sure?
          </h3>

          <div className="text-sm text-center mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure nisi
            assumenda
          </div>
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
              <Button onClick={handleCommentSent}>Yes</Button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ValideTask;
