// import Image from "next/image";

const ProjectVideoSection = () => {
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

      <div className="grid grid-cols-2 w-11/12 mx-auto mt-4">
        <div className="grid gap-2">
          <p className="text-paragraph">
            {` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
          </p>
          <p className="text-primary">
            Duis aute irure dolor in reprehenderit in voluptate
          </p>
        </div>
        <div className="">
          <p className="text-xs text-darkText text-center block mb-2">
            Video de lexplication du project sur Funnelytics
          </p>

          <div className="w-full">
            <iframe
              title="video"
              src="https://www.youtube.com/watch?v=gfU1iZnjRZM"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectVideoSection;
