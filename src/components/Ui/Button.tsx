import React from "react";

interface ButtonProps {
  btnName: string;
  classN?: string;
  isYelShade?: boolean;
}

const Button: React.FC<ButtonProps> = ({ btnName, classN, isYelShade }) => {
  return (
    <div
      className={`px-16 tracking-[0%]  flex justify-center items-center relative py-3 overflow-hidden leading-[130%] hover:cursor-pointer  font-semibold text-[18px] rounded-full ${classN}`}
    >
      {isYelShade && (
        <div className="absolute z-0 top-0 right-0 blur-[2px] bg-[#ed7d1b] hover:bg-[#ed531b] w-full h-full rounded-full"></div>
      )}
      <button className="z-40  ">{btnName}</button>
    </div>
  );
};

export default Button;
