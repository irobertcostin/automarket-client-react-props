import React, { useEffect, useState } from "react";
import { Button } from "antd";
import Home from "./Home";
import App, { ADD_PAGE, HOME_PAGE } from "../App";





export default function Navbar({ setPage, page }) {



    let set = () => {

        setPage(ADD_PAGE)
    }


    useEffect(() => {




    }, [])




    return (
        <div className="w-full h-[8vh] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-gradient-to-r from-indigo-900 to-blue-800 ">


            <div className="h-full shadow-[inset_-8px_-8px_30px_#7c3aed] flex flex-row items-center justify-start gap-4 lg:h-[80px]">
                <div className=" ml-4 p-2 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg duration-500 sm:ml-4 ">
                    <a href="" className="text-white text-[20px] font-extrabold cursor-pointer">AUTOKIT.RO</a>
                </div>

                <Button onClick={set}
                    type="primary" className="bg-blue-600 ml-auto mr-2 font-semibold text-[12px] md:hover:scale-110 md:mr-4 lg:hover:scale-125 lg:mr-8" size={"medium"} >

                    SELL CAR
                </Button>
            </div>
        </div>

    )

}