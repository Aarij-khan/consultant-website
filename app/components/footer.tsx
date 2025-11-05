import Image from "next/image";

function Footer() {
  return (
    <div className="w-full bg-[var(--primary)]">
      <div className="max-w-[1480px] mx-auto">
        <div className="w-[90%] mx-auto pt-10  ">
          <div className="pb-6">
            <Image
              src="/footer-logo.png"
              alt="Logo"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>

          <div className="grid gap-10 md:justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 border-t-2 border-b-2 border-white py-6">
            <div>
              <h2 className="font-semibold text-[36px] text-white">
                Lorem ipsum dolor sit amet consectetur adipiscing elit quisque.
              </h2>
            </div>

            <div>
              <ul className="flex flex-col gap-4 text-white cursor-pointer">
                <li className="font-semibold text-xl">Quick Link</li>
                <li>About us</li>
                <li>Projects</li>
                <li>Services</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 text-white">
              <h2 className="font-semibold text-xl">Address</h2>
              <p>7452 Grand Ct, Winter Park, Florida, 32792 United States</p>
              <div className="bg-white text-black p-3 w-fit rounded-md cursor-pointer">
                <p className="text-[16px]">+12 3456789 124</p>
              </div>
              <div className="bg-white text-black p-3 w-fit rounded-md cursor-pointer">
                <p className="text-[16px]">+12 3456789 124</p>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-xl text-white">Social links</h2>
              <div className="flex gap-4 mt-4">
                <Image
                  src="/fb.png"
                  alt="Facebook"
                  width={22}
                  height={30}
                  className="cursor-pointer"
                />
                <Image
                  src="/insta.png"
                  alt="Instagram"
                  width={22}
                  height={30}
                  className="cursor-pointer"
                />
                <Image
                  src="/twitter.png"
                  alt="Twitter"
                  width={22}
                  height={30}
                  className="cursor-pointer"
                />
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={22}
                  height={30}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <p className="text-white text-center py-4">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
