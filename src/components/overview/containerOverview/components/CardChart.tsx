"use client";
import { PieChart } from "@mui/x-charts/PieChart";
import React from "react";

const CardChart = () => {
  const data = [
    { name: "Male", value: 45, color: "#FFA900", bg: "orange_FFA900" },
    { name: "Female", value: 30, color: "#796EFF", bg: "purple_796EFF" },
    { name: "Child", value: 25, color: "#23A9F9", bg: "blue_23A9F9" },
  ];

  return (
    <div className="py-9 px-[26px] flex flex-col items-center justify-center rounded-[10px] bg-white dark:bg-black_282A36 w-full">
      <div className="flex items-center justify-center w-full">
        <PieChart

          height={118}
          width={118}
          series={[
            {
              data: data.map((item) => ({
                ...item,
                fill: item.color,
                //label: item.name,
              })),
              innerRadius: 30,
              outerRadius: 50,
              paddingAngle: 0,
              cornerRadius: 0,
              startAngle: -180,
              endAngle: 180,
              cx: "400%",
              cy: "50%",
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
        />
      </div>
      <div className="flex items-center justify-between w-full">
        {data.map((item, index) => (
          <div key={index} className="p-3 flex flex-col">
            <div className="flex items-center justify-center gap-2">
              <div
                className="w-2 h-2 rounded-[50%]"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-[14px] font-normal text-black_1B2432 dark:text-white">
                {item.name}
              </span>
            </div>
            <span className="text-xs text-black_8D9198 dark:text-gray_CCCCCC self-end font-medium">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardChart;
