import { useState } from "react";
import { TextArea } from "@/app/components/Input";
import { Button } from "@/app/components/Button";

import useSendCommentkMutation from "@/lib/sendComment";

const Note = ({ id, closeModel }: { id: string; closeModel: any }) => {
  const [note, setNote] = useState<string>("");
  const sendComment = useSendCommentkMutation(id);
  const handleCommentSent = (comment: string) => {
    console.log("sending comment", comment);
    if (comment) {
      const formatedComment = `Le client a envoyé une note supplémentaire pour cette tâche:

      ${comment}
      `;

      sendComment.mutate({
        comment_text: formatedComment,
      });
      setNote("");
      closeModel();
    }
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
        <TextArea
          value={note}
          onChange={(e: any) => setNote(e.target.value)}
          className="w-full sm:w-full min-h-[140px]"
          placeholder="note..."
        />
        <Button
          className="w-10/12 justify-center"
          onClick={() => handleCommentSent(note)}
        >
          Envoyer
        </Button>
      </div>
    </div>
  );
};

export default Note;
