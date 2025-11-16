import Image from "next/image";
import Banner from "../components/banner";

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
    </div>
  );
}

export default Page;
