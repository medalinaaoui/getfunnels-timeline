"use client";
import React, { useRef, useState } from "react";
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
// import "./styles.css";

const Testimonials = () => {
  return (
    <section className="py-14 px-5">
      <div className=" flex flex-col gap-4 items-center text-center w-10/12 mx-auto my-8">
        <h2 className="text-primary text-center text-lg">Get Funnels Agency</h2>
        <h3 className="text-5xl font-semibold text-center text-darkText">
          Lorem Ipsum est un texte d&apos;espace réservé
        </h3>
      </div>

      <div className="pt-14 px-5 w-[70vw] mx-auto overflow-x-hidden">
        <Swiper
          onSlideChange={(s) => console.log("slide change: ", s)}
          slidesPerView={4}
          onSwiper={(e) => console.log(e)}
          spaceBetween={30}
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
        <Button>J’ajoute un témoignage</Button>
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
