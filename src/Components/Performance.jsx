import {
  BriefcaseBusiness,
  ChartPie,
  CircleDollarSign,
  LucideChartNoAxesColumnDecreasing,
  SettingsIcon,
} from "lucide-react";
import React, { useState } from "react";
import performanceImage from "../assets/performance.svg";

function Performance() {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      symbol: <CircleDollarSign />,
      title: "Budget Overview",
    },
    {
      symbol: <SettingsIcon />,
      title: "create & adjust",
    },
    {
      symbol: <ChartPie />,
      title: "View reports",
    },
    {
      symbol: <BriefcaseBusiness />,
      title: "Optimize Website",
    },
    {
      symbol: <LucideChartNoAxesColumnDecreasing />,
      title: "Custom Dashboard",
    },
  ];

  return (
    <div className="bg-[#353448]">
      <div className=" flex flex-col gap-3 px-2 lg:px-0 lg:pl-60 pt-20">
        <div className="lg:w-[70vw] justify-between lg:justify-start text-white flex items-center lg:gap-18">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="flex relative flex-col w-1/5 justify-center gap-2"
            >
              <div
                className={`${activeTab === index && "text-yellow-400"}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.symbol}
              </div>
              <span
                className={`absolute -bottom-4 w-[70%] h-1 ${
                  activeTab === index && "bg-yellow-400"
                }`}
              ></span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-18">
          <span className={`w-[100vw] h-1 bg-slate-600`}></span>
        </div>
        <div className="lg:w-[70vw] text-xs text-white flex items-center lg:gap-18">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="flex flex-col w-1/5 justify-center gap-2"
            >
              <div className={`${activeTab === index && "text-yellow-400"}`}>
                {tab.title}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-8 mt-20 justify-start items-start text-white">
          <div className="flex flex-col gap-10">
            <p className="text-[36px] font-bold">
              Introduce quality feature that boost your website rank &
              performance
            </p>
            <p className="text-[16px] font-light leading-loose">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              repudiandae quae quam suscipit iste atque in sapiente quas nisi
              id!
            </p>
            <button className="bg-[#FFC059] text-white w-fit py-2 px-4 rounded-[5px]">
              More Info
            </button>
          </div>
          <div className="]">
            <img src={performanceImage} className="min-w-[50vw]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
