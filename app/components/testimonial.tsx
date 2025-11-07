"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import TestimonialCard from "./testimonial-card";

function Testimonial() {
  return (
    <div className="w-full bg-[var(--primary)]">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto py-10">
          <h1 className="text-white text-center text-[36px] font-semibold md:text-[48px]">
            Don’t Listen To Us, Listen To Our{" "}
            <span className="italic font-light">
              <br />
              Great Clients
            </span>
          </h1>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".my-next",
              prevEl: ".my-prev",
            }}
            className="md:w-[80%] h-full my-2"
            breakpoints={{
              320: {
                // mobile
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                // small tablets
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                // laptops
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
                // large screens
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide className="text-[18px] flex justify-center items-center">
              <TestimonialCard image="/client-1.png" />
            </SwiperSlide>
            <SwiperSlide className="text-[18px] flex justify-center items-center">
              <TestimonialCard image="/client-2.png" />
            </SwiperSlide>
            <SwiperSlide className="text-[18px] flex justify-center items-center">
              <TestimonialCard image="/client-1.png" />
            </SwiperSlide>
            <SwiperSlide className="text-[18px] flex justify-center items-center">
              <TestimonialCard image="/client-2.png" />
            </SwiperSlide>
            <SwiperSlide className="text-[18px] flex justify-center items-center">
              <TestimonialCard image="/client-1.png" />
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-center gap-6 mt-6">
            <div className="my-prev cursor-pointer border-2 border-white rounded-full p-1 text-white hover:bg-white hover:text-black transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div className="my-next cursor-pointer border-2 border-white rounded-full p-1 text-white hover:bg-white hover:text-black transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
