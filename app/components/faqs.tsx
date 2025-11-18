import { useState } from "react";

export default function Accordion() {
  // Accordion items array
  const accordionItems = [
    {
      id: 1,
      title: "What is Lorem Ipsum?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia.",
    },
    {
      id: 2,
      title: "Why do we use it?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia.",
    },
    {
      id: 3,
      title: "Where does it come from?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia.",
    },
    {
      id: 4,
      title: "Where does it come from?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id: number) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id as any);
    }
  };

  return (
    <div>
      <div className="space-y-3">
        {accordionItems.map((item) => (
          <div key={item.id} className="border border-gray-300 rounded-xl">
            <button
              className={`w-full p-4 text-left   ${
                openAccordion === item.id
                  ? "bg-[var(--primary)] text-white rounded-tl-xl rounded-tr-xl"
                  : "bg-white text-black rounded-xl rounded-xl"
              } flex justify-between items-center`}
              onClick={() => toggleAccordion(item.id)}
            >
              <span className="font-semibold text-lg">{item.title}</span>
              <span className="text-xl">
                {openAccordion === item.id ? "−" : "+"}
              </span>
            </button>

            {/* Accordion Content */}
            {openAccordion === item.id && (
              <div
                className={`px-4 py-2 ${
                  openAccordion === item.id
                    ? "rounded-bl-xl text-white rounded-br-xl bg-[var(--primary)] text-white"
                    : ""
                }`}
              >
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
