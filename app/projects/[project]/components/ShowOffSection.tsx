import Image from "next/image";
import Link from "next/link";
import Project1 from "@/public/project-page-1.png";
import { ActionButton } from "@/app/components/Button";
import { IoEyeOutline } from "react-icons/io5";

const ShowOffSection = () => {
  return (
    <section className="py-14 px-5 bg-darkText">
      <div className=" flex flex-col gap-4 items-center text-center w-10/12 mx-auto my-8">
        <h2 className="text-primary text-center text-lg">Get Funnels Agency</h2>
        <h3 className="text-2xl md:text-4xl font-semibold text-center text-lightText">
          Lorem Ipsum est un texte d&apos;espace réservé
        </h3>
      </div>

      <div className="pt-2 md:pt-14 px-12 grid grid-cols-2 md:grid-cols-3  gap-3">
        <div className="w-full relative">
          <Image
            src={Project1}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-contain"
          />
          <ActionButton className="absolute top-4 right-4">
            <Link href="#">
              <span className="text-xl">
                <IoEyeOutline />
              </span>
            </Link>
          </ActionButton>
        </div>
        <div className="w-full relative">
          <Image
            src={Project1}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-contain"
          />
          <ActionButton className="absolute top-4 right-4">
            <Link href="#">
              <span className="text-xl">
                <IoEyeOutline />
              </span>
            </Link>
          </ActionButton>
        </div>
        <div className="w-full relative">
          <Image
            src={Project1}
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-contain"
          />
          <ActionButton className="absolute top-4 right-4">
            <Link href="#">
              <span className="text-xl">
                <IoEyeOutline />
              </span>
            </Link>
          </ActionButton>
        </div>
      </div>
    </section>
  );
};
export default ShowOffSection;
