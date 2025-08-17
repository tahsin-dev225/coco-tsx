"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import BluredCircle from "../Ui/BluredCircle";

type dataType = {
  id: number;
  title: string;
  description: string;
};

const faqData: dataType[] = [
  {
    id: 0,
    title: "What is COCO MEME and how does it work?",
    description:
      "COCO MEME is a game based website you can earn money from this game .And you can get more thing",
  },
  {
    id: 1,
    title: "How can I start earning with COCO MEME?",
    description:
      "COCO MEME is a game based website you can earn money from this game .And you can get more thing",
  },
  {
    id: 2,
    title: "What are the benefits of joining COCO MEME early?",
    description:
      "COCO MEME is a game based website you can earn money from this game .And you can get more thing",
  },
  {
    id: 3,
    title: "How do I participate in the referral program?",
    description:
      "COCO MEME is a game based website you can earn money from this game .And you can get more thing",
  },
  {
    id: 4,
    title: "Is COCO MEME safe and secure to use?",
    description:
      "COCO MEME is a game based website you can earn money from this game .And you can get more thing",
  },
];

const FAQ = () => {
  const [expand, setExpand] = useState<number | null>(null);

  return (
    <div
      id="faq"
      className="xl:w-[85%] w-[95%] relative overflow-hidden font-tight mx-auto my-28"
    >
      <h1 className="font-bold tracking-normal leading-[115%] xsm:max-w-[320px] sm:max-w-[380px] text-center mx-auto md:max-w-[400px] xl:max-w-[600px] text-[#EEEAF4]  mb- text-[32px] xl:text-[48px]">
        FAQ
      </h1>
      <div className="my-6 mt-10 space-y-4">
        {faqData?.map((data, idx) => (
          <div
            key={idx}
            className="backdrop-blur-[20px] inset-shadow-white/20 inset-shadow-sm rounded-2xl bg-[#ffffff07] w-full p-6  md:p-8 px-4 md:px-6 text-[20px] xl:text-[24px]"
          >
            <div className="flex justify-between items-center gap-2.5">
              <h4 className="text-[#EEEAF4]">{data?.title}</h4>
              <div
                onClick={() => setExpand(expand === data?.id ? null : data?.id)}
                className={`flex justify-center cursor-pointer ${
                  expand === data?.id ? "rotate-45" : ""
                }  text-[18px] text-[#130B24] bg-[#EEEAF4] items-center p-1 rounded-full`}
              >
                <Plus className="size-7" />
              </div>
            </div>
            <AnimatePresence>
              {expand === data.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="w-[97%] text-lg font-normal text-[#86818f] mx-auto pt-8 pb-1.5">
                    <div className="w-full h-[2px] mb-6 bg-[#eeeaf429]"></div>
                    {data.description}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <BluredCircle classN="top-[20px]  left-20 size-[240px]" />
    </div>
  );
};

export default FAQ;
