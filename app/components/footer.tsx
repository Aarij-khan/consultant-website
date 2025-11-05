import Image from "next/image";

function Footer() {
  return (
    <div className="w-full bg-[var(--primary)]">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto py-10  ">
          <div className="pb-6">
            <Image
              src="/footer-logo.png"
              alt="Logo"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 border-t-2 border-white py-6">
            <div>
              <h2 className="font-semibold text-[36px] text-white">
                Lorem ipsum dolor sit amet consectetur adipiscing elit quisque.
              </h2>
            </div>

            <div>
              <ul className="flex flex-col gap-4 text-white">
                <li className="font-semibold text-xl">Quick Link</li>
                <li>About us</li>
                <li>Projects</li>
                <li>Services</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-xl">Address</h2>
              <p>7452 Grand Ct, Winter Park, Florida, 32792 United States</p>
              <div className="bg-white text-black p-3 w-fit">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
