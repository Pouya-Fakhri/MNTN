import { useContext } from "react";
import { isDark } from "../App";

function Content({ title, head, body, image }) {
    const mod = useContext(isDark)
    
    
  return (
    <div className={`   ${mod ? "text-white" : "text-black"} flex justify-between items-center w-full h-[720px] relative z-10`}>
      <div className="textContent flex flex-col">
        <div className={`${mod ? "text-[#FBD784]" : "text-[#CD5C08]"} title font-roboto font-extrabold text-[18px]  flex items-center gap-[32px] self-start`}>
          <span className={`${mod ? "bg-[#FBD784]" : "bg-[#CD5C08]"} inline-block h-[2px] w-[72px] `}></span>
          {title}
        </div>
        <h2 className="font-lora w-[80%]  font-semibold text-[64px] capitalize leading-[100px] ">
          {head}
        </h2>
        <p className="font-bold font-roboto text-[18px] ">{body}</p>
      </div>
      <div className="imageContainer self-start flex h-3">
        <img src={image} alt="" className="h-[720px] w-[566px] " />
      </div>
    </div>
  );
}

export default Content;
