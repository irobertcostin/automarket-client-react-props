import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Filters from "./Filters";
import HomeCars from "./HomeCars";
import Data from "../services/Api";
import Marquee from "react-fast-marquee";






export default function Home({ setPage, setCarId }) {


    let [cars, setCars] = useState([]);
    let [carCount, setCarCount] = useState();

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
        setCarCount(response.cars.length)
        // setMakerCount(response.cars.length);


    }








    useEffect(() => {

        getCars();
        getMakers();

    }, [])


    return (
        <>
            <div className="relative flex flex-col">

                <Marquee className="bg-red-600 text-slate-100 text-xs md:text-md lg:text-lg" pauseOnHover={true} gradientWidth={50} speed={50} delay={1} gradient={true} gradientColor={[255, 0, 0]}>
                    <p >{carCount}+ supercars</p>
                    <p className="ml-[5vh]">Over {makerCount} exquisite makers</p>

                </Marquee>

                <div className="test-drive-div relative  flex flex-col items-center justify-end">

                    <div className="w-full relative ">
                        <div className="font-bold absolute z-10 right-4 cursor-pointer -bottom-12 bg-gradient-to-r from-amber-200 to-yellow-500 p-2 rounded-md">
                            <p className="text-xs">TEST DRIVE</p>
                        </div>

                    </div>

                    <div className="absolute z-10 flex flex-col items-start justify-end left-4 bottom-2  text-white text-2xl ">

                        <p>DRIVE YOUR</p>
                        <p>DREAM</p>
                    </div>
                    <div className="w-full  test-drive h-[150px]"></div>
                </div>

                <div className=" absolute top-8 left-6 border border-fuchsia-500 rounded-lg p-0 shadow-[0_20px_50px_rgba(8,_112,_184,_1)]">
                    <Filters makers={makers} />
                </div>


                {/* <HomeCars cars={cars} setPage={setPage} setCarId={setCarId} /> */}





                <div className="border border-red-500 w-full mt-auto">

                </div>
            </div>


        </>
    )
}

// Progress section
// loader for every section that contains API 
// stats on front page 
// a div with 3 photos with big names 
// a search bar 
// marquee customization 
// navbar buttons 
// font 
// DRIVE YOUR DREAM and test drive button on lambo pic home 
// filters section 
// app title padding is wrong 


