"use client";

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface TokenomicsData {
  name: string;
  value: number;
  color: string;
}

const data: TokenomicsData[] = [
  { name: "Liquidity Pool", value: 20, color: "#FB196C" },
  { name: "Founders & Team", value: 5, color: "#FB7878" },
  { name: "Reserves", value: 5, color: "#C31DF1" },
  { name: "Burn Mechanism", value: 5, color: "#FDF50F" },
  { name: "Community", value: 40, color: "#EA831C" },
  { name: "Ecosystem", value: 10, color: "#CAFD0F" },
  { name: "Development Fund", value: 15, color: "#0FC2FD" },
];

const totalSupply = 240_000_000_000_000;

import type { PieLabelRenderProps } from "recharts";

const renderLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  index,
}: PieLabelRenderProps) => {
  const RADIAN = Math.PI / 180;

  const radius = (typeof outerRadius === "number" ? outerRadius : 0) * 1.2;

  const cxNum = typeof cx === "number" ? cx : Number(cx) || 0;
  const cyNum = typeof cy === "number" ? cy : Number(cy) || 0;

  const x = cxNum + radius * Math.cos(-midAngle * RADIAN);
  const y = cyNum + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor={x > cxNum ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
    >
      {`${data[index ?? 0].name} ${data[index ?? 0].value}%`}
    </text>
  );
};

interface LabelLineProps {
  points?: { x: number; y: number }[];
  stroke?: string;
  index?: number;
}

type PieLabelLineType = (
  props: LabelLineProps
) => React.ReactElement<SVGElement>;

const CustomLabelLine: PieLabelLineType = ({ points, index }) => {
  if (!points || typeof index !== "number") return <g />;

  const [start, end] = points;
  const color = data[index].color;

  // Extend the line length by moving the end point farther
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const extendFactor = 1; // 1 = original length, 1.5 = 50% longer
  const extendedEnd = {
    x: start.x + dx * extendFactor,
    y: start.y + dy * extendFactor,
  };

  return (
    <g>
      {/* Dot */}
      <circle cx={end.x} cy={end.y} r={4} fill={color} />
      <circle cx={end.x} cy={end.y} r={4} fill={color} />

      {/* Extended line */}
      <path
        d={`M${start.x},${start.y} L${extendedEnd.x},${extendedEnd.y}`}
        stroke="#ccc"
        strokeWidth={2} // thicker
        fill="none"
      />
    </g>
  );
};

const Tokenomics = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setIsMobile(width < 490);
      setIsTab(width >= 490 && width < 1024);
      setIsDesktop(width >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="tokenomics"
      className="xl:w-[85%] w-[95%] h-[700px] smm:h-[640px] lg:h-[600px] mx-auto"
    >
      <ResponsiveContainer className={"w-[100%]! h-[65%]! lg:h-full! "}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy={isMobile ? "30%" : "50%"}
            innerRadius={isMobile ? 80 : isTab ? 130 : 150}
            outerRadius={isMobile ? 110 : isTab ? 180 : 220}
            label={isDesktop ? renderLabel : false}
            labelLine={CustomLabelLine}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>

          <text
            x="50%"
            y={isMobile ? "30%" : "50%"}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#fff"
            fontSize={18}
            fontWeight="bold"
          >
            Total Supply
          </text>
          <text
            x="50%"
            y={isMobile ? "35%" : "55%"}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#ccc"
            fontSize={14}
          >
            {totalSupply.toLocaleString("en-US")}
          </text>
        </PieChart>
      </ResponsiveContainer>
      <div className="-mt-9 smm:mt-12 mx-auto w-[90%] grid lg:hidden grid-cols-1 smm:grid-cols-2 md:grid-cols-3 gap-4 text-white font-tight">
        {data?.map((vall, idx) => (
          <div className="flex items-center gap-2.5" key={idx}>
            <div
              className="size-4 rounded"
              style={{ backgroundColor: vall?.color }}
            />
            <span>{vall?.name}</span>
            <span>{vall?.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;
