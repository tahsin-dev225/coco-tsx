"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/img/logo.png";
import Link from "next/link";
import { Send } from "lucide-react";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { Drawer } from "@mui/material";
type NavItem = {
  name: string;
  href: string;
};

export const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "FAQ", href: "#faq" },
  { name: "Whitepaper", href: "/whitepaper" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  return (
    <div className="w-full font-tight bg-gradient-to-b ">
      <div className="flex w-[95%] justify-between items-center  xl:w-[85%] mx-auto  py-4">
        <Link href={"/"} className="m-2 flex gap-3 items-center">
          <Image
            src={logo}
            className="sm:w-10 w-5"
            height={60}
            width={60}
            alt="logo"
          />
          <h2 className="md:text-[20px] text-[12px] font-bold font-tight">
            COCO Combat
          </h2>
        </Link>
        <div className="md:flex hidden sm:gap- px-1.5 py-1 items-center rounded justify-center">
          {navItems?.map((item) => (
            <Link
              onClick={(e) => handleScroll(e, item.href)}
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
        <div className="flex gap-1.5 items-center justify-center">
          <div className="size-9 lg:size-10 backdrop-blur-2xl bg-[#1D1234] flex justify-center items-center p-2">
            <Send className="z-30" />
          </div>
          <div className="size-9 lg:size-10 backdrop-blur-2xl bg-[#1D1234] flex justify-center items-center p-2">
            <CiYoutube />
          </div>
          <div className="size-9 lg:size-10 backdrop-blur-2xl bg-[#1D1234] flex justify-center items-center p-2">
            <FaXTwitter className="z-30" />
          </div>
          <div className="">
            {isOpen ? (
              <Image
                onClick={toggleDrawer(false)}
                className="size-9 lg:size-[41px] mx-3 sm:mx-5 md:hidden"
                src={"/img/cross.png"}
                width={190}
                height={160}
                alt="asdf"
              />
            ) : (
              <Image
                onClick={toggleDrawer(true)}
                className="size-9 lg:size-[41px] mx-3 sm:mx-5 md:hidden"
                src={"/img/menu.png"}
                width={190}
                height={160}
                alt="asdf"
              />
            )}

            <Drawer
              anchor={"bottom"}
              open={isOpen}
              slotProps={{
                paper: {
                  sx: {
                    borderTopLeftRadius: "2rem",
                    borderTopRightRadius: "2rem",
                    overflow: "hidden",
                  },
                },
              }}
              onClose={toggleDrawer(false)}
            >
              <div className=" bg-gradient-to-tr from-[#1D1234] to-[#352659] p-6 space-y-3">
                {navItems?.map((items, idx) => (
                  <Link
                    href={items?.href}
                    key={idx}
                    className="flex backdrop-blur-[20px] inset-shadow-white/20 inset-shadow-sm justify-between rounded-2xl bg-[#ffffff0f] w-full p-3 px-6 text-[20px]"
                  >
                    <h4 className="text-[#EEEAF4]">{items.name}</h4>
                    <p className="text-[#BEBBC9]">0{idx + 1}</p>
                  </Link>
                ))}

                {/* bottom */}
                <div className="flex justify-center text-white items-center gap-3 sm:gap-4 py-4 pb-6">
                  <div className="size-12 lg:size-14 rounded-lg backdrop-blur-2xl bg-[#1D1234] flex justify-center items-center p-2">
                    <Send className="z-30" />
                  </div>
                  <div className="size-12 lg:size-14 rounded-lg backdrop-blur-2xl bg-[#1D1234] flex justify-center items-center p-2">
                    <CiYoutube />
                  </div>
                  <div className="size-12 lg:size-14 rounded-lg backdrop-blur-2xl bg-[#1D1234] flex justify-center items-center p-2">
                    <FaXTwitter className="z-30" />
                  </div>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
