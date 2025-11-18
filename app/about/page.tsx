"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import TestimonialCard from "../components/testimonial-card";
import Accordion from "../components/faqs";

function Page() {
  const contactItems = [
    {
      title: "Quick solutions",
      line: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      image: "/material.png",
    },
    {
      title: "Expert Advice",
      line: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      image: "/material.png",
    },
    {
      title: "Strategic Planing",
      line: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      image: "/material.png",
    },
    {
      title: "Efficient Opration",
      line: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      image: "/material.png",
    },
  ];

  const images = [
    { src: "/about-banner-1.png", alt: "Image 1", tilt: "rotate-y-6" },
    { src: "/about-banner-2.png", alt: "Image 2", tilt: "" },
    { src: "/about-banner-3.png", alt: "Image 3", tilt: "" },
    { src: "/about-banner-4.png", alt: "Image 4", tilt: "-rotate-y-6" },
  ];

  return (
    <div className="w-full">
      <div className="relative w-full h-[400px]">
        <Image
          src="/about-page.png"
          alt="services"
          height={300}
          width={300}
          className="w-full h-full object-cover"
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-5xl sm:text-[70px] font-bold">About</h2>
          <p className="text-[18px]">Home / about</p>
        </div>
      </div>
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto py-10 ">
          <div className="md:py-6 flex items-center gap-6 md:gap-0 justify-between lg:flex-row flex-col">
            <div className="w-full lg:w-1/2">
              <h3 className="text-[18px]">About Our Company</h3>
              <h2 className="text-[36px] font-bold leading-[44px]">
                Lorem ipsum dolor sit ametconsectetur adipiscing elit.
              </h2>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
                faucibus ex sapien vitae pellentesque sem placerat in id cursus
                mi pretium tellus duis convallis tempus leo eu aenean sed diam
                urna tempor pulvinar vivamus fringilla lacus nec metus bibendum
                egestas iaculis massa nisl malesuada lacinia.
              </p>
              <button className="mt-2 bg-[var(--primary)] text-white p-2 rounded-md">
                Contact us
              </button>
            </div>
          </div>

          <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-3">
            {contactItems.map((item, i) => (
              <div
                key={i}
                className="flex p-5 flex-col justify-center gap-3 h-[250px] border border-[#A8A8A8] rounded-[10px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />

                <div>
                  <h2 className="text-[22px] font-semibold">{item.title}</h2>
                  <p className="text-[14px] mt-2">{item.line}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between flex-col md:flex-row gap-10">
            <div className="w-full md:w-[50%] flex flex-col gap-4">
              <p className="text-[16px] md:pt-10">
                Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
                faucibus ex sapien vitae pellentesque sem placerat in id cursus
                mi pretium tellus duis convallis tempus leo eu aenean sed diam
                urna tempor pulvinar vivamus fringilla lacus nec metus bibendum
                egestas iaculis massa nisl malesuada lacinia.
              </p>
              <p className="text-[16px] pt-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
                faucibus ex sapien vitae pellentesque sem placerat in id cursus
                mi pretium tellus duis convallis tempus leo eu aenean sed diam
                urna tempor pulvinar vivamus fringilla lacus nec metus bibendum
                egestas iaculis massa nisl malesuada lacinia.
              </p>

              <div className="flex  flex-wrap items-center justify-evenly gap-3 pt-2">
                <div className="text-center">
                  <h2 className="text-[var(--primary)] text-[48px] leading-12 font-bold">
                    85%
                  </h2>
                  <p className="text-[16px]">Complete Project</p>
                </div>
                <div className="text-center">
                  <h2 className="text-[var(--primary)] text-[48px] leading-12 font-bold">
                    2M
                  </h2>
                  <p className="text-[16px]">Reach World Wide</p>
                </div>
                <div className="text-center">
                  <h2 className="text-[var(--primary)] text-[48px] leading-12 font-bold">
                    9.5x
                  </h2>
                  <p className="text-[16px]">Faster Growth</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <Image
                src={"/about.png"}
                alt="About Us"
                width={500}
                height={500}
                className="object-cover w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[var(--primary)]">
        <div className="max-w-[1480px] mx-auto">
          <div className="w-[90%] md:h-[170px] flex justify-around flex-col md:flex-row items-center mx-auto py-10">
            <div className="text-white text-center">
              <h1 className="text-[48px] font-bold">1000</h1>
              <p>Lorem ipsum dolor sit</p>
            </div>
            <div className="text-white text-center">
              <h1 className="text-[48px] font-bold">92%</h1>
              <p>Lorem ipsum dolor sit</p>
            </div>
            <div className="text-white text-center">
              <h1 className="text-[48px] font-bold">1034+</h1>
              <p>Lorem ipsum dolor sit</p>
            </div>
            <div className="text-white text-center">
              <h1 className="text-[48px] font-bold">85</h1>
              <p>Lorem ipsum dolor sit</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-[1480px] mx-auto">
          <div className="w-[90%] mx-auto md:py-10 ">
            <div className="flex items-center justify-center pb-4 flex-col gap-2">
              <h1 className="text-[38px] text-center font-bold pt-10 lg:text-[48px]">
                Expert Team{" "}
                <span className="italic font-light text-blue-600">Members</span>
              </h1>
            </div>

            {/* Image Grid Using Map */}
            <div className="grid grid-cols-4 py-4 md:gap-4 gap-1">
              {images.map((item, index) => (
                <div
                  key={index}
                  className="h-[130px] md:h-[370px] perspective-normal"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={550}
                    height={370}
                    className={`object-cover h-full w-full shadow-lg transform ${item.tilt}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1280: {
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <div className="my-next cursor-pointer border-2 border-white rounded-full p-1 text-white hover:bg-white hover:text-black transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-[1480px] mx-auto">
          <div className="w-[90%] md:w-[70%] mx-auto py-10">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
