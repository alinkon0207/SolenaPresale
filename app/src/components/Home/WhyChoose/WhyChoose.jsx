import React from "react";
import MainCard from "./MainCard";
import SpiderWeb from "../../../assets/svgs/spider_web.svg";
import shade from "../../../assets/images/shade.png";

// REACT SLICK 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CARDS ICONS
import Shape1 from "../../../assets/svgs/shape1.svg";
import Shape2 from "../../../assets/svgs/shape2.svg";
import Shape3 from "../../../assets/svgs/shape3.svg";
import Shape4 from "../../../assets/svgs/shape4.svg";

// MUI
import { useTheme } from "@mui/material/styles";
import {
  useMediaQuery,
} from "@mui/material";
import Hover1 from "../../../assets/svgs/Hover-1.svg"
import Hover2 from "../../../assets/svgs/Hover-2.svg"
import Hover3 from "../../../assets/svgs/Hover-3.svg"
import Hover4 from "../../../assets/svgs/Hover-4.svg"

const cardData = [
  {
    position: "change",
    title: "Trade",
    description:
      "Immerse yourself in the future of finance with Solena - the token that bridges the gap",
    shortdesc: "Enter Exchange",
    icon: { normal: Shape1, hover: Hover1 },
  },
  {
    id: 1,
    title: "Yield",
    description:
      "Immerse yourself in the future of finance with Solena - the token that bridges the gap",
    shortdesc: "Enter Farms",
    icon: { normal: Shape2, hover: Hover2 }
  },
  {
    id: 2,
    title: "Pool",
    description:
      "Immerse yourself in the future of finance with Solena - the token that bridges the gap",
    shortdesc: "Add Liquidity",
    icon: { normal: Shape3, hover: Hover3 }
  },
  {
    position: "change",
    title: "AcceleRaytor",
    description:
      "Immerse yourself in the future of finance with Solena - the token that bridges the gap",
    shortdesc: "View Projects",
    icon: { normal: Shape4, hover: Hover4 }
  },
];

const WhyChoose = () => {
  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false
  };
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <section className="flex flex-col md:gap-20 gap-8 justify-center items-center mx-auto my-20">
        {/* Heading */}
        <div className=" flex flex-col md:gap-5 gap-3 justify-center items-center">
          <hr
            className=" w-10 ml-[6px]"
            style={{
              height: "3px",
              borderWidth: 0,
              backgroundColor: "#3ED3B5",
              color: "transparent",
            }}
          />
          <div>
            <img
              src={SpiderWeb}
              alt=""
              height={200}
              width={300}
              // style={{
              //   position: "absolute",
              //   right: "15%",
              //   transform: "translateY(-40%)",
              // }}
              className="absolute md:right-[15%] right-0 md:translate-x-0 translate-x-1 transform md:translate-y-[-50%] translate-y-[-25%] -z-50"
            />
          </div>
          <h2 className="font-extrabold md:text-7xl text-6xl heading pb-4">Why</h2>
          <h3 className=" font-light text-4xl text-[#ECFDFF]">choose Solena</h3>
        </div>

        {
          downMd ?
            (<Slider {...settings2} className="w-full h-[250px] mt-10 z-50">
              {cardData.map((item, i) => {
                return <div key={i}>

                  <div className="flex items-center h-[250px]" style={{ display: "flex !important" }}>
                    <MainCard  {...item} />

                  </div>
                </div>
              })}
            </Slider>) :
            (
              <div className=" flex gap-8">
                {cardData.map((item, i) => {
                  return <MainCard key={i} {...item} />;
                })}
              </div>
            )
        }

        <div>
          {" "}
          <img
            src={shade}
            width={600}
            className="hidden md:block absolute right-0  transform -translate-y-[80%] -z-50"
          />{" "}
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
