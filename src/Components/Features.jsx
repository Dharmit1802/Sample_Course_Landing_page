import React from "react";
import img from "../assets/features.png";
import { ArrowRight } from "lucide-react";

function Features() {
  const features = [
    "Medical & Vision",
    "Life Insurance",
    "400(k) Savings",
    "HSAs & FSAs",
    "Commuter Benefits",
    "529 College Savings",
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="lg:w-[1250px] text-center lg:text-left flex flex-col lg:flex-row p-3 md:p-0 gap-5 pt-16 md:pt-20 lg:pt-14 mx-auto lg:pl-32 lg:pr-8">
        <div className="flex flex-col gap-6 md:gap-8">
          <h1 className="text-[28px] md:text-[32px] font-bold">
            Built in one app to make instant reply with in lowest minutes
          </h1>
          <p className="text-[15px] md:text-[16px] font-normal md:leading-loose">
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
          </p>
          <div className="grid grid-cols-2 grid-rows-3 mx-auto lg:mx-0 gap-x-20 lg:gap-x-0 gap-y-0 px-3 lg:px-0">
            {features.map((feature, index) => (
              <div key={index} className="py-3">
                <p className="font-normal flex gap-x-2 items-center text-[13px]">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z"
                        fill="#3FDBB1"
                      />
                    </svg>
                  </span>
                  {feature}
                </p>
              </div>
            ))}
          </div>
          <a className="flex w-fit gap-2 ml-4 md:ml-0 hover:underline cursor-pointer">
            Learn More <ArrowRight />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <img src={img} className="lg:min-w-[550px] lg:-mt-16" />
        </div>
      </div>
    </div>
  );
}

export default Features;
