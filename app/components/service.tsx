import React from "react";

function Service() {
  const services = [
    {
      title: "Business Analysis",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.",
    },
    {
      title: "Reports Analysis",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.",
    },
    {
      title: "Profit Planning",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.",
    },
    {
      title: "Project Reporting",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.",
    },
    {
      title: "Estate Planning",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.",
    },
    {
      title: "Security Enhanced",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.",
    },
    {
      title: "Cloud Computing",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.",
    },
    {
      title: "Cryptocurrency",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.",
    },
    {
      title: "Business Analysis",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.",
    },
  ];
  return (
    <div className="w-full">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto py-10">
          <p className="text-blue-600 text-center font-medium">Services</p>
          <h2 className="text-3xl md:text-[48px] text-center font-bold mb-10">
            Our Best <span className="text-blue-600 italic">Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-xl shadow-sm border border-gray-200 hover:border-blue-600 bg-[#F0F6FC] transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3v18h18M7 14l3-3 3 3 3-3 3 3"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 text-center">{item.title}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
