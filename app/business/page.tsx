import Image from "next/image";

function Page() {
  const services = [
    "Business Analysis",
    "Reports Analysis",
    "Profit Planing",
    "Project Reporting",
    "Estate Planing",
    "Security Enhanced",
    "Cloud Computing",
    "Cryptocurrency",
    "Business Analysis",
  ];

  return (
    <div className="w-full">
      <div className="relative w-full h-[400px]">
        <Image
          src="/services.png"
          alt="services"
          height={300}
          width={300}
          className="w-full h-full object-cover"
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-5xl sm:text-[70px] font-bold">
            Business Analysis
          </h2>
          <p className="text-[18px]">Home / Business Analysis</p>
        </div>
      </div>

      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto py-10">
          <h1 className="text-[48px] text-center font-bold">
            Business{" "}
            <span className="italic font-light text-blue-600">Analysis</span>
          </h1>

          <div className="py-2 flex flex-row gap-6 justify-between">
            <div className="w-full md:w-[65%] flex flex-col gap-3">
              <Image
                src="/services.png"
                alt="business-analysis"
                height={300}
                width={300}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <h1 className="text-[36px] font-semibold">
                Lorem ipsum dolor sit ametconsectetur adipiscing elit.
              </h1>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
                faucibus ex sapien vitae pellentesque sem placerat in id cursus
                mi pretium tellus duis convallis tempus leo eu aenean sed diam
                urna tempor pulvinar vivamus fringilla lacus nec metus bibendum
                egestas iaculis massa nisl malesuada lacinia.
              </p>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
                faucibus ex sapien vitae pellentesque sem placerat in id cursus
                mi pretium tellus duis convallis tempus leo eu aenean sed diam
                urna tempor pulvinar vivamus fringilla lacus nec metus bibendum
                egestas iaculis massa nisl malesuada lacinia.
              </p>
              <h2 className="text-[28px] font-semibold">Lorem ipsum dolor.</h2>
              <p className="text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
                faucibus ex sapien vitae pellentesque sem placerat in id cursus.
              </p>
              <div className="flex items-center">
                <div className="border-[1px] border-black p-2 flex gap-2 justify-center items-start">
                  <Image src={"/tick.png"} alt="tick" height={35} width={35} />
                  <span className="text-[12px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </span>
                </div>
                <div className="border-[1px] border-black p-2 flex gap-2 justify-center items-start">
                  <Image src={"/tick.png"} alt="tick" height={35} width={35} />
                  <span className="text-[12px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="border-[1px] border-black p-2 flex gap-2 justify-center items-start">
                  <Image src={"/tick.png"} alt="tick" height={35} width={35} />
                  <span className="text-[12px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </span>
                </div>
                <div className="border-[1px] border-black p-2 flex gap-2 justify-center items-start">
                  <Image src={"/tick.png"} alt="tick" height={35} width={35} />
                  <span className="text-[12px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus.
                  </span>
                </div>
              </div>

              <div className="mt-2 flex gap-2 flex-col md:flex-row items-center justify-between">
                <Image
                  src={"/business-3.png"}
                  alt="tick"
                  height={350}
                  width={350}
                  className="h-[350px] w-full md:w-[48%] rounded-lg"
                />
                <Image
                  src={"/business-1.png"}
                  alt="tick"
                  height={350}
                  width={350}
                  className="h-[350px] w-full md:w-[48%] rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <p className="text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
                  faucibus ex sapien vitae pellentesque sem placerat in id
                  cursus.
                </p>
                <p className="text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
                  faucibus ex sapien vitae pellentesque sem placerat in id
                  cursus mi pretium tellus duis convallis tempus leo eu aenean
                  sed diam urna tempor pulvinar vivamus fringilla lacus nec
                  metus bibendum egestas iaculis massa nisl malesuada lacinia.
                </p>
              </div>
              {/* faq section here */}
            </div>
            <div className="w-full md:w-[30%] flex flex-col gap-6">
              <div className="border-[1px] p-3 rounded border-[#EDEDED]">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="cursor-pointer w-full flex items-center justify-between border-b border-[#EDEDED] mt-2 rounded-lg bg-[#F4F4F4] p-4"
                  >
                    <h3 className="text-[18px] text-blue-600">{item}</h3>
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
                ))}
              </div>
              <div className="border-[1px] p-3 rounded border-[#EDEDED]">
                <div className="relative">
                  <Image
                    src={"/business-2.png"}
                    alt="tick"
                    height={350}
                    width={350}
                    className="h-[350px] rounded-lg"
                  />
                  <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                    <div className="pt-8">
                      <h1 className="text-[36px] font-semibold">
                        Lorem ipsum dolor sit amet.
                      </h1>
                      <p className="text-[14px]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        quisque faucibus ex sapien vitae pellentesque sem
                        placerat in id cursus.
                      </p>
                    </div>
                    <button className="cursor-pointer w-fit rounded-md bg-white p-2 text-[16px] text-black">
                      Get in touch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
