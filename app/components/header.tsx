import Image from "next/image";

function Header() {
  return (
    <div className="w-full">
      <div className="max-w-[1480px]">
        <div className="h-20 flex items-center w-[90%] mx-auto justify-between">
            <Image src={'/logo.png'} className="w-[170px] h-[46px]" width={100} height={100} />
            <div className="items-center gap-22 hidden md:flex">
                <ul className="flex gap-6 items-center">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Projects</li>
                    <li>Services</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
                <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-md">
                    Get in touch
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
