import React from "react";
import Logo from '../../assets/svgs/nav_logo.svg'
import ButtonTransparent from "./ButtonTransparent";

const Navbar = () => {
    return (
        <>
            <div className=" flex items-center md:justify-between justify-center px-10 py-5 md:my-0 my-10">
                <div className=" z-50">
                    <img src={Logo} alt="" width={50} height={50} />

                </div>

                <div className=" hidden md:block">
                    <ButtonTransparent text={"Launch App"} />
                </div>
            </div>
        </>
    )
};

export default Navbar