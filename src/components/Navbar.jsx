import React from "react";
import { Button } from "antd";

export default function Navbar() {

    return (
        <div className="w-full h-[80px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-row items-center justify-start gap-4">

            <div className=" text-center text-[50px] w-[70px] flex items-center justify-center lg:hidden" >
                <button className=" menu-btn w-full">⚙︎</button>
            </div>
            

            <div className=" p-2 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg duration-500 sm:ml-4 ">
                <p className="bg-gradient-to-r from-sky-800 to-violet-700 bg-clip-text text-transparent text-3xl font-extrabold cursor-pointer">AUTOKIT.RO</p>
            </div>

            <Button type="primary" className="bg-blue-700 ml-auto mr-2 font-semibold" size={"large"}>
                SELL CAR
            </Button>
        </div>
    )

}