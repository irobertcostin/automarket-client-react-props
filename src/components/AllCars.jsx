import React, { useState, useEffect } from "react"
import CarRow from "./CarRow"
import { Empty } from 'antd';
import App, { EDIT_PAGE } from "../App";
import Data from "../services/Api";
import { Space, Spin } from 'antd';

export default function AllCars({ setPage, setCarId, carId }) {

    let [cars, setCars] = useState([]);
    let [carCount, setCarCount] = useState();

    let [isLoading, setIsLoading] = useState(false);



    let api = new Data();


    let handleSort = (arr) => {

        let sortedNumbers = [...arr].sort((a, b) => a.maker > b.maker ? 1 : -1)
        // console.log(sortedNumbers)
        setCars(sortedNumbers)

    }


    let getCars = async () => {
        setIsLoading(true)
        let response = await api.getCars();
        handleSort(response.cars)
        setIsLoading(false)
        setCarCount(response.cars.length)
        // setMakerCount(response.cars.length);


    }


    let set = () => {
        setPage(EDIT_PAGE)
    }


    useEffect(() => {

        getCars();


    }, [])






    return (
        <>







            <div className=" p-4 px-4">

                <div className=" text-center bg-gradient-to-r from-slate-300 to-slate-500 py-2 px-4 rounded-lg opacity-90">
                    <p className="text-slate-800">Explore our collection of high-performance supercars</p>
                </div>

                {

                    isLoading
                        ? <div className=" h-[90vh] flex flex-col justify-center items-center ">
                            <Spin size="large" />
                        </div>
                        : <div className="flex overflow-x-auto w-full mt-4 border-2 rounded-md relative">
                            <div className="w-full ">
                                <div className="inline-block min-w-full  sm:px-2 lg:px-8 ">
                                    <div className="overflow-x-auto flex justify-center h-[80vh] overflow-y-scroll">
                                        <table className=" text-left text-sm font-light w-full max-w-[1000px] ">
                                            <thead className="border-b font-light  dark:border-neutral-500">
                                                <tr className="text-slate-600">
                                                    <th scope="col" className="px-2 py-2">ID</th>
                                                    <th scope="col" className="px-2 py-2">Maker</th>
                                                    <th scope="col" className="px-2 py-2">Model</th>
                                                    <th scope="col" className="px-2 py-2">Registration</th>
                                                    <th scope="col" className="px-2 py-4">Mileage</th>
                                                    <th scope="col" className="px-2 py-4">Price</th>

                                                </tr>
                                            </thead>
                                            <tbody>


                                                {

                                                    cars.map(element => <CarRow key={element.id} element={element} set={set} setCarId={setCarId}></CarRow>)



                                                }



                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                }



            </div>

        </>
    )
}

