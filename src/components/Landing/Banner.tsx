import React from "react";
import Button from "../Ui/Button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex lg:min-h-[400px] font-tight xl:min-h-[550px] flex-col lg:flex-row w-[95%] gap-2.5 md:gap-6 xl:w-[85%] mx-auto items-center ">
      <div className="w-full lg:min-h-[360px] xl:min-h-[500px] flex flex-col items-start justify-end h-full relative ">
        <h2 className="xl:text-[60px] sm:w-[70%] lg:pt-1 lg:w-[92%] mx-auto lg:mx-0 text-[38px] md:px-3 pt-8 sm:pt-28 p-3 xl:w-[90%] text-center lg:text-start leading-[110%] font-bold font-tight">
          Join COCO Combat and Start Earning Together
        </h2>
        <div className="flex justify-center lg:justify-start w-full">
          <Button
            isYelShade
            classN="sm:w-max! my-5 text-white w-full! smm:w-[70%]! lg:my-10"
            btnName="Play Now"
          ></Button>
        </div>

        <div className="absolute hidden -translate-x-1/2 sm:block left-[50%]  w-max lg:left-16 top-7 lg:top-10 -rotate-6 ">
          <div className="relative  flex justify-center items-center w-full px-4 py-3">
            <div className="size-7 absolute rounded-full -top-2.5 -right-2.5 bg-[#E9217B]"></div>
            <div className="w-full  absolute min-h-10 backdrop-blur h-full rounded-xl bg-[#3f3f794b] px-4 z-20"></div>
            <h3 className="z-30 text-[17px] xl:text-[23px] text-white">
              Tap 2 Earn
            </h3>
          </div>
        </div>
        <div className="absolute hidden sm:block lg:right-20 lg:left-auto left-10 bottom-8 w-max lg:top-10 rotate-[10deg] lg:rotate-6 ">
          <div className="relative  flex justify-center items-center w-full px-4 py-3">
            <div className="size-7 absolute rounded-full -bottom-2.5 -right-2.5 bg-[#EF6E1E]"></div>
            <div className="w-full  absolute min-h-10 backdrop-blur h-full rounded-xl bg-[#3f3f794b] px-4 z-20"></div>
            <h3 className="z-30 text-[17px] xl:text-[23px] text-white">
              Tap 2 Earn
            </h3>
          </div>
        </div>
        <div className="absolute hidden sm:block lg:right-32 right-10 bottom-8 w-max lg:bottom-10 -rotate-[10deg] lg:-rotate-6 ">
          <div className="relative  flex justify-center items-center w-full px-4 py-3">
            <div className="size-7 absolute rounded-full -bottom-2.5 -right-2.5 bg-[#1DCCF0]"></div>
            <div className="w-full  absolute min-h-10 backdrop-blur h-full rounded-xl bg-[#3f3f794b] px-4 z-20"></div>
            <h3 className="z-30 text-[17px] xl:text-[23px] text-white">
              Tap 2 Earn
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center lg:min-h-[360px] xl:min-h-[500px] items-end overflow-hidden rounded-3xl p-5 pb-0 h-full relative bg-[#1D1234] backdrop-blur-2xl ">
        <Image
          src={"/img/mobile.png"}
          className=" z-10 h-[90%] mb-4 w-[40%]  -mr-4 xsm:-mr-16 left-2"
          height={200}
          width={300}
          alt="coco"
        />
        <Image
          src={"/img/raccoon.png"}
          className=" z-20 w-[55%] right-2 "
          height={300}
          width={300}
          alt="coco"
        />
        <div className="size-40 rounded-full blur-3xl bg-[#5d5d8b] absolute top-0 -left-0"></div>
        <div className="size-40 rounded-full blur-3xl bg-[#5d5da5] absolute bottom-0 right-0 "></div>
      </div>
    </div>
  );
};

export default Banner;
