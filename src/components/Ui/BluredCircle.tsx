import React from "react";

type classType = {
  classN: string;
};

const BluredCircle = ({ classN }: classType) => {
  return (
    <div
      className={`size-36 absolute blur-[250px] overflow-hidden -z-10 bg-sky-400/5 ${classN}`}
    ></div>
  );
};

export default BluredCircle;
