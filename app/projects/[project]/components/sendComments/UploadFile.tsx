import { useState } from "react";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import useSendCommentkMutation from "@/lib/sendComment";
import axios from "@/lib/axios";
import toast from "react-hot-toast";

const UploadFile = ({ id, closeModel }: { id: string; closeModel: any }) => {
  const validTaskMutation: UseMutationResult = useMutation({
    mutationFn: async (formData) => {
      return await axios.post(`/attachement/${id}`, formData);
    },
    onSuccess: (response: any) => {
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

  const [file, setFile] = useState(null);

  const handleCommentSent = (event: any) => {
    setFile(event.target.files[0]);
  };
  const sendFile = () => {
    const formData = new FormData();

    if (file) {
      formData.append("attachment", file);
    } else {
      console.log("there no file");
    }
    console.log("formData: ", formData);
    // validTaskMutation.mutate(formData);
  };

  return (
    <div>
      <h3 className="font-bold text-lg text-center text-primary">
        Lorem Ipsum est un texte meeting
      </h3>
      <div className="flex flex-col items-center gap-4 mt-1">
        <p className="text-xs text-center text-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim consequat.
        </p>
        <Input title="" type="file" onChange={handleCommentSent} />
        <Button className="w-10/12 justify-center" onClick={() => sendFile()}>
          {file ? "Envoyer" : "no"}
        </Button>
      </div>
    </div>
  );
};

export default UploadFile;
