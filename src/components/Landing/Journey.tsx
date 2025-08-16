import React from "react";
import Button from "../Ui/Button";

type phases = {
  title: string;
  list1: string;
  list2: string;
  list3: string;
  list4: string;
};

const AllPhase: phases[] = [
  {
    title: "Community Building",
    list1: "Grow a global community with viral campaigns",
    list2: "Boost brand awareness through strategic marketing",
    list3: "Drive growth with a seamless, rewarding referral system",
    list4: "Offer tokens for participation and inviting others",
  },
  {
    title: "TOP 1 Meme Exchange",
    list1: "Launch the first decentralized exchange for meme tokens",
    list2: "Offer low fees and high liquidity for meme tokens",
    list3: "Partner with influencers to increase awareness",
    list4: "Attract Web3 enthusiasts with a seamless trading experience",
  },
  {
    title: "COCO MEME Launchpad",
    list1: "Host and support promising new meme tokens",
    list2: "Provide staking opportunities for COCO MEME holders",
    list3: "Enable participation in launchpad rewards",
    list4: "Support token launches with marketing and community growth",
  },
  {
    title: "	Ecosystem Expansion",
    list1: "Integrate GameFi to link COCO MEME with gaming rewards",
    list2: "Introduce tokenized utilities like NFTs tied to COCO MEME",
    list3: "Launch a governance system for token holders",
    list4: "Expand the ecosystem with new features and partnerships",
  },
  {
    title: "Long-Term Sustainability",
    list1: "Implement a progressive burn strategy",
    list2: "Announce public burn events to create scarcity and hype",
    list3: "Build partnerships with global payment systems",
    list4: "Increase token utility through real-world applications",
  },
  {
    title: "Global Brand Awareness",
    list1: "Partner with major brands to boost recognition",
    list2: "Launch COCO MEME-themed merchandise",
    list3: "Participate in global crypto events and summits",
    list4: "Increase social media presence and community engagement",
  },
  {
    title: "Cross-Chain Expansion",
    list1: "Enable cross-chain compatibility for COCO MEME",
    list2: "Allow seamless token transfers between multiple blockchains",
    list3: "Provide bridges for COCO MEME token transfers across chains",
    list4: "Expand accessibility and trading opportunities for users",
  },
];

const Journey = () => {
  return (
    <div className="flex my-32 w-[95%] xl:w-[85%] mx-auto font-tight flex-col lg:flex-row gap-6">
      <div className="w-full ">
        <h1 className="font-bold leading-[130%] text-[#EEEAF4] lg:w-[85%] mb-8 text-[32px] xl:text-[48px]">
          The Journey Ahead: Our Roadmap to Limitless Innovation
        </h1>
        <Button
          isYelShade
          classN="w-max lg:py-4 lg:px-24!"
          btnName="Play Now"
        ></Button>
      </div>
      <div className="w-full space-y-6 p-3.5">
        {AllPhase.map((phase, index) => (
          <div
            key={index}
            className="p-4 md:p-6 mx-auto rounded-4xl bg-gradient-to-tr from-[#1D1234] to-[#352659]"
          >
            <h2 className="text-[#FB6419] w-max text-[16px] px-3.5 rounded-xl bg-[#fb641923] py-1.5">
              Phase 0{index}
            </h2>
            <h2 className="text-xl font-bold mt-4 mb-8">{phase.title}</h2>
            <ul className="list-disc text-[14px] xxl:text-[16px] pl-6 space-y-1 marker:text-[#FB6419]">
              <li>{phase.list1}</li>
              <li>{phase.list2}</li>
              <li>{phase.list3}</li>
              <li>{phase.list4}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
