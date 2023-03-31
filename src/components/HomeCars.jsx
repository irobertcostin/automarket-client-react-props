import React from "react"
import CarModal from "./CarModal"
import { Empty } from 'antd';


export default function HomeCars({cars}){


    return(
        <div className="w-full border border-red-500 h-[54vh] p-5">
                <div className="w-full flex justify-center items-center ">
                    <p className="bg-gradient-to-r from-sky-800 to-violet-700 bg-clip-text text-transparent font-extrabold text-3xl">Exquisite choices</p>
                </div>


                <div className="w-full border border-green-500 h-[45vh] overflow-scroll flex flex-row flex-wrap gap-8 p-4 justify-center items-center">
                    {
                        cars.length>0
                        ?cars.map(element=><CarModal element={element}></CarModal>)
                        :<div className="w-full"><Empty /></div>
                        
                        
                    }
                </div>
        </div>
    )
}