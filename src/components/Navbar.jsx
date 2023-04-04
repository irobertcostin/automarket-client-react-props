import React, { useEffect, useState } from "react";
import { Button, Dropdown, Breadcrumb } from "antd";
import Home from "./Home";
import App, { ADD_PAGE, HOME_PAGE,EDIT_PAGE,ALL_PAGE } from "../App";







export default function Navbar({ setPage, page }) {

   
    //breadcrumb

    // set pages section 

    let setAdd=()=>{
        setPage(ADD_PAGE)
    }

    let setEdit=()=>{
        setPage(EDIT_PAGE)
    }


    let setHome=()=>{
        setPage(HOME_PAGE)
    }

    let setAll=()=>{
        setPage(ALL_PAGE)
    }


    useEffect(() => {




    }, [])

     // menu button items
     const items = [
        {
            key: '1',
            label: (
                <a  onClick={setHome} >
                    /home
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a onClick={setAll}>
                    /all-cars
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a  onClick={setAdd}>
                    /add-car
                </a>
            ),
        }
    ];





    return (
        <div className="w-full h-[8vh] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-gradient-to-r from-indigo-900 to-blue-800 ">


            <div className="h-full shadow-[inset_-8px_-8px_30px_#7c3aed] flex flex-row items-center justify-start gap-4 lg:h-[80px]">

                <div className=" ml-4 p-2 cursor-pointer  rounded-lg duration-500 sm:ml-4  hover:scale-110 hover:bg-gradient-to-r from-slate-300 to-slate-500 ">

                    <a href="" className=" text-white p-4  text-shadow-glow">SupercarSpotlight</a>
                </div>



                <Breadcrumb
                    separator={<span style={{ color: 'white', opacity: 0.8 }}>/</span>}
                    className=" ml-12 hidden md:flex"
                    items={[
                        {
                            title: <p onClick={setHome} className="cursor-pointer text-slate-400 hover:text-slate-100 duration-100 ease-in-out">home</p>,
                        },

                        {
                            title: <p onClick={setAll} className="cursor-pointer text-slate-400 hover:text-slate-100 duration-100 ease-in-out">all-cars</p>,
                        },
                        {
                            title: <p onClick={setAdd} className="cursor-pointer text-slate-400 hover:text-slate-100 duration-100 ease-in-out">add-car</p>,
                        }

                    ]}

                />



                <Dropdown className="text-white ml-auto mr-6 md:hidden"
                    menu={{
                        items,
                    }}
                    placement="bottomRight"
                    arrow
                >
                    <Button className="border-none text-3xl">🍔</Button>
                </Dropdown>




            </div>
        </div>

    )

}