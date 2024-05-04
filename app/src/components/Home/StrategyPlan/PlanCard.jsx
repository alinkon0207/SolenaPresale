import React from "react";

const PlanCard = ({ title, description, icon }) => {
  return (
    <>
      <div className=" flex md:flex-row flex-col items-center gap-2 md:mx-0 mx-6 w-[350px] cursor-pointer border-2 border-[#ECFDFF08] main-card rounded-[20px] py-5 px-4">
        {/* img */}
        <div className="flex justify-center w-60">
        <img src={icon} alt="" width={100} height={100}  />
        </div>

        {/* content */}
        <div className=" flex flex-col gap-3">
        <h4 className="text-xl font-normal text-[#ECFDFF]">{title}</h4>
        <p className=" font-medium text-sm text-[#7979AC]">
            {description}
          </p>

        </div>
      </div>
    </>
  );
};

export default PlanCard;
