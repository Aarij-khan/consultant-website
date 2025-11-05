import React from "react";

function ContactForm() {
  return (
    <div className="w-full bg-[#F0F6FC]">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto py-10 flex justify-between items-center flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%] flex flex-col gap-3">
            <h1 className="text-[48px] font-bold text-[var(--primary)]">
              Get in touch
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
              faucibus ex sapien vitae pellentesque sem placerat in id cursus mi
              pretium tellus duis convallis tempus.
            </p>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <p>+12 34567890 12</p>
            </div>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <p>info@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
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

              <p>7452 Grand Ct, Winter Park, Florida, 32792 United States</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
          <div className="w-full md:w-[50%] bg-white p-6 rounded">
            <div className="flex flex-col gap-6">
              <h1 className="text-[38px] font-bold text-[var(--primary)]">
                Leave Message
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
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
