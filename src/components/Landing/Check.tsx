// "use client";

// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   Tooltip,
//   TooltipProps,
// } from "recharts";

// interface TokenData {
//   name: string;
//   value: number;
//   color: string;
// }

// const data: TokenData[] = [
//   { name: "Community 40%", value: 96_000_000_000_000, color: "#FF6B00" },
//   { name: "Development Fund 15%", value: 36_000_000_000_000, color: "#3BA3F6" },
//   { name: "Ecosystem 10%", value: 24_000_000_000_000, color: "#6FFF3A" },
//   { name: "Liquidity Pool 20%", value: 48_000_000_000_000, color: "#FF2DC3" },
//   { name: "Founders & Team 5%", value: 12_000_000_000_000, color: "#FF6A6A" },
//   { name: "Reserves 5%", value: 12_000_000_000_000, color: "#9A4DFF" },
//   { name: "Burn Mechanism 5%", value: 12_000_000_000_000, color: "#FFD930" },
// ];

// interface CustomPayload {
//   name: string;
//   value: number;
// }

// const CustomTooltip = ({
//   active,
//   payload,
// }: TooltipProps<number, string> & { payload?: CustomPayload[] }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-black text-white px-3 py-2 rounded-lg text-sm shadow-md">
//         <p>{payload[0].name}</p>
//         <p>{payload[0].value.toLocaleString()}</p>
//       </div>
//     );
//   }
//   return null;
// };

// export default function TokenomicsChart() {
//   return (
//     <div className="w-full flex flex-col items-center justify-center py-10 bg-black">
//       <h2 className="text-white text-2xl font-bold mb-6">Total Supply</h2>
//       <p className="text-gray-300 mb-4">240,000,000,000,000</p>

//       <div className="w-full h-[400px] md:w-3/4">
//         <ResponsiveContainer>
//           <PieChart>
//             <Pie
//               data={data}
//               dataKey="value"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               innerRadius={100}
//               outerRadius={150}
//               paddingAngle={2}
//             >
//               {data.map((entry, index) => (
//                 <Cell
//                   key={`cell-${index}`}
//                   fill={entry.color}
//                   stroke="transparent"
//                 />
//               ))}
//             </Pie>
//             <Tooltip content={<CustomTooltip />} />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
//         {data.map((item, i) => (
//           <div key={i} className="flex items-center space-x-2">
//             <span
//               className="inline-block w-4 h-4 rounded"
//               style={{ backgroundColor: item.color }}
//             ></span>
//             <span className="text-gray-300">{item.name}</span>
//             <span className="text-gray-400">{item.value.toLocaleString()}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// const newtypsd = 9;

// import React from "react";
// import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";

// interface ChartData {
//   name: string;
//   value: number;
//   color: string;
// }

// const data: ChartData[] = [
//   { name: "Community 40%", value: 96_000_000_000_000, color: "#FF6B00" },
//   { name: "Development Fund 15%", value: 36_000_000_000_000, color: "#3BA3F6" },
//   { name: "Ecosystem 10%", value: 24_000_000_000_000, color: "#6FFF3A" },
//   { name: "Liquidity Pool 20%", value: 48_000_000_000_000, color: "#FF2DC3" },
//   { name: "Founders & Team 5%", value: 12_000_000_000_000, color: "#FF6A6A" },
//   { name: "Reserves 5%", value: 12_000_000_000_000, color: "#9A4DFF" },
//   { name: "Burn Mechanism 5%", value: 12_000_000_000_000, color: "#FFD930" },
// ];

// interface CustomLabelProps {
//   cx: number;
//   cy: number;
//   midAngle: number;
//   outerRadius: number;
//   percent: number;
//   index: number;
// }

// // কাস্টম লেবেল রেন্ডারার
// const renderCustomLabel = ({
//   cx,
//   cy,
//   midAngle,
//   outerRadius,
//   percent,
//   index,
// }: CustomLabelProps) => {
//   const RADIAN = Math.PI / 180;

//   const radius = outerRadius + 202;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   const lineX = cx + (outerRadius + 10) * Math.cos(-midAngle * RADIAN);
//   const lineY = cy + (outerRadius + 10) * Math.sin(-midAngle * RADIAN);

//   return (
//     <g>
//       <line
//         x1={lineX}
//         y1={lineY}
//         x2={x}
//         y2={y}
//         stroke={data[index].color}
//         strokeWidth={2}
//         className="drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]"
//       />
//       <text
//         x={x}
//         y={y}
//         fill={data[index].color}
//         textAnchor={x > cx ? "start" : "end"}
//         dominantBaseline="central"
//         className="font-semibold text-sm"
//       >
//         {`${(percent * 100).toFixed(0)}%`}
//       </text>
//     </g>
//   );
// };

// export default function TokenomicsSameToSame() {
//   return (
//     <div className="w-full flex flex-col items-center justify-center py-10 bg-black">
//       <h2 className="text-white text-2xl font-bold mb-6">Total Supply</h2>
//       <p className="text-gray-300 mb-4">240,000,000,000,000</p>

//       <div className="w-full h-[400px] md:w-3/4">
//         <ResponsiveContainer>
//           <PieChart>
//             <Pie
//               data={data}
//               cx="50%"
//               cy="50%"
//               innerRadius={100}
//               outerRadius={150}
//               dataKey="value"
//               labelLine={false}
//               label={renderCustomLabel}
//               paddingAngle={2}
//             >
//               {data.map((entry, index) => (
//                 <Cell
//                   key={`cell-${index}`}
//                   fill={entry.color}
//                   stroke="transparent"
//                   className="drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
//                 />
//               ))}
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Legend */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
//         {data.map((item, i) => (
//           <div key={i} className="flex items-center space-x-2">
//             <span
//               className="inline-block w-4 h-4 rounded"
//               style={{ backgroundColor: item.color }}
//             ></span>
//             <span className="text-gray-300">{item.name}</span>
//             <span className="text-gray-400">{item.value.toLocaleString()}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   PieLabelRenderProps,
// } from "recharts";

// interface TokenomicsItem {
//   name: string;
//   value: number;
//   gradient: string;
//   tokens: number;
//   dColor: string;
// }

// const tokenomicsData: TokenomicsItem[] = [
//   {
//     name: "Development Fund",
//     value: 15,
//     gradient: "developmentGradient",
//     tokens: 36_000_000_000_000,
//     dColor: "#1BC2EE",
//   },
//   {
//     name: "Ecosystem",
//     value: 10,
//     gradient: "ecosystemGradient",
//     tokens: 24_000_000_000_000,
//     dColor: "#B5FB21",
//   },
//   {
//     name: "Community",
//     value: 40,
//     gradient: "communityGradient",
//     tokens: 96_000_000_000_000,
//     dColor: "#F4711A",
//   },
//   {
//     name: "Burn Mechanism",
//     value: 5,
//     gradient: "burnGradient",
//     tokens: 12_000_000_000_000,
//     dColor: "#F4D457",
//   },
//   {
//     name: "Reserves",
//     value: 5,
//     gradient: "reservesGradient",
//     tokens: 12_000_000_000_000,
//     dColor: "#A91DEB",
//   },
//   {
//     name: "Founders & Team",
//     value: 5,
//     gradient: "foundersGradient",
//     tokens: 12_000_000_000_000,
//     dColor: "#FF7A7A",
//   },
//   {
//     name: "Liquidity Pool",
//     value: 20,
//     gradient: "liquidityGradient",
//     tokens: 48_000_000_000_000,
//     dColor: "#FB196C",
//   },
// ];

// const Label = ({
//   cx,
//   cy,
//   midAngle,
//   outerRadius,
//   fill,
//   payload,
//   value,
// }: PieLabelRenderProps & { payload: TokenomicsItem; value: number }) => {
//   if (
//     typeof cx !== "number" ||
//     typeof cy !== "number" ||
//     typeof midAngle !== "number" ||
//     typeof outerRadius !== "number"
//   ) {
//     return null;
//   }

//   const RADIAN = Math.PI / 180;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + outerRadius * cos;
//   const sy = cy + outerRadius * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 150;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke="#40394E"
//         strokeLinejoin="round"
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={4} fill={fill} stroke="none" />
//       <circle cx={sx} cy={sy} r={4} fill="#a2a4a7e0" stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#fff"
//       >{`${payload.name} ${value}%`}</text>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         dy={20}
//         textAnchor={textAnchor}
//         fill="#999"
//       >
//         {payload.tokens.toLocaleString().replace(/,/g, " ")}
//       </text>
//     </g>
//   );
// };

// const TokenomicsPieChart = () => {
//   return (
//     <div id="tokenomics" className="mt-[82px] md:mt-[120px] xl:mt-[178px]">
//       <h2 className="text-center">Tokenomics</h2>
//       <div className="relative w-full pointer-events-none mx-auto">
//         <ResponsiveContainer
//           height={
//             typeof window !== "undefined"
//               ? window.innerWidth > 1024
//                 ? 600
//                 : window.innerWidth < 760
//                 ? 350
//                 : 220
//               : 600
//           }
//         >
//           <PieChart width={400} height={400}>
//             {/* Gradients */}
//             <defs>
//               <linearGradient
//                 id="liquidityGradient"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="0%"
//               >
//                 <stop offset="0%" stopColor="#EA1C91" />
//                 <stop offset="100%" stopColor="#FB196C" />
//               </linearGradient>
//               <linearGradient
//                 id="foundersGradient"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="0%"
//               >
//                 <stop offset="0%" stopColor="#F22121" />
//                 <stop offset="100%" stopColor="#FB7878" />
//               </linearGradient>
//               <linearGradient
//                 id="reservesGradient"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="0%"
//               >
//                 <stop offset="0%" stopColor="#C31DF1" />
//                 <stop offset="100%" stopColor="#8F1EE6" />
//               </linearGradient>
//               <linearGradient
//                 id="burnGradient"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="0%"
//               >
//                 <stop offset="0%" stopColor="#FDF50F" />
//                 <stop offset="100%" stopColor="#FDF50F" />
//               </linearGradient>
//               <linearGradient
//                 id="communityGradient"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="0%"
//               >
//                 <stop offset="12.92%" stopColor="#FB6419" />
//                 <stop offset="96.64%" stopColor="#EA831C" />
//               </linearGradient>
//               <linearGradient
//                 id="ecosystemGradient"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="0%"
//               >
//                 <stop offset="0%" stopColor="#CAFD0F" />
//                 <stop offset="100%" stopColor="#5BF472" />
//               </linearGradient>
//               <linearGradient
//                 id="developmentGradient"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="0%"
//               >
//                 <stop offset="0%" stopColor="#0FC2FD" />
//                 <stop offset="100%" stopColor="#5B96F4" />
//               </linearGradient>
//             </defs>

//             <text
//               x="50%"
//               y="50%"
//               dy={0}
//               textAnchor="middle"
//               fontSize="20px"
//               fontWeight="700"
//               fill="#fff"
//             >
//               Total Supply
//             </text>
//             <text
//               x="50%"
//               y="50%"
//               dy={30}
//               textAnchor="middle"
//               fontSize="16px"
//               fill="#BEBBC9"
//             >
//               240 000 000 000 000
//             </text>

//             <Pie
//               data={tokenomicsData}
//               innerRadius={
//                 typeof window !== "undefined" && window.innerWidth > 1024
//                   ? 140
//                   : 120
//               }
//               outerRadius={
//                 typeof window !== "undefined" && window.innerWidth > 1024
//                   ? 220
//                   : typeof window !== "undefined" && window.innerWidth < 760
//                   ? 160
//                   : 150
//               }
//               paddingAngle={5}
//               dataKey="value"
//               startAngle={90}
//               endAngle={450}
//               label={
//                 typeof window !== "undefined" && window.innerWidth < 1020
//                   ? undefined
//                   : Label
//               }
//               labelLine={false}
//             >
//               {tokenomicsData.map((entry, index) => (
//                 <Cell
//                   key={index}
//                   fill={`url(#${entry.gradient})`}
//                   stroke="none"
//                 />
//               ))}
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Legend for small screens */}
//       <div className="lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 grid lg:hidden mt-[40px] gap-[24px] md:gap-[46px] px-[40px]">
//         {tokenomicsData.map((single) => (
//           <div key={single.name} className="flex gap-[6px] items-start">
//             <div
//               className="size-[12px] mt-[6px] rounded-full"
//               style={{ background: single.dColor }}
//             />
//             <div>
//               <h6 className="text-[20px] font-bold leading-[24px] text-[#EEEAF4]">
//                 {single.name}
//               </h6>
//               <p className="mt-[8px] text-[16px] leading-[22px] text-[#BEBBC9]">
//                 {single.tokens.toLocaleString().replace(/,/g, " ")}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TokenomicsPieChart;
