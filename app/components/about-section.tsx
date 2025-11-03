import Image from "next/image";

function AboutSection() {
  return (
    <div className="w-full bg-[#F0F6FC]">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto py-10">
          <div className="flex justify-between items-center flex-col md:flex-row gap-4">
            <div className="w-full md:w-[50%] flex flex-col gap-4">
                <div>

              <h1 className="text-[48px] text-[var(--primary)]">
                Lorem ipsum dolor sit amet
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
                faucibus ex sapien vitae pellentesque sem placerat in id cursus
                mi pretium tellus duis convallis tempus.
              </p>
                </div>
              <div className="flex  items-start gap-3 mt-3">
                <Image src={"/tick.png"} height={50} width={50} />
                <div>
                  <h2 className="text-[22px] font-semibold">
                    Lorem ipsum dolor{" "}
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus ex sapien vitae pellentesque sem.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Image src={"/tick.png"} height={50} width={50} />
                <div>
                  <h2 className="text-[22px] font-semibold">
                    Lorem ipsum dolor{" "}
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus ex sapien vitae pellentesque sem.
                  </p>
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

export default AboutSection;
