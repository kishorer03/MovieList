import { useState } from "react";
export default function Box({children}){
    const [show,setShow]=useState(false);
    return(
        <div className="w-[350px] min-h-[550px] bg-gray-700 rounded-md relative pb-[30px]">
        <button className="flex items-center justify-center bg-slate-400 h-[20px] w-[20px] rounded-full  absolute right-[10px] top-[10px]"
        onClick={()=>setShow(!show)}>
            {show?"+":"-"}
        </button>
        {show||children}
        
        </div>
    )
}