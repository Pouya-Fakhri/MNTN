import { useContext } from "react";
import { isDark } from "../App";
import Navbar from "./Navbar";

function Header({handeler}) {
  const mod = useContext(isDark)
  return (
    <header className=" bg-[url(./images/HeaderBg.png)] bg-cover w-screen h-[150vh] pt-[64px] px-[80px] flex flex-col items-center gap-[100px] ">
      <Navbar handeler={handeler} />
      <div className="hero   flex flex-col items-center">
        <div className={`${mod ? "text-[#FBD784]" : "text-[#CD5C08]"} title font-roboto font-extrabold text-[18px] ml-32 flex items-center gap-[32px] self-start`}>
          <span className={`${mod ? "bg-[#FBD784]" : "bg-[#CD5C08]"} inline-block h-[2px] w-[72px] `}></span>A Hiking guide</div>
        <h1 className="font-lora w-[80%]  font-semibold text-[88px] text-white capitalize leading-[100px] ">
          Be prepared for the Mountains and beyond!
        </h1>
      </div>
      <div className={`${mod ? "dark-gradient" : "light-gradient"} relative  bottom-0 right-0  w-screen h-screen`} ></div>
    </header>
  );
}

export default Header;
