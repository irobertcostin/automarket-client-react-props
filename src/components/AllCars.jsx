import React, { useState, useEffect, useContext } from "react"
import CarRow from "./CarRow"
import { Empty } from 'antd';
import App, { EDIT_PAGE } from "../App";
import Data from "../services/Api";
import { Space, Spin } from 'antd';
import { Context } from "../context/Context";







export default function AllCars({ setPage, setCarId, carId }) {

    let [data,setData]=useContext(Context)


    let [isLoading, setIsLoading] = useState(false);


    
    let [cars, setCars] = useState(data);
    let [carCount, setCarCount] = useState(cars.length);
    let [makers, setMakers] = useState([]);



    
    // sort function for data
    // let handleAscRows = (arr) => {
    //     let sortedNumbers = [...arr].sort((a, b) => a.maker > b.maker ? 1 : -1)
    //     setCars(sortedNumbers)
    // }



    // let handleAscMakers = (arr) =>{
    //     let sortedMakers = [...arr].sort((a,b)=>a > b ? 1: -1 )
    //     return sortedMakers;
    // }



    let getMakers =  () => {
        let arr = cars.map(e=>e.maker)
        let uniqueArr = [...new Set(arr)]
        setMakers(uniqueArr);
    }


    let getCars =  () => {
        
        getMakers();
        
    }




    let [chosenMaker, setChosenMaker] = useState();
    let [modelsByMaker, setModelsByMaker] = useState([]);



    let [displayed,setDisplayed]=useState(cars);




    // click on maker in filters list, display all cars by maker, display all models in filters section after removing duplicates
    
    let setMakerClick = async (element) => {
        
        let obj = element.target.textContent
        setChosenMaker(obj)
        
        // daca schimbam aici obj cu chosenMaker , nu mai merge
        let arr = cars.filter(e=>e.maker==obj)
        setDisplayed(arr);
        setCarCount(arr.length)

        let models = arr.map(e=>e.model)
        let uniqueArr = [...new Set(models)]
        // let x = await getModelsByMaker(obj);
        setModelsByMaker(uniqueArr);
        
    }



    // click on model, display the cars by model
    let onCheckModel=(element)=>{

        let arr = cars.filter(e=>e.model===element.target.textContent)
        setDisplayed(arr);
        setCarCount(arr.length)

    }



    // set page
    let set = () => {
        setPage(EDIT_PAGE)
    }


    // filters section
    let [mobileFilters, setMobileFilters] = useState(true);
    let [sortDiv, setSortDiv] = useState(false)


    let setMF = () => {
        setMobileFilters(true)
    }

    let setMFFalse = () => {
        setMobileFilters(false)
    }


    let sortBtn = () => {
        if (!sortDiv) {
            setSortDiv(true)
        } else {
            setSortDiv(false)
        }
    }


    useEffect(() => {
        getCars();
    }, [data])



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
                        :

                        <div className="bg-white ">
                            <div>
                                {/* <!--
                    Mobile filter dialog

                    Off-canvas filters for mobile, show/hide based on off-canvas filters state.
    --> */}
                                {
                                    mobileFilters
                                        ? <></>
                                        :
                                        <div className="relative  z-40" role="dialog" aria-modal="true">
                                            {/* <!--
                        Off-canvas menu backdrop, show/hide based on off-canvas menu state.
      --> */}
                                            <div className="fixed inset-0 bg-black bg-opacity-25 "></div>

                                            <div className="fixed inset-0 z-40 flex">
                                                {/* <!--
                            Off-canvas menu, show/hide based on off-canvas menu state.

                            Entering: "transition ease-in-out duration-300 transform"
                            From: "translate-x-full"
                            To: "translate-x-0"
                            Leaving: "transition ease-in-out duration-300 transform"
                            From: "translate-x-0"
                            To: "translate-x-full"
        --> */}
                                                <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl ">
                                                    <div className="flex items-center justify-between px-4">
                                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                                        <button type="button" onClick={setMF} class="-mr-2  flex h-10 w-10 items-center  justify-center rounded-md bg-white p-2 text-gray-400 ">
                                                            <span className="sr-only border border-red-500">Close menu</span>
                                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>

                                                    {/* <!-- Filters --> */}
                                                    <form class="mt-4 border-t border-gray-200">
                                                        <h3 class="sr-only">Categories</h3>
                                                        <ul role="list" class="px-2 py-3 font-medium text-gray-900 h-[400px] overflow-y-scroll">




                                                            {
                                                                makers.length > 0
                                                                    ?
                                                                    makers.map(element =>
                                                                        <li>
                                                                            <p className="block px-2 py-2 cursor-pointer" onClick={setMakerClick}>{element}</p>
                                                                        </li>)
                                                                    : <Empty />
                                                            }
                                                        </ul>

                                                        <div class="border-t border-gray-200 px-4 py-6">
                                                            <h3 class="-mx-2 -my-3 flow-root">
                                                                {/* <!-- Expand/collapse section button --> */}
                                                                <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                                                                    <span class="font-medium text-gray-900">Models by Maker</span>
                                                                    <span class="ml-6 flex items-center">
                                                                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                                        </svg>
                                                                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                            <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                                        </svg>
                                                                    </span>
                                                                </button>
                                                            </h3>
                                                            {/* <!-- Filter section, show/hide based on section state. --> */}
                                                            <div class="pt-6" id="filter-section-mobile-0">
                                                                <div class="space-y-6">



                                                                    {
                                                                        modelsByMaker.length > 0 ?
                                                                            modelsByMaker.map(e =>

                                                                                <div className="flex items-center">
                                                                                    <label for="filter-mobile-color-0" onClick={onCheckModel}  className="ml-3 min-w-0 flex-1 text-gray-500 cursor-pointer">{e}</label>
                                                                                </div>
                                                                            )
                                                                            : <Empty />
                                                                    }


                                                                </div>
                                                            </div>
                                                        </div>




                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                }

                                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                                    <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8 ">
                                        <h1 class="text-4xl font-bold tracking-tight text-slate-600">Choices : <span className="text-fuchsia-800">{carCount}</span></h1>





                                        <div class="flex items-center">
                                            <div class="relative inline-block text-left">
                                                <div>
                                                    <button type="button" class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                                        Sort
                                                        <svg onClick={sortBtn} class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>



                                                {/* <!--
                                    Dropdown menu, show/hide based on menu state.

                                    Entering: "transition ease-out duration-100"
                                    From: "transform opacity-0 scale-95"
                                    To: "transform opacity-100 scale-100"
                                    Leaving: "transition ease-in duration-75"
                                    From: "transform opacity-100 scale-100"
                                    To: "transform opacity-0 scale-95"
            --> */}
                                                {
                                                    sortDiv
                                                        ?
                                                        <div class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                                            <div class="py-1" role="none">
                                                                {/* <!--
                                            Active: "bg-gray-100", Not Active: ""

                                            Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
                --> */}
                                                                <a href="#" class="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Most Popular</a>

                                                                <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Best Rating</a>

                                                                <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Newest</a>

                                                                <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Price: Low to High</a>

                                                                <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Price: High to Low</a>
                                                            </div>
                                                        </div>
                                                        : <></>
                                                }
                                            </div>





                                            {/* grid button */}
                                            {/* filters button is hidden on lg device and appears on the left  */}
                                            <button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                                <span class="sr-only">View grid</span>
                                                <svg class="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd" />
                                                </svg>
                                            </button>








                                            {/* filters button */}
                                            <button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                                                <span class="sr-only" >Filters</span>
                                                <svg onClick={setMFFalse} class="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>


                                    <section aria-labelledby="products-heading" class=" pt-6 ">
                                        <h2 id="products-heading" class="sr-only">Products</h2>

                                        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                            {/* <!-- Filters --> */}
                                            <form class="relative hidden lg:block ">
                                                <h3 class="sr-only">Categories</h3>
                                                <ul role="list" class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900  h-[400px] overflow-y-scroll">
                                                    {
                                                        makers.length > 0
                                                            ?
                                                            makers.map(element =>
                                                                <li>
                                                                    <a className="block px-2 cursor-pointer" onClick={setMakerClick}>{element}</a>
                                                                </li>)
                                                            : <Empty />
                                                    }
                                                </ul>

                                                <div class=" border-b border-gray-200 py-6 h-[28vh] overflow-y-scroll">
                                                    <h3 class="absolute bottom-[24vh] -my-3 flow-root">
                                                        {/* <!-- Expand/collapse section button --> */}
                                                        <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                                                            <span class="font-medium text-gray-900">Models by Maker</span>
                                                            <span class="ml-6 flex items-center">
                                                                {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                                </svg>
                                                                {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </h3>
                                                    {/* <!-- Filter section, show/hide based on section state. --> */}
                                                    <div class="pt-6 " id="filter-section-0">
                                                        <div class="space-y-4">

                                                            {
                                                                modelsByMaker.length > 0 ?
                                                                    modelsByMaker.map(e =>

                                                                        <div className="flex items-center">
                                                                            <label for="filter-mobile-color-0" onClick={onCheckModel} className="ml-3 min-w-0 flex-1 text-gray-500 cursor-pointer">{e}</label>
                                                                        </div>
                                                                    )
                                                                    : <Empty />
                                                            }

                                                        </div>
                                                    </div>
                                                </div>




                                            </form>

                                            {/* <!-- Product grid --> */}
                                            <div class="lg:col-span-3  h-[70vh]">
                                                {/* <!-- Your content --> */}
                                                <div className="flex overflow-x-auto w-full   rounded-md relative">
                                                    <div className="w-full ">
                                                        <div className="inline-block min-w-full  sm:px-2 lg:px-8 ">
                                                            <div className="overflow-x-auto flex justify-center h-[68vh] overflow-y-scroll">
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
                                                                    <tbody >
                                                                    
                                                                        {
                                                                            displayed.map(element => <CarRow key={element.id} element={element} set={set} setCarId={setCarId}></CarRow>)
                                                                        }
                                                                        
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                }


                {/* <div className="flex overflow-x-auto w-full mt-4 border-2 rounded-md relative">
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
                        </div> */}







            </div>

        </>
    )
}


