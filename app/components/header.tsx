"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [open, setOpen] = useState(false); 

  return (
    <div className="w-full">
      <div className="max-w-[1480px] overflow-x-hidden">
        <div className="h-20 flex items-center w-[90%] mx-auto justify-between">
          <Image
            src={"/Logo.png"}
            alt="logo"
            className="w-[170px] h-[46px]"
            width={100}
            height={100}
          />

          {/* Desktop Menu */}
          <div className="items-center gap-22 hidden md:flex">
            <ul className="flex gap-6 items-center cursor-pointer">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/business">Projects</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <button className="bg-[var(--primary)] cursor-pointer text-white px-4 py-2 rounded-md">
              Get in touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>

          {/* Sliding Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-[70%] bg-white shadow-xl z-50 p-6 transition-transform duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button onClick={() => setOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <ul className="flex flex-col gap-5 text-lg">
              <li onClick={() => setOpen(false)}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="/about">About Us</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="/business">Projects</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="/services">Services</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="/careers">Careers</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>

            <button className="bg-[var(--primary)] cursor-pointer text-white px-4 py-2 rounded-md mt-8 w-full">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
