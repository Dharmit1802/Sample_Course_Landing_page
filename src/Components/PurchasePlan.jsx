import { BadgeCheck, XCircleIcon } from "lucide-react";
import React, { useState } from "react";

function PurchasePlan() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="bg-[#F9FAFC] flex items-center justify-center pt-12 pb-32">
      <div className="mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[26px]">What deal suits you best?</h1>
          <h3 className="text-[14px] font-extralight">Meet our pricing plan</h3>
        </div>
        <div className="flex gap-5 mt-10 items-center">
          <span className="text-[13px]">Monthly Plan</span>
          <label className="relative inline-block w-11 h-6 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <div
              className={`absolute w-full h-full bg-white border-2 border-black rounded-full shadow-md transition-all duration-500 ${
                checked ? "bg-yellow-300" : ""
              }`}
            ></div>
            <div
              className={`absolute top-1/2 left-0 w-6 h-6 transform -translate-y-1/2 bg-yellow-300 border-2 border-black rounded-full transition-all duration-500 ${
                checked ? "left-1/2 bg-white" : ""
              }`}
            ></div>
          </label>
          <span className="text-[13px]">Yearly Plan</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 justify-center mt-7 items-center relative">
          <div className="flex flex-col justify-evenly w-[350px] h-fit py-10 px-8 gap-5 shadow-md rounded-md bg-white z-20">
            <div className="flex flex-col">
              <h1 className="text-[18px] font-semibold text-[#0F2137]">
                Startup Pack
              </h1>
              <h1 className="text-[22px] mt-1 font-semibold text-[#eaae4e]">
                $25.99/mo
              </h1>
              <p className="text-[12px] mt-3 w-[80%] text-[#343D48] font-light">
                For the startup team who work with new come data stack
              </p>
            </div>
            <div className="w-full h-0.5 bg-[#E0E2E4]"></div>
            <div className="text-[12px] text-[#343D48]/80 flex flex-col gap-3">
              <p className="flex items-center gap-2">
                <BadgeCheck size={20} fill="lightgreen" />
                Ultimate access to all courses, exercises, and assessments
              </p>
              <p className="flex items-center gap-2">
                <BadgeCheck size={20} fill="lightgreen" />
                Free access for all kinds of exercise corrections with
                downloads.
              </p>
              <p className="flex items-center gap-2">
                <BadgeCheck size={20} fill="lightgreen" />
                Total assessment corrections with free download access system
              </p>
              <p className="flex items-center gap-2 text-[#343d489c]/40">
                <XCircleIcon size={20} fill="lightgray" />
                Unlimited download of courses on the mobile app contents
              </p>
            </div>
            <div className="w-full h-0.5 bg-[#E0E2E4]"></div>
            <button className="bg-[#FFF0D7] w-fit text-[#E5A740] rounded-[5px] font-semibold px-4 py-2">
              Start free trial
            </button>
          </div>
          <div className="flex flex-col justify-evenly w-[350px] py-14 px-8 gap-5 shadow-md rounded-md bg-white z-10">
            <div className="flex flex-col">
              <h1 className="text-[18px] font-semibold text-[#0F2137]">
                Enterprise Pack
              </h1>
              <h1 className="text-[22px] mt-1 font-semibold text-[#eaae4e]">
                $45.99/mo
              </h1>
              <p className="text-[12px] mt-3 w-[80%] text-[#343D48] font-light">
                For the growing team who needs advanced features
              </p>
            </div>
            <div className="w-full h-0.5 bg-[#E0E2E4]"></div>
            <div className="text-[12px] text-[#343D48]/80 flex flex-col gap-3">
              <p className="flex items-center gap-2">
                <BadgeCheck size={20} fill="lightgreen" />
                Ultimate access to all courses, exercises, and assessments
              </p>
              <p className="flex items-center gap-2">
                <BadgeCheck size={20} fill="lightgreen" />
                Free access for all kinds of exercise corrections with
                downloads.
              </p>
              <p className="flex items-center gap-2">
                <BadgeCheck size={20} fill="lightgreen" />
                Total assessment corrections with free download access system
              </p>
              <p className="flex items-center gap-2">
                <BadgeCheck size={20} fill="lightgreen" />
                Unlimited download of courses on the mobile app contents
              </p>
            </div>
            <div className="w-full h-0.5 bg-[#E0E2E4]"></div>
            <button className="bg-[#FFC059] w-fit text-[#FFFFFF] rounded-[5px] font-semibold px-4 py-2">
              Start free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchasePlan;
