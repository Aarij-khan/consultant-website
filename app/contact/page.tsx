import Image from "next/image";

function Page() {
  return (
    <div className="w-full">
      <div className="relative w-full h-[400px]">
        <Image
          src="/contact-us.png"
          alt="services"
          height={300}
          width={300}
          className="w-full h-full object-top object-cover"
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-5xl sm:text-[70px] font-bold">Contact Us</h2>
          <p className="text-[18px]">Home / Contact Us</p>
        </div>
      </div>
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto py-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8 lg:gap-3">
            <div className="flex flex-col items-center justify-center gap-3 h-[250px] border border-[#A8A8A8] rounded-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 w-14 h-14 text-blue-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <div className="text-center">
                <h2 className="text-[22px] font-semibold">Email us</h2>
                <p className="text-[14px] mt-2">contact@example.com</p>
                <p className="text-[14px]">contact@example.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 h-[250px] border border-[#A8A8A8] rounded-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 w-14 h-14 text-blue-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>

              <div className="text-center">
                <h2 className="text-[22px] font-semibold">Call us</h2>
                <p className="text-[14px] mt-2">+911 123456789 1</p>
                <p className="text-[14px]">+911 123456789 1</p>
              </div>
            </div>
            <div className="p-2 flex flex-col items-center justify-center gap-3 h-[250px] border border-[#A8A8A8] rounded-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 w-14 h-14 text-blue-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <div className="text-center">
                <h2 className="text-[22px] font-semibold">Location</h2>
                <p className="text-[14px] mt-2">
                  7452 Grand Ct, Winter Park, Florida, 32792 United States
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 h-[250px] border border-[#A8A8A8] rounded-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 h-14 w-14 text-blue-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>

              <div className="text-center">
                <h2 className="text-[22px] font-semibold">Live chat</h2>
                <p className="text-[14px] mt-2">abc123@chat.com</p>
                <p className="text-[14px]">abc123@chat.com</p>
              </div>
            </div>
          </div>

          <div className="py-10 flex justify-between flex-col lg:flex-row md:gap-4">
            <div className="w-full lg:w-[50%] bg-white md:p-6 rounded">
              <div className="flex flex-col gap-6">
                <h1 className="text-[36px] font-bold">
                  Feel free to <span className="text-[var(--primary)]">get in touch</span> or visit our location.
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <div className="flex flex-col w-full md:w-[48%]">
                    <label>First Name</label>
                    <input
                      type="text"
                      className=" outline-none border-b-2 border-black"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-[48%]">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className=" outline-none border-b-2 border-black"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label>Email address</label>
                  <input
                    type="text"
                    className=" outline-none border-b-2 border-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Appointment type</label>
                  <input
                    type="text"
                    className=" outline-none border-b-2 border-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Message</label>
                  <textarea
                    cols={30}
                    rows={6}
                    className=" outline-none border-b-2 border-black"
                  ></textarea>
                </div>
                <button className="bg-[var(--primary)] text-white py-2 px-4 rounded w-fit">
                  <span className="text-[14px]">Send Message</span>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-[50%] flex flex-col gap-3 pt-10">
              <Image src={'/sitemap.png'} alt="sitemap" height={300} width={300} className="object-cover h-full w-full rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
