import React from "react";
import Content from "./Content";
import Calculation from "./Calculation";

const InvestMain = () => {
  return (
    <>
      <section className="flex md:flex-row flex-col md:justify-center md:items-center gap-1 mx-auto">

        {/* LEFT SIDE */}
        <Content />


        {/* RIGHT SIDE */}
        <Calculation />

      </section>

    </>
  );
};

export default InvestMain;