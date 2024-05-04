import React, { useRef, useState, useEffect } from "react";
import PlanCard from "./PlanCard";
import Globe from "../../../assets/svgs/Globe.svg";
import Liquidity from "../../../assets/svgs/Liquidityy.svg";
import Gear from "../../../assets/svgs/Gear.svg";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// REACT ICONS
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    title: "Order Book AMM",
    description:
      "Immerse yourself in the future of finance with Solena - the token that bridges the gap",
    icon: Gear,
  },
  {
    id: 2,
    title: "Best Price Swaps",
    description:
      "Вetermines the best swap route among all pools in order to provide the best ",
    icon: Globe,
  },
  {
    id: 3,
    title: "Liquidity",
    description:
      "Immerse yourself in the future of finance with Solena - the token that bridges the gap",
    icon: Liquidity,
  },
  {
    id: 4,
    title: "Liquidity2",
    description:
      "Immerse yourself in the future of finance with Solena - the token that bridges the gap",
    icon: Liquidity,
  },
  {
    id: 5,
    title: "Liquidity3",
    description:
      "Immerse yourself in the future of finance with Solena - the token that bridges the gap",
    icon: Liquidity,
  },
];

const StrategyPlan = () => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <section className="w-[95%] flex flex-col justify-center items-center gap-10 mt-1 mx-auto relative -top-20">
        {/* Heading */}
        <div className=" flex flex-col gap-5 justify-center items-center">
          <hr
            className=" w-10 ml-[6px]"
            style={{
              height: "3px",
              borderWidth: 0,
              backgroundColor: "#3ED3B5",
              color: "transparent",
            }}
          />
          <h2 className="font-extrabold md:text-7xl text-6xl  heading pb-4">
            Strategy
          </h2>
          <h3 className=" font-light text-4xl text-[#ECFDFF]">
            & Project Plan
          </h3>
        </div>

        {/* cards section */}
        <div
          className=" md:w-full w-4/5 overflow-x-scroll flex justify-start items-center md:gap-8 mx-auto scrollbarHide scroll-smooth transition-all duration-200 ease-in-out"
          ref={scrollRef}
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="hidden md:block mr-24"></div>
          {cardData.map((item, i) => {
            return <PlanCard {...item} />;
          })}
        </div>
        <div className=" flex gap-5">
          <FaLongArrowAltLeft
            className=" text-2xl text-[#539EE1] cursor-pointer"
            onClick={() => scroll(downMd ? -310 : -400)}
          />
          <FaLongArrowAltRight
            className=" text-2xl text-[#539EE1] cursor-pointer"
            onClick={() => scroll(downMd ? 310 : 400)}
          />
        </div>
      </section>
    </>
  );
};

export default StrategyPlan;
