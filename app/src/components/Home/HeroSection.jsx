import React from "react";
import ButtonTransparent from "../common/ButtonTransparent";
import ButtonBg from "../common/ButtonBg";
import herosection from "../../assets/svgs/hero_section_bg.svg";
import shade from "../../assets/images/nav_bg.png"

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 mx-auto md:mt-20 md:my-0 my-3">
        <div>
          {/* bg image */}
          <img src={shade} width={550} style={{ position: 'absolute', transform: 'translateY(-205px)', left: 0 }} />
          <img
            src={herosection}
            // width={280}
            // height={300}
            className=" md:w-[400px] w-[260px]"
            style={{
              position: "absolute",
              top: "80px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
        <div className=" flex flex-col justify-center items-center gap-5">
          <h1 className=" hidden md:flex flex-col justify-center items-center text-7xl font-extralight text-[#ECFDFF] leading-[80px]">
            <span>Join Future Of Solena</span>
            <span className=" flex justify-center items-center text-center">
              Queen Of{" "}<span className=" heading font-extrabold">&nbsp;Solana</span>
            </span>
          </h1>

          <h1 className=" md:hidden flex flex-col justify-center items-center gap-1 text-[38px] font-normal text-[#ECFDFF]">
            <span className=" text-[45px]">Join Future</span>
            <span className=" text-[45px]">Of Solena</span>
            <span>Queen Of{" "}<span className=" heading font-extrabold">&nbsp;Solana</span></span>
          </h1>

          {/* <p className="text-[#7979AC] text-center leading-[0px] md:text-base text-xs">
            Solena Ai is giving away 1.3B $Solena tokens for every registered
          </p> */}
        </div>

        {/* btn */}
        <div className=" flex md:flex-row flex-col gap-4 justify-center">
          <ButtonBg text={"Launch App"} />
          <ButtonTransparent text={"Read Docs"} />
        </div>

        {/* card */}
        <div className=" flex md:flex-row flex-col md:justify-between justify-center items-center gap-2 md:gap-16 border-2 border-[#4FA5DC] md:px-16 md:py-5 hero-section">
          <div className=" flex flex-col gap-2 justify-center items-center md:px-0 md:py-0 px-16 py-5">
            <p className=" text-[#7979AC] text-sm font-medium">
              {" "}
              Total Value Locked
            </p>
            <h1 className=" text-[#ECFDFF] text-xl font-medium">
              $839,131,676
            </h1>
          </div>

          <div className="vertical-line hidden md:block"></div>
          <hr className=" md:hidden block w-64" />

          <div className=" flex flex-col gap-2 justify-center items-center md:px-0 md:py-0 px-16 py-5">
            <p className=" text-[#7979AC] text-sm font-medium">
              Total Trading Volume
            </p>
            <h1 className=" text-[#ECFDFF] text-xl font-medium">
              $100,379,131,343
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
