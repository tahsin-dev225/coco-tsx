import Image from "next/image";
import React from "react";

const WhyCoco = () => {
  return (
    <div className="w-[95%] font-tight xl:w-[85%] mx-auto my-16">
      <h2 className="font-bold text-[32px] xl:text-[48px] my-6">
        Why COCO Combat
      </h2>

      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="relative p-3.5 lg:p-6">
            <div className="w-full absolute shadow-lg shadow-cyan-500/5 inset-shadow-white/20 inset-shadow-sm top-0 right-0  min-h-10 backdrop-blur-[8px] h-full rounded-3xl bg-[#ffffff0d] px- -z-10"></div>
            <div className="flex size-14 rounded-xl justify-center drop-shadow-xl p-3 drop-shadow-sky-600/50 items-center text-[20px] xxl:text-[24px] font-bold bg-[#0FC2FD]">
              <Image
                src={"/img/tech.png"}
                className=""
                height={90}
                width={90}
                alt="icon"
              />
            </div>
            <h1 className="text-[20px] xxl:text-[24px] mt-14 font-bold text-[#EEEAF4]">
              Technology
            </h1>
            <p className="mt-2 text-[14px] xxl:text-[16px] text-[#BEBBC9]">
              Merges blockchain and gamification for a unique experience
            </p>
          </div>
          <div className="relative p-3.5 lg:p-6">
            <div className="w-full absolute shadow-lg top-0 right-0  shadow-cyan-500/5 inset-shadow-white/20 inset-shadow-sm   min-h-10 backdrop-blur-[8px] h-full rounded-3xl bg-[#ffffff0d] px-6 -z-10"></div>
            <div className="flex size-14 rounded-xl p-3 justify-center drop-shadow-xl drop-shadow-sky-600/50 items-center text-[20px] xxl:text-[24px] font-bold bg-[#0FC2FD]">
              <Image
                src={"/img/reward.png"}
                className=""
                height={90}
                width={90}
                alt="icon"
              />
            </div>
            <h1 className="text-[20px] xxl:text-[24px] mt-14 font-bold text-[#EEEAF4]">
              Rewards
            </h1>
            <p className="mt-2 text-[14px] xxl:text-[16px] text-[#BEBBC9]">
              Merges blockchain and gamification for a unique experience
            </p>
          </div>
          <div className="relative p-3.5 lg:p-6">
            <div className="w-full absolute shadow-lg shadow-cyan-500/5 inset-shadow-white/20 inset-shadow-sm   min-h-10 backdrop-blur-[8px] h-full rounded-3xl top-0 right-0  bg-[#ffffff0d] px-6 -z-10"></div>
            <div className="flex size-14 rounded-xl justify-center drop-shadow-xl drop-shadow-sky-600/50 items-center text-[20px] xxl:text-[24px] p-3 font-bold bg-[#0FC2FD]">
              <Image
                src={"/img/mass.png"}
                className=""
                height={90}
                width={90}
                alt="icon"
              />
            </div>
            <h1 className="text-[20px] xxl:text-[24px] mt-14 font-bold text-[#EEEAF4]">
              Mass Adoption
            </h1>
            <p className="mt-2 text-[14px] xxl:text-[16px] text-[#BEBBC9]">
              Merges blockchain and gamification for a unique experience
            </p>
          </div>
          <div className="relative p-3.5 lg:p-6">
            <div className="w-full absolute shadow-lg shadow-cyan-500/5 inset-shadow-white/20 inset-shadow-sm   min-h-10 backdrop-blur-[8px] h-full top-0 right-0  rounded-3xl bg-[#ffffff0d] px-6 -z-10"></div>
            <div className="flex size-14 rounded-xl justify-center drop-shadow-xl drop-shadow-sky-600/50 items-center text-[20px] xxl:text-[24px] p-3 font-bold bg-[#0FC2FD]">
              <Image
                src={"/img/commonity.png"}
                className=""
                height={90}
                width={90}
                alt="icon"
              />
            </div>
            <h1 className="text-[20px] xxl:text-[24px] mt-14 font-bold text-[#EEEAF4]">
              Community
            </h1>
            <p className="mt-2 text-[14px] xxl:text-[16px] text-[#BEBBC9]">
              Merges blockchain and gamification for a unique experience
            </p>
          </div>
        </div>
        <div className="w-full relative flex rounded-3xl inset justify-center inset-shadow-white/20 inset-shadow-sm items-end bg-cover bg-no-repeat bg-[url('/img/whtbg.png')]">
          <Image
            src={"/img/why-rocon.png"}
            className="z-20"
            height={390}
            width={450}
            alt="roccon"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyCoco;
