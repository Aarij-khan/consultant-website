import Image from "next/image";
import React from "react";

function Page() {
  const jobs = [
    {
      title: "Management Consultant",
      salary: "$450–$750",
      location: "New York",
    },
    {
      title: "Operational Consultant",
      salary: "$550–$850",
      location: "London, UK",
    },
    {
      title: "Management Consultant",
      salary: "$450–$750",
      location: "New York",
    },
    {
      title: "Management Consultant",
      salary: "$450–$750",
      location: "New York",
    },
    {
      title: "Operational Consultant",
      salary: "$550–$850",
      location: "London, UK",
    },
    {
      title: "Management Consultant",
      salary: "$450–$750",
      location: "New York",
    },
  ];

  return (
    <div>
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
          <h2 className="text-5xl sm:text-[70px] font-bold">Career</h2>
          <p className="text-[18px]">Home / career</p>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-[1480px] mx-auto">
          <div className="w-[90%] mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="w-full h-[250px] border-[1px] border-[#00000017] rounded-2xl px-8 py-8 shadow-sm bg-white"
              >
                {/* Tags */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-3 rounded-full border-[1px] border-[#00000017] text-sm">
                    Full time job/on site
                  </span>
                  <span className="px-4 py-3 rounded-full border-[1px] border-[#00000017] text-sm">
                    Urgent
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-[28px] font-semibold mb-2 line-clamp-1">
                  {job.title}
                </h2>

                {/* Salary */}
                <p className="text-gray-600 font-semibold mb-8">
                  {job.salary} <span className="text-gray-400">/ month</span>
                </p>

                {/* Bottom Row */}
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
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
                    {job.location}
                  </span>

                  <button className="font-medium hover:underline flex items-center gap-1">
                    Apply Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
