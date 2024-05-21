import { IoEyeOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";

import { ActionButton } from "@/app/components/Button";
const StructureSection = () => {
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
        <StepInfo />
      </div>
    </section>
  );
};
export default StructureSection;

const StepInfo = () => {
  return (
    <article className="step-info-card h-full text-darkText p-4 flex flex-col min-h-[340px] gap-2">
      <h3 className="text-center font-bold text-xl">Tunnel de vente</h3>
      <ul className="flex flex-col gap-2 mt-2">
        <li className="flex items-center px-2 justify-between border-b-2 pb-2 mt-2">
          <span className="font-semibold">Opt-in Page</span>
          <div className="flex gap-2">
            <ActionButton>
              <span className="text-xl">
                <IoEyeOutline />
              </span>
            </ActionButton>
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
      </ul>
    </article>
  );
};
