import React from "react";

type BluredText = {
  bText: string;
};

const BluredBgSm = ({ bText }: BluredText) => {
  return (
    <div className="px-3.5 relative py-2.5 rounded-xl ">
      <div className="w-full z-20 h-full top-0 blur bg-white/10 "></div>
      <div className="size-5 rounded-full absolute z-10"></div>
      <h1 className="z-30 text-white">{bText}</h1>
    </div>
  );
};

export default BluredBgSm;
