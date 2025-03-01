import React from "react";
import helpImg from "../assets/help.svg";
import { ArrowRight } from "lucide-react";

function HelpSection() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-24 mx-auto">
        <div className="m-3 max-w-[750px] lg:w-[500px] grid grid-flow-col gap-5 shadow rounded-[5px] p-8">
          <img src={helpImg} className="w-[50px] lg:w-[70px]" />
          <div className="ml-2 flex flex-col gap-2">
            <h1 className="flex justify-between text-[18px] lg:text-[20px] font-normal">
              Do you need any Help?
              <span>
                <ArrowRight />
              </span>
            </h1>
            <p className="text-[14px] font-normal leading-normal lg:leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              qui. Commodi dolore itaque ratione perspiciatis, aspernatur
              accusantium neque, voluptatem rerum
            </p>
          </div>
        </div>
        <div className="m-3 max-w-[750px] lg:w-[500px] grid grid-flow-col gap-5 bg-[#F6F8FB] rounded-[5px] p-8">
          <img src={helpImg} className="w-[50px] lg:w-[70px]" />
          <div className="ml-2 flex flex-col gap-2">
            <h1 className="flex justify-between text-[18px] lg:text-[20px] font-normal">
              Do you need any Help?
              <span>
                <ArrowRight />
              </span>
            </h1>
            <p className="text-[14px] font-normal leading-normal lg:leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              qui. Commodi dolore itaque ratione perspiciatis, aspernatur
              accusantium neque, voluptatem rerum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpSection;
