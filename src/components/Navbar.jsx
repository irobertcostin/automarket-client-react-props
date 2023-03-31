import React from "react";
import { Button } from "antd";
import Home from "./Home";
import App,{ADD_PAGE} from "../App";


export default function Navbar({setPage}) {

    

    let set=()=>{
        setPage(ADD_PAGE)
    }


    return (
        <div className="w-full h-[60px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-row items-center justify-start gap-4 lg:h-[80px]">


            <div className=" ml-4 p-2 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg duration-500 sm:ml-4 ">
                <a href="" className="bg-gradient-to-r from-sky-800 to-violet-700 bg-clip-text text-transparent text-[20px] font-extrabold cursor-pointer">AUTOKIT.RO</a>
            </div>

            <Button onClick={set
            } type="primary" className="bg-blue-600 ml-auto mr-2 font-semibold text-[12px]" size={"medium"} >
                SELL CAR
            </Button>
        </div>
    )

}