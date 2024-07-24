import { useEffect, useRef, useState } from "react";
import { Button } from "@/app/components/Button";
import useSendCommentkMutation from "@/lib/sendComment";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "@/lib/firebase";
import { FaCloudUploadAlt } from "react-icons/fa";

const UploadFile = ({ id, closeModel }: { id: string; closeModel: any }) => {
  const [file, setfile] = useState(undefined);
  const [uploadPer, setUploadPer] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [finalUrl, setFinalUrl] = useState("");
  // const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (file: File) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadPer(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
        console.log("error from uploadTask.on: ", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFinalUrl(downloadURL);
          console.log(downloadURL);
          setfile(undefined);
        });
      }
    );
  };

  useEffect(() => {
    if (file) handleFileUpload(file);
  }, [file]);

  const sendComment = useSendCommentkMutation(id);

  const handleSubmit = () => {
    if (finalUrl && finalUrl !== "") {
      console.log("sending comment url: ", finalUrl);
      const formatedComment = `Le client a envoyé un fichier pour cette tâche :

${finalUrl}
      `;

      sendComment.mutate({
        comment_text: formatedComment,
      });

      closeModel();
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h3 className="font-bold text-lg text-center text-primary">
        Ajouter un document
      </h3>
      <div className="flex flex-col items-center gap-4 mt-1">
        <p className="text-xs text-center text-paragraph">
          Si vous avez toutes vos modifications dans un document, ajoutez-le
          ici. On le passe en revue et vous fait un retour pour avancer.
        </p>
        <div className="relative hover:opacity-70 sm:w-44 sm:h-44 bg-[#e1dada] rounded-full  transition duration-500">
          <div className="w-24 h-24 sm:w-44 sm:h-44 aspect-square flex justify-center items-center">
            <span className="block text-2xl cursor-pointer  sm:text-6xl text-paragraph  ">
              <FaCloudUploadAlt
                className="mx-auto"
                onClick={() =>
                  fileInputRef.current && fileInputRef.current.click()
                }
              />
            </span>
          </div>
          <input
            title="file"
            className="hidden"
            type="file"
            accept="*"
            ref={fileInputRef}
            onChange={(e: any) => setfile(e.target.files[0])}
          />

          <span
            className={
              uploadPer > 0 && uploadPer < 100
                ? "absolute top-[46%] left-[37%] font-bold animate-bounce text-2xl text-darkText"
                : "hidden"
            }
          >
            {uploadPer}%
          </span>
        </div>
        <span>
          {fileUploadError ? (
            <p className="text-red-600">
              La taille du fichier doit être inférieure à 40 mégaoctets.
            </p>
          ) : uploadPer === 100 ? (
            <p className="text-primary">
              Le fichier a été téléchargé avec succès.
            </p>
          ) : (
            <p className="invisible">nothing</p>
          )}
        </span>
        <Button
          type="button"
          onClick={handleSubmit}
          className={`w-10/12 justify-center ${
            !finalUrl && finalUrl === ""
              ? "bg-disabled hover:bg-disabled active:bg-disabled cursor-default"
              : ""
          }`}
        >
          Envoyer
        </Button>
      </div>
    </div>
  );
};

export default UploadFile;
