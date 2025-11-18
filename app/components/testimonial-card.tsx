import Image from "next/image";

function TestimonialCard({ image }: { image: string }) {
  return (
    <div className="md:h-[320px]  flex flex-col md:flex-row items-center gap-3 p-2 bg-white rounded-lg">
      <Image
        src={image}
        alt="Client 1"
        width={400}
        height={400}
        className="h-[50vh] md:h-full w-full md:w-[50%] object-cover rounded-md"
      />
      <div className="flex flex-col justify-between h-[90%] gap-2 w-full md:w-[50%]">
        <div className="flex gap-1 items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          ))}
        </div>
        <p className="text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
          faucibus ex sapien vitae pellentesque sem placerat in id cursus mi
          pretium tellus duis convallis tempus leo eu aenean sed diam urna
          tempor pulvinar vivamus fringilla.{" "}
        </p>
        <div>
          <h2 className="text-[var(--primary)] text-[22px] font-semibold">
            Client Name Here
          </h2>
          <p className="text-[var(--primary)] text-[12px]">CEO of Company</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
