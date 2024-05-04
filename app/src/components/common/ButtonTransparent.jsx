import React from 'react'

const ButtonTransparent = ({ text,onClick }) => {
  return (
    <button onClick={onClick} className=" btn-border font-semibold text-sm text-center px-10 py-[13px] text-[#ECFDFF]  rounded-[25px] md:w-[180px] w-full h-14 bg-[#1c2340]">{text}</button>
  )
}

export default ButtonTransparent