import Image from "next/image";

const images = [
  { src: "/image-4.png", alt: "Image 1", tilt: "rotate-y-6" },
  { src: "/image-1.png", alt: "Image 2", tilt: "" },
  { src: "/image-2.png", alt: "Image 3", tilt: "" },
  { src: "/image-3.png", alt: "Image 4", tilt: "-rotate-y-6" },
];

function Hero() {
  return (
    <div className="w-full">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto md:py-10 ">
          <div className="flex items-center justify-center pb-4 flex-col gap-2">
            <h1 className="text-4xl text-center font-bold pt-10 lg:text-[70px]">
              Lorem ipsum dolor sit amet <br />
              <span className="italic font-light text-blue-600">
                consectetur adipiscing.
              </span>
            </h1>

            <p className="text-[16px] max-w-[700px] text-center">
              Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
              faucibus ex sapien vitae pellentesque sem placerat in id.
            </p>

            <button className="cursor-pointer bg-blue-600 text-white py-2 px-4 rounded">
              Free Consultation
            </button>
          </div>

          {/* Image Grid Using Map */}
          <div className="grid grid-cols-4 py-4 md:gap-4 gap-1">
            {images.map((item, index) => (
              <div key={index} className="h-[130px] md:h-[370px] perspective-normal">
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
  );
}

export default Hero;
