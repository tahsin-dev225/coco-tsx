import Image from "next/image";
import React from "react";
import BluredCircle from "../Ui/BluredCircle";

const Revolutionary = () => {
  return (
    <div className="w-[95%] font-tight my-24 relative overflow-hidden lg:w-[85%] mx-auto">
      <h1 className="md:max-w-[70%] lg:max-w-[50%] font-bold my-5 text-[32px] lg:text-[48px]">
        Revolutionary Technology Behind COCO Meme
      </h1>
      <div className="flex  gap-4 lg:gap-7 flex-col lg:flex-row">
        <div className="relative w-full ">
          <div className="w-full absolute shadow-lg shadow-cyan-500/5 inset-shadow-white/20 inset-shadow-sm   min-h-10 backdrop-blur-[8px] h-full rounded-3xl bg-[#ffffff0d] px-6 -z-10"></div>
          {/* static items */}
          <div className=" p-3.5 lg:p-6">
            <h2 className="text-[20px] xxl:text-[24px] z-30 text-[#EEEAF4] font-bold my-3">
              Interactive Gamification
            </h2>
            <p className="text-[14px] xxl:text-[16px] text-[#BEBBC9] mb-4 z-30">
              Transform your investment journey with Tap-to-Earn technology that
              combines fun, competition, and rewards, making every interaction
              engaging and profitable
            </p>
            <div className="z-30 grid gap- grid-cols-3">
              <Image
                src={"/img/mobile1.png"}
                className="w-full"
                height={230}
                width={230}
                alt="screen"
              />
              <Image
                src={"/img/mobile2.png"}
                className="w-full"
                height={230}
                width={230}
                alt="screen"
              />
              <Image
                src={"/img/mobile3.png"}
                className="w-full"
                height={230}
                width={230}
                alt="screen"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full ">
          <div className="w-full absolute shadow-lg shadow-cyan-500/5 inset-shadow-white/50 inset-shadow-sm   min-h-10 backdrop-blur-[8px] h-full rounded-3xl bg-gradient-to-br from-[#b8a0e845] to-[#ffffff01] px-6 -z-10"></div>
          <div className="w-full bg-[url('/img/chart.png')] absolute opacity-50  bg-cover! bg-bottom bg-no-repeat   min-h-10 h-full rounded-3xl  px-6 -z-10"></div>
          {/* static items */}
          <div className="relative  p-3.5 lg:p-6">
            <h2 className="text-[20px] xxl:text-[24px] z-30 text-[#EEEAF4] font-bold my-3">
              Lightning-Fast Blockchain
            </h2>
            <p className="text-[14px] xxl:text-[16px] text-[#BEBBC9] mb-4 z-30">
              Enjoy seamless, delay-free transactions with low fees, powered by
              the high-speed CNX20 blockchain, designed to handle millions of
              users effortlessly
            </p>
            <Image
              src={"/img/raccoon-rocket.png"}
              className="lg:absolute lg:top-26 xxl:top-auto lg:max-w-[350px] xl:min-w-[470px] "
              height={230}
              width={430}
              alt="screen"
            />
          </div>
        </div>
      </div>

      <BluredCircle classN="top-[7%] left-[35%] size-[300px]" />
    </div>
  );
};

export default Revolutionary;
