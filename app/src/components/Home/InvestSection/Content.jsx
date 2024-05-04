import React, { useState, useEffect, useRef } from "react";
import ButtonTransparent from "../../common/ButtonTransparent";

// ICONS
import telegram from "../../../assets/svgs/telegram.svg";
import twitter from "../../../assets/svgs/twitter.svg";

const Content = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  function calculateTimeLeft() {
    const targetTime = new Date("May 21, 2024").getTime();
    const currentTime = new Date().getTime();
    const remainingTime = targetTime - currentTime;

    if (remainingTime <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = formatUnit(Math.floor(remainingTime / (1000 * 60 * 60 * 24)));
    const hours = formatUnit(
      Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const minutes = formatUnit(
      Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    );
    const seconds = formatUnit(
      Math.floor((remainingTime % (1000 * 60)) / 1000)
    );

    return { days, hours, minutes, seconds };
  }

  function formatUnit(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  const downloadLinkRef = useRef(null);

  const handleDownload = () => {
    const apkFileUrl = process.env.PUBLIC_URL + "/whitepaper.pdf";
    downloadLinkRef.current.href = apkFileUrl;
    downloadLinkRef.current.click();
  };

  return (
    <>
      <div className=" flex flex-col md:gap-8 gap-2 md:my-10 md:px-0 px-5">
        <hr
          className=" w-10 md:ml-[6px] ml-0"
          style={{
            height: "3px",
            borderWidth: 0,
            backgroundColor: "#3ED3B5",
            color: "transparent",
          }}
        />
        <h2 className="font-extrabold  text-5xl md:text-7xl heading">Invest</h2>
        <h3 className=" font-light text-3xl w-[50%] md:text-4xl text-[#ECFDFF]">
          smarter with Solena
        </h3>
        <p className=" font-medium md:text-sm text-[15px] text-[#7979AC] md:w-[55%] w-full">
          Immerse yourself in the future of finance with Solena - the token that
          bridges the gapImmerse
        </p>

        <div className=" flex flex-col md:py-2 py-3 md:gap-0 gap-2">
          <h3 className="text-2xl font-normal text-[#ECFDFF]">
            Pre-Sale Starts In
          </h3>

          {/* times */}
          <div className=" flex  justify-start items-center gap-4">
            <div className=" flex flex-col">
              <h3 className="font-bold text-4xl md:text-6xl text-[#5F78FF]">
                {timeLeft.days}
              </h3>
              <span className="md:text-sm text-[13px] font-medium text-[#7979AC] text-center">
                Days
              </span>
            </div>

            <span className=" text-[40px] font-light text-[#ECFDFF] -mt-5">
              :
            </span>

            <div className=" flex flex-col">
              <h3 className="font-bold text-4xl md:text-6xl text-[#5595E9]">
                {timeLeft.hours}
              </h3>
              <span className="md:text-sm text-[13px] font-medium text-[#7979AC] text-center">
                Hours
              </span>
            </div>

            <span className=" text-[40px] font-light text-[#ECFDFF] -mt-5">
              :
            </span>

            <div className=" flex flex-col">
              <h3 className="font-bold text-4xl md:text-6xl text-[#4AB3D0]">
                {timeLeft.minutes}
              </h3>
              <span className="md:text-sm text-[13px] font-medium text-[#7979AC] text-center">
                Min
              </span>
            </div>

            <span className=" text-[40px] font-light text-[#ECFDFF] -mt-5">
              :
            </span>

            <div className=" flex flex-col md:w-16 w-10">
              <h3 className="font-bold text-4xl md:text-6xl text-[#3FD2B7]">
                {timeLeft.seconds}
              </h3>
              <span className="md:text-sm text-[13px] font-medium text-[#7979AC] text-center">
                Sec
              </span>
            </div>
          </div>
        </div>
        {/* btns and icons */}

        <div className=" flex md:flex-row flex-col md:gap-8 gap-0 items-center mb-10">
          {/* btn */}
          <div className=" md:w-fit w-full">
            <a
              ref={downloadLinkRef}
              style={{ display: "none" }}
              download="whitepaper.pdf"
            ></a>
            <ButtonTransparent text={"Whitepaper"} onClick={handleDownload} />
          </div>
          {/* icons */}
          <div className=" flex gap-0  mt-6">
            <img src={twitter} />
            <img src={telegram} />
          </div>
        </div>

        {/* <Card /> */}
      </div>
    </>
  );
};

export default Content;
