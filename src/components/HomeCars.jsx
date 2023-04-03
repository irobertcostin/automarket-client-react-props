import React from "react"
import CarModal from "./CarModal"
import { Empty } from 'antd';
import App,{EDIT_PAGE} from "../App";

export default function HomeCars({cars,setPage,setCarId}){


    let set=()=>{
        setPage(EDIT_PAGE)
    }




    return(
        <div className="w-full h-[54vh] p-5">
                <div className="w-full flex justify-center items-center ">
                    <p className="mb-4  font-semibold px-3 py-1 rounded-lg text-[17px] text-blue-800 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">Exquisite choices</p>
                </div>


                <div className="w-full   h-[65vh] overflow-scroll flex flex-row flex-wrap gap-8 p-4 justify-center items-center ">
                    {
                        cars.length>0
                        ?cars.map(element=><CarModal key={element.id} element={element} set={set} setCarId={setCarId}></CarModal>)
                        :<div className="w-full"><Empty /></div>
                        
                        
                    }
                </div>
        </div>
    )
}


