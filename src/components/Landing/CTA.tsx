import React from "react";
import Button from "../Ui/Button";

const CTA = () => {
  return (
    <div className="w-[95%] mb-8 md:mb-12 font-tight xl:w-[85%] md:my-12 md:mt-24 flex justify-center items-center mx-auto rounded-2xl bg-gradient-to-r from-[#FB6419] to-[#EA831C]">
      <div className="my-14 p-2">
        <h1 className="font-bold tracking-normal leading-[115%] xsm:max-w-[320px] sm:max-w-[380px] text-center mx-auto md:max-w-[400px] xl:max-w-[600px] text-[#EEEAF4]  mb- text-[32px] xl:text-[48px]">
          Get Started Today and Earn Big as One of the First
        </h1>
        <p className="text-[14px] leading-[150%] my-4 mb-8 xxl:text-[16px] xsm:max-w-[320px] sm:max-w-[380px] text-center mx-auto lg:max-w-[440px] text-[#EEEAF4] z-30">
          Transform your investment journey with Tap-to-Earn technology that
          combines fun, competition, and rewards, making every interaction
          engaging and profitable
        </p>
        <div className="flex justify-center items-center">
          <Button
            btnName="Play Now"
            classN="bg-[#EEEAF4]! text-[20px] font-bold py-4 w-full xsm:w-max  xsm:px-28 text-black! "
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
