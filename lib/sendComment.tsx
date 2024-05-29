import { UseMutationResult, useMutation } from "@tanstack/react-query";
import axios from "./axios";
import toast from "react-hot-toast";

const useSendCommentMutation = (id: string): UseMutationResult => {
  return useMutation({
    mutationFn: async (commentData: any) => {
      return await axios.post(`/task/${id}`, commentData);
    },
    onSuccess: (response: any) => {
      console.log("🚀 ~ ModifyTask ~ response:", response);
      toast.success("Votre message a été envoyé avec succès.", {
        style: {
          borderRadius: "10px",
          background: "#8200FF",
          color: "#fff",
        },
      });
    },
    onError: (error: any) => {
      console.log("🚀 ~ ModifyTask ~ error:", error);
      toast.error("Une erreur est survenue lors de l'envoi de votre message.", {
        style: {
          borderRadius: "10px",
          background: "#8200FF",
          color: "#fff",
        },
      });
    },
  });
};

export default useSendCommentMutation;
