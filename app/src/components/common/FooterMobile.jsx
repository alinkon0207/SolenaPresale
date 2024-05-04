import React from "react";
import Logo from "../../assets/svgs/nav_logo.svg";
import telegram from "../../assets/svgs/telegram2.svg";
import twitter from "../../assets/svgs/twitter2.svg";
import discord from "../../assets/svgs/discord.svg";
import spiderweb from "../../assets/svgs/spider_web2.svg";

const FooterMobile = () => {
  return (
    <>
      <nav className=" px-5 py- cursor-pointer mt-20 md:hidden block">
        <img
          src={spiderweb}
          alt=""
          height={200}
          width={250}
          className=" absolute md:right-[10%] right-0 transform md:-translate-y-[75%] -translate-y-[100%] -z-50"
        />

        <div className="flex flex-row justify-between">
          <div className="flex flex-col font-medium md:text-sm text-xs text-[#7979AC] gap-4">
            <NavItem link="#" text="Whitepaper" />
            <NavItem link="#" text="KYC" />
            <NavItem link="#" text="Audit" />
          </div>

          <div className="flex flex-col font-medium md:text-sm text-xs text-[#7979AC] gap-4">
            <NavItem link="#" text="Solena Swap" />
            <NavItem link="#" text="Staking" />
            <NavItem link="#" text="Farming" />
          </div>
          <div className="flex flex-col font-medium md:text-sm text-xs text-[#7979AC] gap-4">
            <NavItem link="#" text="FAQ" />
            <NavItem link="#" text="Terms & Conditions" />
            <NavItem link="#" text="Privacy Policy" />
          </div>
        </div>

        <div>
          <div className="flex flex-row justify-between py-10 gap-5">

            <div className="flex flex-row gap-3 ">
              <img src={Logo} alt="Logo" width={50} height={50} />
              <p className="text-[#7979AC] font-medium text-xs mt-4">
                Copyright © 2024
              </p>
            </div>

            <div className="flex flex-row font-medium text-xs text-[#7979AC] ">
              <SocialLink icon={twitter} />
              <SocialLink icon={telegram} />
              <SocialLink icon={discord} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavItem = ({ link, text }) => (
  <a
    href={link}
    className="hover:text-[#ECFDFF] transition-colors duration-300 ease-in-out"
  >
    {text}
  </a>
);

const SocialLink = ({ icon }) => (
  <div className="flex flex-row gap-4">
    <img src={icon} alt="" className="w-[16px]" />
    <NavItem link="#" />
  </div>
);

export default FooterMobile;
