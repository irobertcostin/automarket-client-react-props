import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import Filters from "./Filters";
import HomeCars from "./HomeCars";
import Data from "../services/Api";







export default function Home({setPage}) {


    let [cars,setCars]=useState([]);
    let [makers, setMakers] = useState([]);
    let [makerCount,setMakerCount]=useState();

    let api = new Data();


    let getMakers = async () => {
        let response = await api.getMakers();
        
        setMakers(response)
        setMakerCount(response.length)
        console.log(makers)
        // console.log(makerCount)
    }


    let getCars = async()=>{

        let response = await api.getCars();
        setCars(response.cars);


    }
    

    useEffect(() => {

        getCars();
        getMakers();
        
    }, [])


    return (
        <div className="relative">
            <div className="test-drive-div flex flex-col items-center justify-end">
                <div className="w-full test-drive h-[200px]"></div>
            </div>

            <div className=" absolute top-8 left-6 border border-fuchsia-500 rounded-lg p-0 shadow-[0_20px_50px_rgba(8,_112,_184,_1)]">
                <Filters />
            </div>


            <HomeCars cars={cars} setPage={setPage}/>


        </div>
    )
}

// Progress section
// loader for every section that contains 
