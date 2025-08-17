import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../../public/img/logo.png";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "FAQ", href: "#faq" },
  { name: "Whitepaper", href: "/whitepaper" },
];

const Footer = () => {
  return (
    <div className="bg-[#1D1234] ">
      <div className="flex gap-6  lg:gap-0 flex-col md:flex-row w-[92%] justify-between lg:items-center  xl:w-[85%] mx-auto  py-4">
        <Link href={"/"} className="m-2 flex gap-3 w-max h-max items-center">
          <Image
            src={logo}
            className="w-10"
            height={60}
            width={60}
            alt="logo"
          />
          <h2 className="md:text-[20px] text-[12px] font-bold font-tight">
            COCO Combat
          </h2>
        </Link>
        <div className="flex flex-col lg:flex-row sm:gap- px-1.5 py-1 lg:items-center rounded justify-center">
          {navItems?.map((item) => (
            <Link
              className={`px-3 items-center font-tight lg:text-[14px] xl:text-[16px] font-normal text-[#BEBBC9] py-2.5 h-max  ${
                item.name === "HOME" && "bg-[#8FEF2F] text-black!"
              } `}
              key={item.name}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-1.5 lg:items-center md:justify-center">
          <div className="size-9 lg:size-10 backdrop-blur-2xl bg-[#1D1234] flex justify-center items-center p-2">
            <Send className="z-30" />
          </div>
          <div className="size-9 lg:size-10 backdrop-blur-2xl bg-[#1D1234] flex justify-center items-center p-2">
            <CiYoutube />
          </div>
          <div className="size-9 lg:size-10 backdrop-blur-2xl bg-[#1D1234] flex justify-center items-center p-2">
            <FaXTwitter className="z-30" />
          </div>
        </div>
      </div>
      <div className="my-5 h-[2px] w-[100%]  bg-[#EEEAF4]/10 "></div>
      <div className="flex gap-6 lg:gap-0 text-[14px] text-[#BEBBC9] flex-col md:flex-row w-[92%] justify-between lg:items-center  xl:w-[85%] mx-auto  py-4">
        <h5 className="">© 2024 COCO Combat</h5>
        <div className="flex flex-col  md:flex-row gap-8">
          <p className="">Terms and conditions</p>
          <p className="">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
