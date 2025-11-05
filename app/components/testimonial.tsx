"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
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
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
