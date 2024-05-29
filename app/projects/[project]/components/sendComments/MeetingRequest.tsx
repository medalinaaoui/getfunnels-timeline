import { Button } from "@/app/components/Button";

import useSendCommentkMutation from "@/lib/sendComment";

const MeetingRequest = ({
  id,
  closeModel,
}: {
  id: string;
  closeModel: any;
}) => {
  const sendComment = useSendCommentkMutation(id);
  const handleCommentSent = () => {
    const comment = "Le client a demandé une réunion pour cette tâche.";

    sendComment.mutate({
      comment_text: comment,
    });
    closeModel();
  };
  return (
    <div>
      <h3 className="font-bold text-lg text-center text-primary">
        Lorem Ipsum est un texte meeting
      </h3>
      <div className="flex flex-col gap-2 items-center mt-1">
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs text-center text-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim consequat.
          </p>
          <Button
            className="w-10/12 justify-center"
            onClick={() => handleCommentSent()}
          >
            Envoyer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MeetingRequest;
