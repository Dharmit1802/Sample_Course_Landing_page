import React from "react";
import { ChevronDown } from "lucide-react";
import img from "../assets/hero.svg";

function Herosection() {
  return (
    <div className="bg-[#FFFCF7] h-[700px] lg:h-[880px] px-5 py-3 flex flex-col items-center">
      <div className="w-[80vw] h-[45px]">
        <nav className="flex h-full justify-between items-center p-5">
          <div className="flex justify-between items-center lg:gap-[180px]">
            <h1 className="text-xl font-semibold">StartUpLand</h1>
            <ul className=" hidden lg:flex justify-between items-center gap-5">
              <li>Home</li>
              <li className="flex items-center justify-center">
                Advertise <ChevronDown size={20} />{" "}
              </li>
              <li className="flex items-center justify-center">
                Supports <ChevronDown size={20} />
              </li>
              <li>About</li>
            </ul>
          </div>
          <div className="flex gap-5">
            <button>Log In</button>
            <button className="bg-[#FFF0D7] text-[#E5A740] rounded-[5px] font-bold px-3 py-2">
              Get Started
            </button>
          </div>
        </nav>
      </div>
      <div className="w-[80vw] flex flex-col gap-20 lg:grid lg:grid-cols-2  lg:gap-10 flex-1 justify-center items-center">
        {/* content */}
        <div className="flex flex-col gap-5 w-full mt-10 lg:mt-0 text-center lg:text-left lg:w-[90%]">
          <h1 className="lg:text-5xl text-3xl font-bold lg:leading-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <p className="leading-loose font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima
            veniam amet quasi repellendus quaerat. Eius doloremque accusantium
            hic delectus?
          </p>
          <div className="flex w-full gap-2">
            <input
              type="text"
              className="flex-1 border placeholder:font-sans placeholder:opacity-55 border-yellow-100/20 font-sans px-3 py-2 rounded-[5px] outline-yellow-400/50 shadow-md"
              placeholder="Enter your email"
            />
            <button className="bg-[#FFC059] rounded-[5px] text-[18px] text-[#FFFFFF] font-medium px-3 py-2">
              Get Started
            </button>
          </div>
        </div>
        {/* img */}
        <div>
          <img src={img} className="lg:w-full w-[50vw]"></img>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
