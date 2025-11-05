import Image from "next/image";

function Hero() {
  return (
    <div className="w-full">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto py-10 ">
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

          <div className="grid grid-cols-4 py-4 gap-4">
            {/* 1st image - tilt left */}
            <div className="h-[370px] perspective-normal">
              <Image
                src="/image-4.png"
                alt="Image 1"
                width={300}
                height={370}
                className="object-cover h-full w-full transform rotate-y-6 shadow-lg"
              />
            </div>

            {/* 2nd image - normal */}
    

            {/* 2rd image - normal */}
            <div className="h-[370px]">
              <Image
                src="/image-1.png"
                alt="Image 3"
                width={300}
                height={370}
                className="object-cover h-full w-full shadow-lg"
              />
            </div>
            {/* 3rd image - normal */}
            <div className="h-[370px]">
              <Image
                src="/image-2.png"
                alt="Image 3"
                width={300}
                height={370}
                className="object-cover h-full w-full shadow-lg"
              />
            </div>

            {/* 4th image - tilt right */}
            <div className="h-[370px] perspective-normal">
              <Image
                src="/image-3.png"
                alt="Image 4"
                width={300}
                height={370}
                className="object-cover h-full w-full transform -rotate-y-6 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
