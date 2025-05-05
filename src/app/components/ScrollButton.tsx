import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface ScrollButtonProps{
    handleScroll: ()=> void
}

export default function ScrollButton({handleScroll}: ScrollButtonProps){


    return(
        <button className="hover:scale-105 transition-all duration-150 cursor-pointer w-[50px] h-[50px] rounded-full fixed bottom-10 right-10 tertiary-color-bg flex justify-center items-center z-10 shadow-[#D5C7AA] shadow" onClick={handleScroll}><IoIosArrowDown className="text-2xl"/></button>
    )
}