
function Stats() {
  const stats = [
    {
      value: "10",
      label: "Reach world wide",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus.",
      highlight: false,
    },
    {
      value: "8.5x",
      label: "Faster growth",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus.",
      highlight: true,
    },
    {
      value: "75+",
      label: "Awards archived",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus.",
      highlight: false,
    },
  ];
  return (
    <div className="w-full">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto py-10 flex-col gap-4 md:flex-row flex items-center justify-between">
          {/* left side */}
          <div className="w-full md:w-[50%] flex flex-col gap-2 md:gap-6">
            <h1 className="text-[36px] leading-[50px] md:leading-[55px] text-left font-bold pt-10 md:text-[48px]">
              Lorem ipsum dolor sit amet consectetur.
              <br />
              <span className="italic font-light text-blue-600">
                faucibus ex sapien vitae pellentesque.
              </span>
            </h1>
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
              faucibus ex sapien vitae pellentesque sem placerat in id cursus mi
              pretium tellus duis convallis tempus.
            </p>
            <button className="w-fit bg-black text-white py-2 px-4 rounded-md">
              Get Started
            </button>
          </div>
          {/* right side */}
          <div className="w-full md:w-[50%] border border-black rounded-md overflow-hidden">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-[1fr_3fr] items-center border-b last:border-b-0 border-black ${
                  item.highlight
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <div className="min-w-[90px] p-6 relative border-r border-black text-center">
                  <h2
                    className={`text-[25px] sm:text-4xl font-bold ${
                      item.highlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.value}
                  </h2>
                  <p
                    className={`text-sm mt-1 ${
                      item.highlight ? "text-gray-100" : "text-blue-600"
                    }`}
                  >
                    {item.label}
                  </p>
                  <div
                    className={`w-3 h-3 mx-auto mt-4 rounded-full absolute right-[-6px] top-12 ${
                      item.highlight ? "bg-white" : "bg-blue-600"
                    }`}
                  ></div>
                </div>
                <div className="sm:p-4 p-2 text-xs sm:text-sm leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
