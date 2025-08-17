import Image from "next/image";
import React from "react";
import BluredCircle from "../Ui/BluredCircle";

const AboutProject = () => {
  return (
    <div
      id="about"
      className="xl:w-[85%] w-[95%] relative  font-tight mx-auto my-14 mt-28"
    >
      {/* LIne Image's */}
      <Image
        src={"/img/line1.png"}
        className="xxl:absolute xxl:block 2xl:w-[700px]  -z-10 hidden xxl:right-[38%]! xl:w-[420px] xl:h-[240px] right-[41%] xl:right-[44%] top-[80px] xl:top-[45px] 2xl:right-[23%] 3xl:right-[32%]!"
        height={120}
        width={520}
        alt="lines"
      />
      <Image
        src={"/img/line2.png"}
        className="xxl:absolute xxl:block -z-10 hidden lg:h-[150px] xl:w-[230px] xl:h-[220px] right-[31%] 3xl:right-[28%] top-[89px] xl:top-[60px]"
        height={120}
        width={250}
        alt="lines"
      />
      <Image
        src={"/img/line3.png"}
        className="xxl:absolute xxl:block 2xl:right-[11%] xxl:h-[130px] lg:right-[7%] 2xl:h-[100px] -z-10 hidden xl:w-[200px] xl:h-[120px] right-[6.5%] rotate-[18deg] top-[110px] xl:top-[107px]"
        height={120}
        width={200}
        alt="lines"
      />

      {/* Static Items */}
      <div className="xxl:mb-24">
        <h1 className=" font-bold text-3xl xxl:text-[48px] text-[#EEEAF4]">
          About Project
        </h1>
        <p className="xxl:text-[16px] text-sm my-4 md:max-w-[55%] lg:max-w-[40%] xl:max-w-[34%] text-[#BEBBC9]">
          Coco Combat is a unique{" "}
          <span className="font-bold">
            cryptocurrency farming platform within a Tap to Earn Telegram app
          </span>
          , offering a variety of mining pools accessible right from your chat
        </p>
      </div>
      {/* blured div */}
      <div className="mx-auto sm:w-max max-w-[350px] my-9 xxl:my-0 xxl:absolute sm:px-6 lg:block h-[85px] xl:h-[100px] overflow-hidden right-2/12 top-7 xl:-top-1 xxl:rotate-[10deg] ">
        {/* Absolute items */}
        <div className="relative px-2 sm:px-6 h-[85px] xl:h-[100px]  flex justify-center items-center w-full lg:px-7 py-3">
          <div className="size-10 absolute rounded-full blur-[16px] -bottom-1.5 left-8 bg-[#EF6E1E]"></div>
          <div className="size-10 absolute rounded-full blur-[16px] -bottom-1.5 right-[45%] bg-[#E81C77]"></div>
          <div className="size-10 absolute rounded-full blur-[16px] -bottom-1.5 right-8 bg-[#1EC2EF]"></div>
          <div className="w-full absolute border-t-[7px] border-l-[3px]  border-gray-500/10 min-h-10 backdrop-blur-[8px] h-full rounded-xl bg-[#3f3f792a] sm:px-6 z-20"></div>
          <h3 className="z-30 text-[24px] text-center leading-[110%] xl:text-[32px] text-white">
            Yield Farming Options
          </h3>
        </div>
      </div>

      {/* 3 grid view */}
      <div className="grid mx-auto gap-4 md:gap-6 grid-cols-1  lg:grid-cols-3">
        <div className="p-8 mx-auto hover:-translate-y-2 transition-transform duration-300 rounded-3xl bg-gradient-to-tr from-[#1D1234] to-[#352659]">
          <div className="flex size-14 rounded-xl justify-center  items-center text-[20px] xxl:text-[24px] font-bold bg-[#FB6419]">
            01
          </div>
          <h1 className="text-[20px] xxl:text-[24px] mt-14 font-bold text-[#EEEAF4]">
            Range of Farming
          </h1>
          <p className="mt-2 text-[14px] xxl:text-[16px] text-[#BEBBC9]">
            From Basic to Supreme, it offers Farming for all levels, each with
            distinct hashrate capacities, rewards, and tailored profitability
            options
          </p>
        </div>
        <div className="p-8 mx-auto hover:-translate-y-2 transition-transform duration-300 rounded-3xl bg-gradient-to-tr from-[#1D1234] to-[#352659]">
          <div className="flex size-14 rounded-xl justify-center  items-center text-[20px] xxl:text-[24px] font-bold bg-[#FB196C]">
            02
          </div>
          <h1 className="text-[20px] xxl:text-[24px] mt-14 font-bold text-[#EEEAF4]">
            Statistics
          </h1>
          <p className="mt-2 text-[14px] xxl:text-[16px] text-[#BEBBC9]">
            Includes metrics on hashrate, online farmers, luck percentage, block
            rewards, and additional performance insights for better transparency
          </p>
        </div>
        <div className="p-8 mx-auto hover:-translate-y-2 transition-transform duration-300 w-full rounded-3xl bg-gradient-to-tr from-[#1D1234] to-[#352659]">
          <div className="flex size-14 rounded-xl justify-center  items-center text-[20px] xxl:text-[24px] font-bold bg-[#0FC2FD]">
            03
          </div>
          <h1 className="text-[20px] xxl:text-[24px] mt-14 font-bold text-[#EEEAF4]">
            Payouts
          </h1>
          <p className="mt-2 text-[14px] xxl:text-[16px] text-[#BEBBC9]">
            Structured in USDT, calculated based on the Farming’s performance,
            the farmer’s contribution, and efficiency metrics
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
