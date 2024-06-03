"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMdPlay } from "react-icons/io";
import { testimonials } from "@/lib/needed-data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";
import testi1 from "@/public/testi1.png";
import { ActionButton, Button } from "@/app/components/Button";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";

import useSendCommentkMutation from "@/lib/sendComment";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "@/lib/firebase";
import { FaCloudUploadAlt } from "react-icons/fa";
// import "./styles.css";

const Testimonials = () => {
  const showModel = () => {
    const modal = document.getElementById(
      `add_testimonials_modal`
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    } else {
      console.error("modal not found add_testimonials_modal");
    }
  };

  const hideModel = () => {
    const modal = document.getElementById(
      `add_testimonials_modal`
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.close();
    } else {
      console.error("Modal not found.", `add_testimonials_modal`);
    }
  };

  const [file, setfile] = useState(undefined);
  const [uploadPer, setUploadPer] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [finalUrl, setFinalUrl] = useState("");
  // const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (file: File) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadPer(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
        console.log("error from uploadTask.on: ", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFinalUrl(downloadURL);
          console.log(downloadURL);
          setfile(undefined);
        });
      }
    );
  };

  useEffect(() => {
    if (file) handleFileUpload(file);
  }, [file]);

  const sendComment = useSendCommentkMutation("8694jpa6r");

  const handleSubmit = () => {
    if (finalUrl && finalUrl !== "") {
      console.log("sending comment url: ", finalUrl);
      const formatedComment = `Un client a envoyé un témoignage :

${finalUrl}
      `;

      sendComment.mutate({
        comment_text: formatedComment,
      });

      hideModel();
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <section className="py-6 md:py-14 px-5">
      <div className=" flex flex-col gap-4 items-center text-center w-10/12 mx-auto my-8">
        <h2 className="text-primary text-center text-lg">Get Funnels Agency</h2>
        <h3 className="text-2xl md:text-4xl font-semibold text-center text-darkText">
          Lorem Ipsum est un texte d&apos;espace réservé
        </h3>
      </div>

      <div className="pt-14 px-5 w-[70vw] mx-auto overflow-x-hidden">
        <Swiper
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          navigation={true}
          mousewheel={true}
          //   keyboard={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Keyboard, Mousewheel, Navigation]}
          className="mySwiper"
        >
          {testimonials?.map((testi) => (
            <SwiperSlide key={testi.id}>
              <Testimonial
                id={testi.id}
                name={testi.name}
                image={testi.image}
                video={testi.video}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-8 flex justify-center">
        <Button onClick={showModel}>J’ajoute un témoignage</Button>
        <dialog id={`add_testimonials_modal`} className="modal">
          <div className="modal-box model-popup">
            <div>
              <h3 className="font-bold text-lg text-center text-primary">
                Lorem Ipsum est un texte meeting
              </h3>
              <div className="flex flex-col items-center gap-4 mt-1">
                <p className="text-xs text-center text-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim consequat.
                </p>
                <div className="relative hover:opacity-70 sm:w-44 sm:h-44 bg-[#e1dada] rounded-full  transition duration-500">
                  <div className="w-24 h-24 sm:w-44 sm:h-44 aspect-square flex justify-center items-center">
                    <span className="block text-2xl cursor-pointer  sm:text-6xl text-paragraph  ">
                      <FaCloudUploadAlt
                        className="mx-auto"
                        onClick={() =>
                          fileInputRef.current && fileInputRef.current.click()
                        }
                      />
                    </span>
                  </div>
                  <input
                    title="file"
                    className="hidden"
                    type="file"
                    accept="*"
                    ref={fileInputRef}
                    onChange={(e: any) => setfile(e.target.files[0])}
                  />

                  <span
                    className={
                      uploadPer > 0 && uploadPer < 100
                        ? "absolute top-[46%] left-[37%] font-bold animate-bounce text-2xl text-darkText"
                        : "hidden"
                    }
                  >
                    {uploadPer}%
                  </span>
                </div>
                <span>
                  {fileUploadError ? (
                    <p className="text-red-600">
                      La taille du fichier doit être inférieure à 40 mégaoctets.
                    </p>
                  ) : uploadPer === 100 ? (
                    <p className="text-primary">
                      Le fichier a été téléchargé avec succès.
                    </p>
                  ) : (
                    <p className="invisible">nothing</p>
                  )}
                </span>
                <Button
                  type="button"
                  onClick={handleSubmit}
                  className={`w-10/12 justify-center ${
                    !finalUrl && finalUrl === ""
                      ? "bg-disabled hover:bg-disabled active:bg-disabled cursor-default"
                      : ""
                  }`}
                >
                  Envoyer
                </Button>
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
            </div>
          </div>
        </dialog>
      </div>
    </section>
  );
};
export default Testimonials;

const Testimonial = ({
  id,
  name,
  image,
  video,
}: {
  id: string;
  name: string;
  image: string;
  video: string;
}) => {
  const showModel = () => {
    const modal = document.getElementById(id) as HTMLDialogElement | null;

    if (modal) {
      modal.showModal();
    } else {
      console.error(`Element with ID ${id} not found.`);
    }
  };

  return (
    <>
      <div className="w-full 1 relative">
        <Image
          src={image}
          alt={name}
          width={1000}
          height={1000}
          className="h-full w-full object-contain"
        />
      </div>
      <ActionButton
        onClick={showModel}
        className="absolute top-0 right-0 left-0 bottom-0 m-auto"
      >
        <span className="text-xl">
          <IoMdPlay />
        </span>
      </ActionButton>
      <dialog id={id} className="modal">
        <div className="modal-box p-8 model-popup">
          <h3 className="font-bold text-lg text-center text-primary">{name}</h3>

          <div className="grid">
            <div className="w-full mt-4">
              <iframe
                title="video"
                src={video}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
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
