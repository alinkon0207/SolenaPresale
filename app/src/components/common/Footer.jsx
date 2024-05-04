import React from "react";
import Logo from "../../assets/svgs/nav_logo.svg";
import telegram from "../../assets/svgs/telegram2.svg";
import twitter from "../../assets/svgs/twitter2.svg";
import discord from "../../assets/svgs/discord.svg";
import solana from "../../assets/svgs/Solana_light.svg";
import spiderweb from "../../assets/svgs/spider_web2.svg";

const Footer = () => {
  return (
    <>
      <nav className="md:flex flex-row justify-between px-14 py-28 cursor-pointer mt-5 hidden">
        <img
          src={spiderweb}
          alt=""
          height={200}
          width={250}
          className=" absolute md:right-[10%] right-0 transform md:-translate-y-[100%] -translate-y-[100%] -z-50"
        />
        <div className="flex flex-col items-center justify-around">
          <img
            src={solana}
            alt=""
            width={250}
            height={100}
            style={{ position: "absolute", transform: "translateY(-50px) translateY(-50px)" }}
          />
          <img src={Logo} alt="Logo" width={50} height={50} />
          <p className="text-[#7979AC] font-medium text-sm">Copyright © 2024</p>
        </div>

        <div className="flex flex-col font-medium text-sm text-[#7979AC] gap-10">
          <NavItem link="#" text="Audits" />
          <NavItem link="#" text="Whitepaper" />
          <NavItem link="#" text="KYC" />
          <NavItem link="#" text="Audit" />
        </div>

        <div className="flex flex-col font-medium text-sm text-[#7979AC] gap-10">
          <NavItem link="#" text="Solena Web3" />
          <NavItem link="#" text="Solena Swap" />
          <NavItem link="#" text="Staking" />
          <NavItem link="#" text="Farming" />
        </div>
        <div className="flex flex-col font-medium text-sm text-[#7979AC] gap-10">
          <NavItem link="#" text="Support" />
          <NavItem link="#" text="FAQ" />
          <NavItem link="#" text="Terms & Conditions" />
          <NavItem link="#" text="Privacy Policy" />
        </div>


        <div className="flex flex-col font-medium text-sm text-[#7979AC] gap-10">
          <p>Follow us on</p>
          <SocialLink icon={twitter} text="Twitter" />
          <SocialLink icon={telegram} text="Telegram" />
          <SocialLink icon={discord} text="Discord" />
        </div>
      </nav>
    </>
  );
};

const NavItem = ({ link, text }) => (
  <a href={link} className="hover:text-[#ECFDFF] transition-colors duration-300 ease-in-out">
    {text}
  </a>
);

const SocialLink = ({ icon, text }) => (
  <div className="flex flex-row gap-4">
    <img src={icon} alt={text} className="w-[16px]" />
    <NavItem link="#" text={text} />
  </div>
);

export default Footer;
