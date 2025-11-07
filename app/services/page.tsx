import Image from "next/image";
import Service from "../components/service";

function Page() {
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
          <h2 className="text-5xl sm:text-[70px] font-bold">Services</h2>
          <p className="text-[18px]">Home / Services</p>
        </div>
      </div>

      <div className="max-w-[1480px] mx-auto">
        <div>
            <Service />
        </div>
      </div>
    </div>
  );
}

export default Page;
