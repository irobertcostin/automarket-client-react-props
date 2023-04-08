import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Filters from "./Filters";
import HomeCars from "./AllCars";
import Data from "../services/Api";
import Marquee from "react-fast-marquee";
import Cover1 from "../components/images/mercedes-front.png"
import Cover2 from "../components/images/ferarri-front.png"
import Cover3 from "../components/images/rolls-front.png"




export default function Home({ setPage }) {

    const callouts = [
        {
            name: 'Mercedes-Benz',
            description: 'The German Terminator',
            imageSrc: Cover1,
            imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
            href: '#',
        },
        {
            name: 'Scuderria',
            description: 'The Red Car',
            imageSrc: Cover2,
            imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
            href: '#',
        },
        {
            name: 'Rolls-Royce',
            description: 'There is no second best',
            imageSrc: Cover3,
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',

        },
    ]



    let [cars, setCars] = useState([]);
    let [carCount, setCarCount] = useState();

    let [makers, setMakers] = useState([]);
    let [makerCount, setMakerCount] = useState();

    let [mcap,setMcap]=useState();

    

    


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
        

        
        
        setMcap( response.cars.reduce((accumulator, car)=> {

            return accumulator + car.price

        },0));

        setCars(response.cars);
        setCarCount(response.cars.length)
        


    }




    







    useEffect(() => {

        getCars();
    
        getMakers();
        
    }, [])


    return (
        <>
            <div className="relative flex flex-col min-h-[90vh]">

                <Marquee className="bg-red-600 text-slate-100 text-xs md:text-md lg:text-xl" pauseOnHover={true} gradientWidth={50} speed={50} delay={1} gradient={true} gradientColor={[255, 0, 0]}>
                    <p ><span className="text-green-300">{carCount}+</span>  supercars</p>
                    <p className="ml-[5vh]">Over <span className="text-green-300">{makerCount}</span>  exquisite makers</p>
                    <p className="ml-[5vh]">Collection market cap: <span className="text-green-300">$ {mcap}</span></p>
                </Marquee>

                <div className="test-drive-div relative  flex flex-col items-center justify-end">

                    <div className="w-full z-10 relative ">
                        <div className="font-bold absolute z-20 right-4 cursor-pointer -bottom-12 md:bottom-36 lg:bottom-80 lg:right-12 bg-gradient-to-r from-amber-200 to-yellow-500 p-2 rounded-md">
                            <p className="text-xs md:text-lg lg:text-lx">TEST DRIVE</p>
                        </div>

                    </div>

                    <div className="drive-dream absolute z-10 flex flex-col items-start justify-end left-4 bottom-2  text-white text-2xl easy-in-out duration-500  md:text-5xl lg:text-7xl xl:text-8xl ">

                        <p>DRIVE YOUR</p>
                        <p>DREAM</p>
                    </div>
                    <div className="w-full  test-drive h-[150px]"></div>
                </div>



                <div className="bg-gray-100">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl py-4 sm:py-8 lg:max-w-none lg:py-8">
                            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

                            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                                {callouts.map((callout) => (
                                    <div key={callout.name} className="group relative">
                                        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                            <img
                                                src={callout.imageSrc}
                                                alt={callout.imageAlt}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <h3 className="mt-6 text-sm text-gray-500">
                                            <a href={callout.href}>
                                                <span className="absolute inset-0" />
                                                {callout.name}
                                            </a>
                                        </h3>
                                        <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div>
                    <Filters makers={makers}/>
                </div>
             */}
            </div>


        </>
    )
}

// Progress section


// a search bar 
// a filters section in allcars 



// when breadcrumb active - changed color


