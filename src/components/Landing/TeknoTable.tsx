"use client";

export default function PricingTable() {
  const rows = [
    {
      pool: "Basic",
      cost: "$100",
      tokens: "8,333,333.3300",
      rate: "1.25/24H",
      earnings: "200 USDT",
      roi: "200%",
    },
    {
      pool: "Standard",
      cost: "$500",
      tokens: "41,666,666.6700",
      rate: "6.25/24H",
      earnings: "1 050 USDT",
      roi: "210%",
    },
    {
      pool: "Advanced",
      cost: "$1 000",
      tokens: "83,333,333.3300",
      rate: "12.50/24H",
      earnings: "2 200 USDT",
      roi: "220%",
    },
    {
      pool: "Pro",
      cost: "$3 000",
      tokens: "250,000,000.0000",
      rate: "37.50/24H",
      earnings: "6 900 USDT",
      roi: "230%",
    },
    {
      pool: "Elite",
      cost: "$5 000",
      tokens: "416,666,666.6700",
      rate: "62.50/24H",
      earnings: "12 000 USDT",
      roi: "240%",
    },
    {
      pool: "Supreme",
      cost: "$10 000",
      tokens: "833,333,333.3300",
      rate: "125.00/24H",
      earnings: "25 000 USDT",
      roi: "250%",
    },
  ];

  return (
    <div className="relative w-[95%] overflow-auto rounded-3xl xl:w-[85%] mx-auto my-8">
      <div className="w-full hidden lg:block absolute shadow-lg shadow-cyan-500/5 inset-shadow-white/20 inset-shadow-sm   min-h-10 backdrop-blur-[8px] h-full rounded-3xl  px-6 -z-10"></div>
      <table className="w-full border-separate border-spacing-0 text-white bg-[#352a5718] font-tight rounded-2xl overflow-hidden">
        <thead className="">
          <tr>
            <th className="px-6 py-4 text-[16px] font-normal text-[#BEBBC9]  text-left">
              Pool
            </th>
            <th className="px-6 py-4 text-[16px] font-normal text-[#BEBBC9]  text-left">
              Contract Cost
            </th>
            <th className="px-6 py-4 text-[16px] font-normal text-[#BEBBC9]  text-left">
              Tokens
            </th>
            <th className="px-6 py-4 text-[16px] font-normal text-[#BEBBC9]  text-left">
              Farming Rate
            </th>
            <th className="px-6 py-4 text-[16px] font-normal text-[#BEBBC9]  text-left">
              Total Earnings
            </th>
            <th className="px-6 py-4 text-[16px] font-normal text-[#BEBBC9]  text-left">
              ROI
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`${i % 2 === 0 ? "bg-[#EEEAF4]/10" : ""}`}>
              <td className="px-6 text-[20px] xl:text-[24px] text-[#EEEAF4] font-bold  py-4">
                {row.pool}
              </td>
              <td className="px-6 text-[20px] text-[#EEEAF4] py-4">
                {row.cost}
              </td>
              <td className="px-6 text-[20px] text-[#EEEAF4] py-4">
                {row.tokens}
              </td>
              <td className="px-6 text-[20px] text-[#EEEAF4] py-4">
                {row.rate}
              </td>
              <td className="px-6 text-[20px] text-[#EEEAF4] py-4">
                {row.earnings}
              </td>
              <td className="px-6 text-[20px] text-[#EEEAF4] py-4">
                {row.roi}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
