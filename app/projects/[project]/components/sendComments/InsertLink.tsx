import { useState } from "react";
import { TextArea, Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";

import useSendCommentkMutation from "@/lib/sendComment";

const InsertLink = ({ id, closeModel }: { id: string; closeModel: any }) => {
  const [link, setLink] = useState<string>("");
  const sendComment = useSendCommentkMutation(id);
  const handleCommentSent = (comment: string) => {
    console.log("sending comment", comment);
    if (comment) {
      const formatedComment = `Le client a inséré un lien pour cette tâche:

${comment}
      `;

      sendComment.mutate({
        comment_text: formatedComment,
      });
      setLink("");
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
        <Input
          value={link}
          onChange={(e: any) => setLink(e.target.value)}
          className="w-full sm:w-full"
          placeholder="link..."
        />
        <Button
          className="w-10/12 justify-center"
          onClick={() => handleCommentSent(link)}
        >
          Envoyer
        </Button>
      </div>
    </div>
  );
};

export default InsertLink;
