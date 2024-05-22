"use client";
import React, { useRef, useState } from "react";
import { IoMdPlay } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";
import testi1 from "@/public/testi1.png";
import { ActionButton } from "@/app/components/Button";
import Link from "next/link";
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
          <SwiperSlide>
            <div className="w-full 1 relative">
              <Image
                src={testi1}
                alt=""
                width={1000}
                height={1000}
                className="h-full w-full object-contain"
              />
            </div>
            <ActionButton className="absolute top-0 right-0 left-0 bottom-0 m-auto">
              <Link href="#">
                <span className="text-xl">
                  <IoMdPlay />
                </span>
              </Link>
            </ActionButton>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full 2 relative">
              <Image
                src={testi1}
                alt=""
                width={1000}
                height={1000}
                className="h-full w-full object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full 3 relative">
              <Image
                src={testi1}
                alt=""
                width={1000}
                height={1000}
                className="h-full w-full object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full 4 relative">
              <Image
                src={testi1}
                alt=""
                width={1000}
                height={1000}
                className="h-full w-full object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full 5 relative">
              <Image
                src={testi1}
                alt=""
                width={1000}
                height={1000}
                className="h-full w-full object-contain"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonials;
