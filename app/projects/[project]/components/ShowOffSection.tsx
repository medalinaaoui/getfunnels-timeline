import Image from "next/image";
import Link from "next/link";
// import Project1 from "@/public/project-page-1.png";
// import Project2 from "@/public/project-page-2.png";
// import Project3 from "@/public/project-page-3.png";
import eyeGif from "@/public/DS_GF_Pr_2_Eye_DS.gif";
import { ActionButton } from "@/app/components/Button";

const showoffs = [
  {
    image:
      "https://getfunnels.agency/hosted/images/24/6301ce2a0042208d54cb11908c0288/DS_GF_Olympia.png",
    link: "https://www.getfunnels.design/olympia",
  },
  {
    image:
      "https://d1yei2z3i6k35z.cloudfront.net/505757/6464dc2dcf459_DS_GF_Jody-cavalie_DS.png",
    link: "https://getfunnels.clickfunnels.com/page-d-inscription",
  },
  {
    image:
      "https://d1yei2z3i6k35z.cloudfront.net/505757/60d78e223e3dc_DS_GF_O_3_BK9_2_DS.png",
    link: "https://getfunnels.clickfunnels.com/page-de-vente1640804173470",
  },
];

const ShowOffSection = () => {
  return (
    <section className="py-14 px-5 bg-darkText">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-4 items-center text-center w-10/12 mx-auto my-8">
          <h2 className="text-primary text-center text-lg">
            Get Funnels Agency
          </h2>
          <h3 className="text-2xl md:text-4xl font-semibold text-center text-lightText">
            {`IMAGINEZ VOTRE PROJET SOUS SON MEILLEUR JOUR`}
          </h3>
        </div>

        <div className="pt-2 md:pt-14 px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:mx-auto 2xl:max-w-6xl gap-3">
          {showoffs.map((portfo) => (
            <div key={portfo.link} className="w-full relative">
              <div className="h-[37rem]">
                {/* <Image
                  src={portfo.image}
                  alt=""
                  width={1000}
                  height={1000}
                  className="h-full w-full rounded-3xl object-cover"
                /> */}
                <div
                  style={{
                    background: `url(${portfo.image})`,
                  }}
                  className="portfolio-image h-full rounded-3xl"
                ></div>
              </div>

              <ActionButton className="absolute top-4 right-4 bg-white border hover:bg-white">
                <Link className="" target="_blank" href={portfo.link}>
                  <div className="w-8 h-8 aspect-square">
                    <Image
                      alt="eye gif"
                      src={eyeGif}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover rounded-full "
                    />
                  </div>
                </Link>
              </ActionButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ShowOffSection;
