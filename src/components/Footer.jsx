import { useContext } from "react";
import { isDark } from "../App";
import Logo from "./Logo";

function Footer() {
    const mod = useContext(isDark)
  return (
    <footer className={`${mod ? "text-white" : "text-black"} w-full flex justify-between  `} >
      <div className="">
        <Logo />
        <p className="font-roboto font-bold text-[18px] w-[300px]" >Get out there & discover your next slope, mountain & destination!</p>
      </div>
      <div className="font-roboto font-medium text-[18px] flex gap-[200px]">
        <ul >
          <li className={`${mod ? "text-[#FBD784]" : "text-[#CD5C08]"} font-bold text-[24px] `} >More on The Blog</li>
          <li>About MNTN</li>
          <li>Contributors & Writers</li>
          <li>Write For Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
        <ul>
          <li  className={`${mod ? "text-[#FBD784]" : "text-[#CD5C08]"} font-bold text-[24px] `} >More on MNTN</li>
          <li>The Team</li>
          <li>Jobs</li>
          <li>Press</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
