import React from "react";

function Footer() {
  return (
    <footer className="bg-[#353448] overflow-x-hidden relative px-5 flex flex-col gap-5 text-white/80 text-center items-center">
      <div className="pt-8 lg:pt-24 pb-[10rem] flex flex-col gap-3 lg:gap-7">
        <h1 className="text-[18px] lg:text-[24px] font-semibold">
          Subscribe to get notified about update
        </h1>
        <p className="text-[13px] font-semibold">
          By subscribing with your mail, you will accept our privacy policy
        </p>
        <div className="flex w-full mt-4 gap-2">
          <input
            type="text"
            className="flex-1 bg-[#1313143e] border placeholder:font-sans placeholder:opacity-55 border-yellow-100/20 font-sans px-3 py-2 rounded-[5px] outline-yellow-400/50 shadow-md"
            placeholder="Enter your email"
          />
          <button className="bg-[#FFC059] rounded-[5px] text-[18px] text-black font-medium px-3 py-2">
            Get Started
          </button>
        </div>
      </div>
      <div className="absolute bg-[#2B293E] w-[100vw] flex justify-center items-center py-5 bottom-0 left-0">
        <div className="w-full lg:w-[70vw] px-5 lg:px-0 flex justify-between items-center">
          <h1 className="flex flex-col lg:flex-row gap-2 justify-center items-center">
            StartupBranding{" "}
            <span className="text-opacity-30 text-[8px]">
              Copyright by 2019 YourName, Inc
            </span>
          </h1>
          <ul className=" text-sm font-light grid grid-cols-2 gap-x-2 lg:flex justify-between items-center lg:gap-x-5">
            <li>Home</li>
            <li>Advertise</li>
            <li>Supports</li>
            <li>About</li>
            <li>Marketing</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
