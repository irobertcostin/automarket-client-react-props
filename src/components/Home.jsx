import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Filters from "./Filters";
import HomeCars from "./HomeCars";
import Data from "../services/Api";
import Marquee from "react-fast-marquee";






export default function Home({ setPage, setCarId }) {


    let [cars, setCars] = useState([]);
    let [makers, setMakers] = useState([]);
    let [makerCount, setMakerCount] = useState();





    let api = new Data();


    let getMakers = async () => {
        let response = await api.getMakers();

        setMakers(response)
        setMakerCount(response.length)
        // console.log(makers)
        // console.log(makerCount)
    }


    let getCars = async () => {

        let response = await api.getCars();
        setCars(response.cars);
        setMakerCount(response.cars.length);
    }







    useEffect(() => {

        getCars();
        getMakers();

    }, [])


    return (
        <div className="relative">

            <Marquee>
                I can be a React component, multiple React components, or just some text.
            </Marquee>

            <div className="test-drive-div  flex flex-col items-center justify-end">
                <div className="w-full  test-drive h-[150px]"></div>
            </div>

            <div className=" absolute top-8 left-6 border border-fuchsia-500 rounded-lg p-0 shadow-[0_20px_50px_rgba(8,_112,_184,_1)]">
                <Filters makers={makers} />
            </div>


            <HomeCars cars={cars} setPage={setPage} setCarId={setCarId} />




        </div>
    )
}

// Progress section
// loader for every section that contains 
