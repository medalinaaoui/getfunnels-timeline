import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import ValideTask from "./ValideTask";
import { ActionButton } from "@/app/components/Button";
import ModifyTask from "./ModifyTask";
import { formatData, isDone, isNow } from "@/lib/utils";
import { DisabledModifyTask } from "./ModifyTask";
import Link from "next/link";
import { Donegal_One } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios";
//a

const StructureSection = ({ tasks }: { tasks: any }) => {
  return (
    <section id="structure" className="py-14 max-sm:pt-4 px-5">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-4 items-center text-center w-10/12 mx-auto my-8 2xl:mx-auto 2xl:max-w-7xl">
          <h2 className="text-primary text-center text-lg">
            Get Funnels Agency
          </h2>
          <h3 className="text-2xl md:text-4xl font-semibold text-center text-darkText">
            UN COUP D’ŒIL SUR VOTRE PROJET
          </h3>

          <p className="text-sm text-paragraph">
            {`Une vue d'ensemble de votre projet pour avoir une vision claire de
            l’état actuel et des prochaines étapes`}
          </p>
        </div>

        <div
          className={`pt-6 sm:pt-2 px-5 grid grid-cols-1 md:grid-cols-2 ${
            tasks?.length > 2
              ? "lg:grid-cols-3"
              : "lg:grid-cols-2 w-[80%] mx-auto"
          } gap-3 2xl:mx-auto 2xl:max-w-7xl`}
        >
          {tasks?.map((t: any) => (
            <StepInfo task={t} key={t.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default StructureSection;

const StepInfo = ({ task }: { task: any }) => {
  console.log("Steps Step: ", task);

  return (
    <article
      id={task?.id}
      className="step-info-card h-full text-darkText p-4 flex flex-col min-h-[340px] gap-2"
    >
      <h3 className="text-center font-bold text-xl">{task?.name}</h3>
      <ul className="flex flex-col gap-2 mt-2">
        {task?.subtasks.map((subtask: any) => (
          <li
            id={subtask?.id}
            key={subtask.id}
            className="flex items-center px-2 justify-between border-b-2 py-2 mt-2"
          >
            <span className="font-semibold">{subtask.name}</span>
            <div className="flex gap-2">
              <PreviewBtn
                id={subtask?.id}
                task={subtask.name}
                subtasks={subtask.subtasks}
              />
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
    const modal = document.getElementById(
      `${id}_parent_subtask`
    ) as HTMLDialogElement | null;

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
      <dialog id={`${id}_parent_subtask`} className="modal">
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
  console.log("🚀 ~ TimeLine ~ subtasks:", subtasks);

  return (
    <ul className="timeline timeline-vertical mt-6">
      {subtasks?.map((item: any, i: number) => {
        // const status = ?.status;
        const done = isDone(item?.status);
        const now = isNow(item?.status);

        return (
          <li key={i}>
            {i !== 0 ? (
              <hr
                className={`${
                  done
                    ? "bg-green-600"
                    : now
                    ? "bg-primary"
                    : "bg-primary opacity-30"
                }  `}
              />
            ) : (
              ""
            )}
            <div
              className={`timeline-${i % 2 == 0 ? "start" : "end"} ${
                done
                  ? "bg-green-600 border-green-600"
                  : now
                  ? "bg-primary border-primary"
                  : "bg-primary opacity-30 border-primary"
              } timeline-box text-white flex flex-col justify-center gap-1 min-w-[170px]`}
            >
              <span className="text-center">{item.name}</span>
              <span className="text-center text-xs -mt-1 text-gray-300">
                {item?.due_date ? formatData(item?.due_date) : "--/--/----"}
              </span>

              <div className="flex gap-2 justify-center">
                <PreviewLink
                  done={done}
                  // url={
                  //   item?.custom_fields?.find(
                  //     (f: any) => f?.name === "Sous tâche / Preview Link"
                  //   ) || ""
                  // }
                  id={item?.id}
                  disabled={!now}
                />
                {!done && (
                  <ValideTask disabled={!now} timeline={true} id={item.id} />
                )}
                {!done && (
                  <ModifyTask disabled={!now} timeline={true} id={item.id} />
                )}
              </div>
            </div>
            <div className={`timeline-middle`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-5 h-5  ${
                  done
                    ? "text-green-600 "
                    : now
                    ? "text-primary"
                    : "text-primary opacity-30"
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {i !== subtasks.length - 1 && (
              <hr
                className={`${
                  done
                    ? "bg-green-600"
                    : now
                    ? "bg-primary"
                    : "bg-primary opacity-30"
                }  `}
              />
            )}
          </li>
        );
      })}
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

const PreviewLink = ({
  id,
  done,
  disabled,
}: {
  id: string;
  done: boolean;
  disabled?: boolean;
}) => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: [id, "sub sub task"],
    queryFn: () => axios.get(`/task/${id}`).then((response) => response.data),
    enabled: id ? true : false,
  });

  // console.log("data for sub sub task: ", data);

  return (
    <ActionButton
      className={`bg-white ${
        disabled
          ? "hover:bg-white active:bg-white cursor-default pointer-events-none"
          : ""
      }`}
    >
      {disabled ? (
        <span className={`text-xl ${done ? "text-green-600" : "text-primary"}`}>
          <IoEyeOutline />
        </span>
      ) : (
        <Link
          target="_blank"
          href={
            data?.custom_fields?.find(
              (f: any) => f.name === "Sous tâche / Preview Link"
            ).value || "#"
          }
        >
          <span
            className={`text-xl ${done ? "text-green-600" : "text-primary"}`}
          >
            <IoEyeOutline />
          </span>
        </Link>
      )}
    </ActionButton>
  );
};
