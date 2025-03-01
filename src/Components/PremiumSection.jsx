import React from "react";
import img from "../assets/premiumphoto.svg";
import { ArrowRight } from "lucide-react";

function PremiumSection() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="lg:w-[1250px] text-center lg:text-left flex flex-col lg:flex-row gap-5 lg:py-14 lg:-ml-24">
        <div className="flex justify-center items-center">
          <img src={img} className="md:max-w-[750px]" />
        </div>
        <div className="p-4 lg:p-0 flex flex-col gap-4 md:gap-5">
          <h1 className="text-[28px] md:text-[32px] font-bold">
            Meet Our premium Features that will make you wow 😲
          </h1>
          <p className="text-[15px] md:text-[16px] md:mx-16 lg:mx-0 font-normal md:leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            enim.dolores dignissimos minus quo quis, quisquam nesciunt veniam
            non
          </p>
          <div className="flex flex-col gap-5">
            <div className="bg-white p-4 md:p-5 rounded-[5px] flex text-left flex-col gap-2 shadow">
              <p className="font-normal text-[15px] md:text-[16px]">
                Organize your project content
              </p>
              <p className="font-light text-[13px] md:text-[14px] leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam dolores dignissimos minus quo quis, quisquam nesciunt
                veniam non temporibus id soluta dolorum? Cumque, nobis
                similique?
              </p>
            </div>
            <p className="bg-slate-200 rounded-[5px] flex justify-between text-[14px] lg:text-[16px] p-3 lg:p-5">
              colloborate your multiple team support easily{" "}
              <ArrowRight className="w-[20px] lg:w-[24px]" />
            </p>
            <p className="bg-slate-200 rounded-[5px] flex justify-between text-[14px] lg:text-[16px] p-3 lg:p-5">
              colloborate your multiple team support easily{" "}
              <ArrowRight className="w-[20px] lg:w-[24px]" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumSection;
