import React from "react";
import { Button } from "antd";

export default function Navbar(){

    return(
        <div className="w-full h-[80px] border border-red-500 flex flex-row p-5 items-center gap-4">
                <div>FILTERBTN</div>
                <div>
                    <p>AUTOKIT.RO</p>
                </div>
                <Button className="bg-slate-700 text-white font-semibold ml-auto mr-1" type="text">+icon SELL NOW</Button>
        </div>
    )

}