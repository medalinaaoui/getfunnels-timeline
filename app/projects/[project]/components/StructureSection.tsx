import { IoEyeOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

import { ActionButton } from "@/app/components/Button";
const StructureSection = ({ tasks }: { tasks: any }) => {
  return (
    <section className="py-14 px-5">
      <div className=" flex flex-col gap-4 items-center text-center w-10/12 mx-auto my-8">
        <h2 className="text-primary text-center text-lg">Get Funnels Agency</h2>
        <h3 className="text-5xl font-semibold text-center text-darkText">
          Lorem Ipsum est un texte d&apos;espace réservé
        </h3>

        <p className="text-sm text-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim consequat.
        </p>
      </div>

      <div className="pt-14 px-5 grid grid-cols-3 gap-3">
        {tasks?.map((t: any) => (
          <StepInfo task={t} key={t.id} />
        ))}
      </div>
    </section>
  );
};
export default StructureSection;

const StepInfo = ({ task }: { task: any }) => {
  return (
    <article className="step-info-card h-full text-darkText p-4 flex flex-col min-h-[340px] gap-2">
      <h3 className="text-center font-bold text-xl">{task?.name}</h3>
      <ul className="flex flex-col gap-2 mt-2">
        {task?.subtasks.map((subtask: any) => (
          <li
            key={subtask.id}
            className="flex items-center px-2 justify-between border-b-2 pb-2 mt-2"
          >
            <span className="font-semibold">{subtask.name}</span>
            <div className="flex gap-2">
              <PreviewBtn
                id={subtask.id}
                task={subtask.name}
                subtasks={subtask.subtasks}
              />
              <ActionButton>
                <span className="text-xl">
                  <IoMdCheckmark />
                </span>
              </ActionButton>
              <ActionButton>
                <span className="text-xl">
                  <MdOutlineEdit />
                </span>
              </ActionButton>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

const PreviewBtn = ({
  id,
  task,
  subtasks,
}: {
  id: string;
  task: string;
  subtasks: any;
}) => {
  const showModel = () => {
    const modal = document.getElementById(id) as HTMLDialogElement | null;

    if (modal) {
      modal.showModal();
    } else {
      console.error("modal not found.", id);
    }
  };

  return (
    <>
      <ActionButton onClick={showModel}>
        <span className="text-xl">
          <IoEyeOutline />
        </span>
      </ActionButton>
      <dialog id={id} className="modal">
        <div className="modal-box model-popup">
          <h3 className="font-bold text-lg text-center text-primary">{task}</h3>

          <div className="">
            <TimeLine subtasks={subtasks} />
          </div>
          <div className="modal-action">
            <form method="dialog">
              <ActionButton className="absolute top-2 right-2">
                <span className="text-xl">
                  <MdOutlineClose />
                </span>
              </ActionButton>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

const TimeLine = ({ subtasks }: { subtasks: any }) => {
  return (
    <ul className="timeline timeline-vertical mt-6">
      {subtasks.map((item: any, i: number) => (
        <li key={i}>
          {i !== 0 ? <hr className="bg-primary" /> : ""}
          <div
            className={`timeline-${
              i % 2 == 0 ? "start" : "end"
            } timeline-box bg-transparent`}
          >
            {item.name}
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {i !== subtasks.length - 1 && <hr className="bg-primary" />}
        </li>
      ))}
      {/* 
      <li>
        <div className="timeline-start timeline-box bg-transparent">
          First Macintosh computer
        </div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-primary"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <hr className="bg-primary" />
      </li>
      <li>
        <hr className="bg-primary" />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-primary"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box">iMac</div>
        <hr className="bg-primary" />
      </li>
      <li>
        <hr className="bg-primary" />
        <div className="timeline-start timeline-box">iPod</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-primary"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box">iPhone</div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start timeline-box">Apple Watch</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </li> */}
    </ul>
  );
};
