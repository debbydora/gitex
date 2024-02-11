"use client";
import Image from "next/image";
import Link from "next/link";
import wemaLogo from "../../../public/icons/wema-icon.svg";
import gitexLogo from "../../../public/icons/GITEX-GLOBAL.svg";
import cancel from "../../../public/icons/cancelX.svg";
import { useState } from "react";
import Harmburger from "../Harmburger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const hide = () => setIsOpen(false);

  return (
    <header className="bg-transparent md:px-24 py-8 px-6  flex justify-between box-border items-center w-full font-satoshi">
      <div
        aria-label="logo-container"
        className="flex justify-between items-center gap-3"
      >
        <Link href="/">
          <Image src={wemaLogo} alt="wema-logo" priority />
        </Link>

        <Image src={gitexLogo} alt="gitex-logo" priority />
      </div>
      <nav
        aria-label="links-container"
        className="hidden lg:flex justify-between items-center gap-5 font-medium text-white text-lg leading-[40px]"
      >
        <Link href="/about">About Wema</Link>
        <Link href="/roadshow">GITEX Road Show</Link>
        <Link href="/prizes">Prizes</Link>
      </nav>

      <div className="absolute right-4 top-10 md:top-10 cursor-pointer lg:hidden md:block">
        <Harmburger onClick={toggle} isOpen={isOpen} />
      </div>
      <div
        onClick={hide}
        className={`${
          isOpen ? "translate-x-0" : "translate-x-[-100vw]"
        } fixed z-10 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center cursor-pointer overflow-y-auto lg:hidden`}
      >
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-[-100vw]"
          } flex flex-col gap-y-4 absolute z-50 top-0 left-0 right-0 w-full  transition duration-[600ms]  lg:hidden `}
        >
          <div className="relative bg-burgerBg object-contain h-screen w-full p-10">
            <div className="absolute inset-0 z-0 bg-harmburger-gradient"></div>
            <div className="relative z-10 flex flex-col gap-y-24">
              <div className="flex justify-end items-end">
                <Image src={cancel} alt="close" role="button" onClick={hide} />
              </div>
              <div className="flex flex-col justify-center items-center gap-y-12 text-white text-lg font-bold mt-16">
                <Link href="/about">About Wema</Link>
                <Link href="/roadshow">GITEX Road Show</Link>
                <Link href="/prizes">Prizes</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
