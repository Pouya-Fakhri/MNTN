import { useContext } from "react";
import { isDark } from "../App";
import Logo from "./Logo";

function Navbar({handeler}) {
  const mod = useContext(isDark)
  console.log(handeler);
  
  return (
    <nav className="w-full font-roboto font-bold text-white flex  justify-between" >
      <Logo />
      <ul className="text-white text-[18px] flex gap-[40px] items-center" >
        <li>Equipment</li>
        <li>About us</li>
        <li>Blog</li>
        <input type="checkbox" onChange={()=>handeler()} />
      </ul>
      <div className="account  text-[17px]">Account</div>
    </nav>
  );
}

export default Navbar;
