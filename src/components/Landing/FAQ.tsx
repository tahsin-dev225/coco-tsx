import { Plus } from "lucide-react";
import React from "react";

const FAQ = () => {
  return (
    <div className="xl:w-[85%] w-[95%] font-tight mx-auto my-28">
      <h1 className="font-bold tracking-normal leading-[115%] xsm:max-w-[320px] sm:max-w-[380px] text-center mx-auto md:max-w-[400px] xl:max-w-[600px] text-[#EEEAF4]  mb- text-[32px] xl:text-[48px]">
        FAQ
      </h1>
      <div className="my-6 mt-10 space-y-4">
        <div className="flex backdrop-blur-[20px] inset-shadow-white/20 inset-shadow-sm justify-between items-center rounded-2xl bg-[#ffffff07] w-full p-6 gap-2.5 md:p-8 px-4 md:px-6 text-[20px] xl:text-[24px]">
          <h4 className="text-[#EEEAF4]">
            What is COCO MEME and how does it work?
          </h4>
          <div className="flex justify-center bg-[#EEEAF4] text-[18px] text-[#130B24] items-center p-1 rounded-full">
            <Plus className="size-7" />
          </div>
        </div>
        <div className="flex backdrop-blur-[20px] inset-shadow-white/30 inset-shadow-sm justify-between items-center rounded-2xl bg-[#ffffff07] w-full p-6 gap-2.5 md:p-8 px-4 md:px-6 text-[20px] xl:text-[24px]">
          <h4 className="text-[#EEEAF4]">
            How can I start earning with COCO MEME?
          </h4>
          <div className="flex justify-center bg-[#EEEAF4] text-[18px] text-[#130B24] items-center p-1 rounded-full">
            <Plus className="size-7" />
          </div>
        </div>
        <div className="flex backdrop-blur-[20px] inset-shadow-white/20 inset-shadow-sm justify-between items-center rounded-2xl bg-[#ffffff07] w-full p-6 gap-2.5 md:p-8 px-4 md:px-6 text-[20px] xl:text-[24px]">
          <h4 className="text-[#EEEAF4]">
            What are the benefits of joining COCO MEME early?
          </h4>
          <div className="flex justify-center bg-[#EEEAF4] text-[18px] text-[#130B24] items-center p-1 rounded-full">
            <Plus className="size-7" />
          </div>
        </div>
        <div className="flex backdrop-blur-[20px] inset-shadow-white/20 inset-shadow-sm justify-between items-center rounded-2xl bg-[#ffffff07] w-full p-6 gap-2.5 md:p-8 px-4 md:px-6 text-[20px] xl:text-[24px]">
          <h4 className="text-[#EEEAF4]">
            How do I participate in the referral program?
          </h4>
          <div className="flex justify-center bg-[#EEEAF4] text-[18px] text-[#130B24] items-center p-1 rounded-full">
            <Plus className="size-7" />
          </div>
        </div>
        <div className="flex backdrop-blur-[20px] inset-shadow-white/20 inset-shadow-sm justify-between items-center rounded-2xl bg-[#ffffff07] w-full p-6 gap-2.5 md:p-8 px-4 md:px-6 text-[20px] xl:text-[24px]">
          <h4 className="text-[#EEEAF4]">
            Is COCO MEME safe and secure to use?
          </h4>
          <div className="flex justify-center bg-[#EEEAF4] text-[18px] text-[#130B24] items-center p-1 rounded-full">
            <Plus className="size-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
