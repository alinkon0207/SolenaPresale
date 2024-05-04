import React, { useState, useEffect } from "react";
// LOGO
import Logo from "../../../assets/svgs/nav_logo.svg";
import Solana from "../../../assets/svgs/solana.svg";
import USDT from "../../../assets/svgs/usdt.svg";
import USDC from "../../../assets/svgs/usdc.svg";
import ButtonBg from "../../common/ButtonBg";
// SLIDER
import Slider from "@mui/material/Slider";
// ICONS
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";

// MUI
import LinearProgress from '@mui/material/LinearProgress';
import "./GlobalCssSlider.css";
import "./GlobalCssProgressBar.css";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" style={{ color: "#4AB3D0" }}>{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const marks = [
  {
    value: 0,
    label: "$0",
  },
  {
    value: 500,
    label: "$500",
  },
  {
    value: 1500,
    label: "$1500",
  },
  {
    value: 2500,
    label: "$2500",
  },
  {
    value: 3500,
    label: "$3500",
  },
  {
    value: 5000,
    label: "$5000",
  },
];

const btnData = [
  {
    title: "sol",
    icon: Solana,
    amount: 6390.40
  },
  {
    title: "usdt",
    icon: USDT,
    amount: 3142.11
  },
  {
    title: "usdc",
    icon: USDC,
    amount: 2987.90
  },
];
const Calculation = () => {
  const [active, setActive] = useState("usdt");
  const [progress, setProgress] = React.useState(67);
  const [solana, setSolana] = useState(676898);
  const [dollar, setDollar] = useState(150);
  function valuetext(value) {
    return `$${value}`;
  }

  const handleSolanaChange = (value) => {
    const solanaRate = 4512.655;
    setDollar(value);
    setSolana(parseFloat(value) * solanaRate);
  };

  const IncDecDollar = (type) => {
    const value = document.getElementById("dollar").value;
    const newValue =
      type === "plus" ? parseInt(value) + 10 : parseInt(value) - 10;
    const newDollar = newValue >= 0 ? newValue : 0;
    setDollar(newDollar);
  };

  const handleSlider = (e) => {
    const { value } = e.target;
    setDollar(value);
  };

  useEffect(() => {
    handleSolanaChange(dollar);
  }, [dollar]);

  return (
    <>
      <div className=" flex flex-col gap-10 md:my-10 md:px-0 px-5">
        {/* first one */}

        <div className=" flex justify-between items-center gap-10 ">
          <div className=" flex flex-col gap-2">
            <h3 className=" text-2xl md:text-4xl font-light text-[#ECFDFF]">
              $51,656,963
            </h3>
            <span className=" text-sm font-medium text-[#7979AC]">
              Total Sales
            </span>
          </div>

          <div className="flex justify-start items-start gap-3 ">
            <img
              className=" md:mt-2 mt-1 "
              src={Logo}
              alt=""
              width={30}
              height={30}
            />
            <div className=" flex flex-col justify-between gap-2 ">
              <h3 className=" text-2xl md:text-4xl font-light text-[#ECFDFF]">
                22,981
              </h3>
              <span className="text-sm font-medium text-[#7979AC] ">
                Total Tokens Sold
              </span>
            </div>
          </div>
        </div>

        {/* BAR ADDED */}

        <div className=" flex md:gap-5 gap-3">
          <div className="">
            <h3 className=" text-[15px] font-normal text-[#7979AC]">Sales Progress..</h3>
          </div>
          <div className=" md:w-[70%] w-[60%] ">
            <LinearProgressWithLabel value={progress} />
          </div>
        </div>


        {/* second */}

        <div>
          <h3 className=" text-base md:text-lg font-medium tracking-[2%] text-[#ECFDFF]">
            Stage 1 | 0.00000000700 USD = 1 Solena
          </h3>
        </div>

        {/* btns */}

        <div className=" flex items-center gap-3">
          {btnData.map((btn, i) => {
            return (
              <button
                key={i}
                className={`flex items-center gap-2 rounded-[20px] bg-[#15152B] px-4  md:px-8 py-3 border-2 border-solid  hover:bg-[#1C3C633D] hover:border-[#47C4C3] transition-colors duration-300 ease-in-out ${active === btn.title
                  ? "border-[#47C4C3] bg-[#1C3C633D]"
                  : "border-transparent"
                  }`}
                onClick={() => {
                  setActive(btn.title);
                }}
              >
                <img src={btn.icon} alt="" />
                <h3 className=" text-base md:text-xl font-medium text-[#ECFDFF] uppercase">
                  {btn.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* slider */}
        <div className=" w-[95%] md:w-full">
          <Slider
            aria-label="Restricted values"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={null}
            valueLabelDisplay="off"
            onChange={handleSlider}
            marks={marks}
            max={5000}
          />
        </div>

        {/* calculation */}

        <div className=" flex flex-col justify-center gap-5">
          <div className=" flex md:flex-row flex-col gap-6 w-full">
            <div className=" flex items-center justify-between w-full md:w-[60%] bg-[#15152B] px-5 py-5 rounded-[20px]">
              <FaMinus
                className=" text-[#7979AC] cursor-pointer"
                onClick={() => {
                  IncDecDollar("minus");
                }}
              />
              <div className=" flex justify-center items-center md:pl-0 pl-8">
                <FaDollarSign className=" text-[#ECFDFF]" />
                <input
                  id="dollar"
                  type="number"
                  className="  md:text-center w-[80px] text-[#ECFDFF] bg-transparent border-none outline-none focus:outline-none"
                  value={dollar}
                  name="dollar"
                  onChange={(e) => {
                    handleSolanaChange(e.target.value);
                  }}
                />
              </div>
              <FaPlus
                className=" text-[#7979AC] cursor-pointer"
                onClick={() => {
                  IncDecDollar("plus");
                }}
              />
            </div>

            <span className="text-[#7979AC] md:hidden flex items-center text-xs md:font-medium font-normal justify-center">
              Amount of &nbsp;
              {btnData.map((btn, i) => {
                if (active === btn.title) {
                  return (
                    <React.Fragment key={i}>
                      <img src={btn.icon} alt="" width={15} height={15} />
                      &nbsp;{btn.title.toUpperCase()} - {btn.amount}
                    </React.Fragment>
                  );
                }
                return null;
              })}
            </span>

            <div className=" flex items-center justify-between w-full md:w-[60%] bg-[#15152B] px-5 py-5 rounded-[20px]">
              <FaMinus className=" text-[#7979AC] cursor-pointer" />
              <div className=" flex gap-1 justify-center items-center">
                <img src={Logo} alt="" width={20} height={20} />
                <span
                  type="number"
                  className="  text-center text-[#ECFDFF] bg-transparent border-none outline-none focus:outline-none"
                >
                  {solana.toLocaleString()}
                </span>
              </div>
              <FaPlus className=" text-[#7979AC] cursor-pointer" />
            </div>
          </div>

          {/* <span className='text-[#7979AC] hidden md:flex items-center text-xs font-medium'>Amount of &nbsp;<img src={USDT} alt="" width={15} height={15} /> &nbsp;USDT - 3142.11</span> */}

          <span className="text-[#7979AC] hidden md:flex items-center text-xs font-medium">
            Amount of&nbsp;
            {btnData.map((btn, i) => {
              if (active === btn.title) {
                return (
                  <React.Fragment key={i}>
                    <img src={btn.icon} alt="" width={15} height={15} />
                    &nbsp;{btn.title.toUpperCase()} - {btn.amount}
                  </React.Fragment>
                );
              }
              return null;
            })}
          </span>
        </div>

        <ButtonBg text={"Buy Tokens"} />
      </div>
    </>
  );
};

export default Calculation;
