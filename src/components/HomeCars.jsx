import React from "react"
import CarModal from "./CarModal"
import { Empty } from 'antd';
import App, { EDIT_PAGE } from "../App";

export default function HomeCars({ cars, setPage, setCarId }) {


    let set = () => {
        setPage(EDIT_PAGE)
    }




    return (
        <>




            {/* <div className="w-full h-[54vh] p-5">
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
        </div> */}




            HTML
            <div class="flex flex-col overflow-x-auto">
                <div class="sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-x-auto">
                            <table class="min-w-full text-left text-sm font-light">
                                <thead class="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">#</th>
                                        <th scope="col" class="px-6 py-4">Heading</th>
                                        <th scope="col" class="px-6 py-4">Heading</th>
                                        <th scope="col" class="px-6 py-4">Heading</th>
                                        <th scope="col" class="px-6 py-4">Heading</th>
                                        <th scope="col" class="px-6 py-4">Heading</th>
                                        <th scope="col" class="px-6 py-4">Heading</th>
                                        <th scope="col" class="px-6 py-4">Heading</th>
                                        <th scope="col" class="px-6 py-4">Heading</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b dark:border-neutral-500">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                    <tr class="border-b dark:border-neutral-500">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium ">2</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4 ">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4 ">Cell</td>
                                    </tr>
                                    <tr class="border-b ">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium ">3</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                        <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


