import React from "react";

function Insights() {
  const insights = [
    {
      title: "The Mistake You Can Make When Setting New Goals",
      image: "/insight-1.png",
      linkText: "Continue Reading",
    },
    {
      title: "Why Diversification of Marketing Strategies is Vital",
      image: "/insight-2.png",
      linkText: "Continue Reading",
    },
    {
      title: "How will you know success when it shows up?",
      image: "/insight-3.png",
      linkText: "Continue Reading",
    },
    {
      title: "Questions business owner must be able to answer",
      image: "/insight-4.png",
      linkText: "Continue Reading",
    },
    {
      title: "The Mistake You Can Make When Setting New Goals",
      image: "/insight-5.png",
      linkText: "Continue Reading",
    },
    {
      title: "Why Diversification of Marketing Strategies is Vital",
      image: "/insight-6.png",
      linkText: "Continue Reading",
    },
    {
      title: "How will you know success when it shows up?",
      image: "/insight-7.png",
      linkText: "Continue Reading",
    },
    {
      title: "Questions business owner must be able to answer",
      image: "/insight-8.png",
      linkText: "Continue Reading",
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto py-10">
          <h1 className="text-4xl py-2 text-center font-bold text-[38px]">
            Insight{" "}
            <span className="italic font-light text-blue-600">News</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">
            {insights.map((insight, index) => (
              <div key={index} className="bg-[#F0F6FC] rounded-lg p-3 flex justify-between shadow-lg flex-col gap-2">
                <div className="flex flex-col gap-2 mt-1">
                  <img
                    src={insight.image}
                    alt=""
                    className="h-[200px] w-full rounded-lg object-cover"
                  />
                  <h2 className="text-[22px] font-semibold">{insight.title}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-[14px]">{insight.linkText}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
