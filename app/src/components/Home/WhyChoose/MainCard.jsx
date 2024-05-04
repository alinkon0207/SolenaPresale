import React, { useState } from "react";

const MainCard = ({ title, icon, description, shortdesc, position }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    console.log("mouse enter")
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log("mouse leave")
    setIsHovered(false);
  };
  console.log(icon)
  return (
    <>
      <div
        className={`w-[265px] ${position === "change" && `md:relative md:top-[-100px]`
          } mx-auto md:py-4 py-2 relative z-[1] cursor-pointer border-2 border-[#ECFDFF08] main-card group`}
          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        {/* icon */}
        <div className={`absolute z-[2] md:-top-7 -top-6 left-[105px]  border border-[#ECFDFF08] rounded-[35%] px-2 py-4 transition-colors duration-300 ease-in-out group-hover:bg-[#539EE1] bg-[#2a2b4e]`} >

          {
            console.log("ho",isHovered )
          }

          {
            isHovered ?
              <img src={icon.hover} alt="" className={`w-[35px] h-5`} /> :
              <img src={icon.normal} alt="" className={`w-[35px] h-5`} />
          }
        </div>
        {/* innner  content*/}
        <div className=" h-full flex flex-col justify-center md:gap-4 gap-[6px] text-left md:px-6 px-5 py-8">
          <h4 className="text-2xl font-normal text-[#ECFDFF]">{title}</h4>
          <p className=" font-medium text-sm text-[#7979AC] w-full">
            {description}
          </p>
          <span className=" text-sm font-semibold card-text">{shortdesc}</span>
        </div>
      </div>
    </>
  );
};

export default MainCard;
