import { useState } from "react";
import { TextArea } from "@/app/components/Input";
import { Button } from "@/app/components/Button";

import useSendCommentkMutation from "@/lib/sendComment";

const SendTesti = ({ id, closeModel }: { id: string; closeModel: any }) => {
  const [note, setNote] = useState<string>("");
  const sendComment = useSendCommentkMutation(id);
  const handleCommentSent = (comment: string) => {
    console.log("sending comment", comment);
    if (comment) {
      const formatedComment = `Un client a rédigé un témoignage:

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
        Écrire un témoignage
      </h3>
      <div className="flex flex-col items-center gap-4 mt-1">
        <p className="text-xs text-center text-paragraph">
          Cliquez ci-dessous écrire votre témoignage. Partagez vos impressions
          et votre expérience directement avec nous.
        </p>
        <TextArea
          value={note}
          onChange={(e: any) => setNote(e.target.value)}
          className="w-full sm:w-full min-h-[140px]"
          placeholder="Écrire un témoignage..."
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

export default SendTesti;
