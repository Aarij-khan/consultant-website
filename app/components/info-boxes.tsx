
function InfoBoxes() {
  return (
    <div className="w-full bg-[#F0F6FC]">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto py-10">
          <h1 className="sm:text-4xl py-2 text-center font-bold text-[32px]">
            Lorem ipsum dolor sit amet
            <br />
            <span className="italic font-light text-blue-600">
              consectetur adipiscing elit.
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <div className="h-[238px] rounded-md bg-white p-6 shadow-md flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">Business Strategy</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit..</p>
              </div>
              <button className="bg-[var(--primary)] font-semibold  text-white py-2 px-4 rounded w-fit">
                Read more
              </button>
            </div>
            <div className="h-[238px] rounded-md bg-[var(--primary)] p-6 shadow-md flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Operational Excellence</h2>
                <p className="pt-1 text-white">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
              </div>
              <button className="bg-white  font-semibold py-2 px-4 rounded w-fit">
                Read more
              </button>
            </div>
            <div className="h-[238px] rounded-md bg-white p-6 shadow-md flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">Financial Advisory</h2>
                <p className="pt-1">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
              </div>

              <button className="bg-[var(--primary)]  font-semibold text-white py-2 px-4 rounded w-fit">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBoxes;
