
import { Empty } from "antd";
import React, { useEffect, useState } from 'react';
import Data from "../services/Api";
import {
    DatePicker,
    Button,
    Cascader,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
    Image,
    message
} from 'antd';

import carpng from "./images/rolls-car.png"
import App, { HOME_PAGE, ADD_PAGE, EDIT_PAGE } from "../App";

export default function EditCar({ carId, setPage }) {


    // set pages section 


    let [currentCar, setCurrentCar] = useState({});


    let [brand, setMaker] = useState('');
    let [model, setModel] = useState('');
    let [year, setYear] = useState('');
    let [price, setPrice] = useState('');
    let [mileage, setMileage] = useState('');



    let api = new Data();

    let getCarById = async () => {

        let data = await api.getCarById(carId);
        setCurrentCar(data)
        // console.log(carToEdit)
    }




    let onChangeMaker = (element) => {
        let obj = element.target.value;
        setMaker(obj);
    }

    let onChangeModel = (element) => {
        let obj = element.target.value;
        setModel(obj);
    }

    let onChangePrice = (element) => {
        setPrice(element)
    };

    let onChangeMileage = (element) => {
        // console.log(element)
        setMileage(element)
    };

    let onChangeYear = (element) => {
        setYear((element.$M + 1) + "/" + element.$y)
        // setYear(element)
    };






    let setAdd = () => {
        setPage(ADD_PAGE)
    }

    let setEdit = () => {
        setPage(EDIT_PAGE)
    }


    let setHome = () => {
        setPage(HOME_PAGE)
    }










    useEffect(() => {
        getCarById();

    }, [])


    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };





    let editCar = async (car, carId) => {

        car = {
            maker: brand,
            model: model,
            mileage: mileage,
            price: price,
            year: year
        }

        console.log(car)

        let data = await api.editCar(car, carId);

        console.log(data)
        getCarById();



    }




    return (

        <div className="w-full h-[89vh] relative  lg:flex-row lg:justify-start lg:items-center">
            <div className=" relative p-4  flex flex-col items-center  justify-start xl:items-center xl:w-[900px] 2xl:w-[1100px]">

                <div className=" w-full bg-gradient-to-r from-blue-800 to-indigo-900 py-1 rounded-md fade-in ">
                    <p className="text-center text-[15px] py-1 font-bold text-slate-100">Edit car section </p>
                </div>

                <div className=" mt-8 w-full h-[30vh] rounded-md max-w-[700px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">

                    <div className="relative ">
                        <img className="absolute right-1 top-1 max-w-[40%]" src={carpng} />
                    </div>

                    <div className=" p-4 pt-8 bg-gradient-to-r from-sky-800 to-violet-700 bg-clip-text text-transparent font-semibold text-xl lg:text-5xl lg:pl-12 lg:font-semibold">
                        <p >{currentCar.maker}</p>
                        <p>{currentCar.model}</p>
                    </div>

                    <div className=" pl-4  text-slate-600 lg:text-xl lg:pl-12 lg:font-semibold">
                        <p>Price : <span className="text-green-600 font-semibold">$ {currentCar.price}</span></p>
                        <p>Reg. year : {currentCar.year}</p>
                        <p>Mileage (km) : {currentCar.mileage} </p>
                    </div>


                </div>



                <div className=" flex flex-row px-5 h-[450px] gap-6">

                    <div className="add-info-inp">
                        <p className="mt-12">Maker</p>
                        <p>Model</p>
                        <p>Mileage</p>
                        <p>Price</p>
                        <p className="mb-28">Registration</p>
                    </div>
                    <Form className=" add-form flex flex-col  px-12 py-12 w-auto rounded-lg"
                        labelCol={{
                            span: 0,
                        }}
                        wrapperCol={{
                            span: 50,

                        }}
                        layout="horizontal"
                        initialValues={{
                            size: componentSize,
                        }}
                        onValuesChange={onFormLayoutChange}
                        size={componentSize}
                        label=""

                    >



                        <Form.Item className=" flex ">
                            <Input className=" " onChange={onChangeMaker} style={{ width: '200px' }} placeholder="Maker" />
                        </Form.Item>

                        <Form.Item className=" flex ">
                            <Input className="" onChange={onChangeModel} style={{ width: '200px' }} placeholder="Model" />
                        </Form.Item>


                        <div className=" flex items-center mb-6">
                            <label className="mr-12 hidden">Mileage</label>
                            <InputNumber prefix="km" onChange={onChangeMileage} style={{ width: '200px' }} />
                        </div>



                        <div className=" flex items-center mb-6">
                            <label className="mr-16 hidden">Price</label>
                            <InputNumber
                                defaultValue={1000}
                                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChangePrice}
                                style={{ width: '200px' }}
                            />
                        </div>

                        <div className=" flex items-center mb-6">
                            <label className="mr-12 hidden">Registration</label>
                            <DatePicker style={{ width: '200px' }} onChange={onChangeYear} picker="month" placeholder="Registration date" bordered={true} />
                        </div>



                        <div className="flex w-full flex-row gap-4 items-center justify-center mt-2">
                            <Button type="primary" onClick={editCar} className="bg-blue-600 font-semibold hover:scale-110">Submit</Button>
                            <Button type="primary" className="font-semibold hover:scale-110"  danger>Cancel</Button>
                        </div>





                    </Form>
                </div>






            </div>

            <div className="comm-sell absolute h-[90vh] m-1 rounded-sm top-0 right-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="commercial-sell w-[500px]  h-[500px]" />
                <div className=" h-[25vh] p-2 text-center text-slate-500 w-[500px]">
                    <p className="text-2xl mt-4">Thousands of sellers and buyers trust us.</p>
                    <p>Romania`s biggest vehicle marketplace</p>
                    <p>Over 20.000 daily unique visitors</p>
                    <p>More than 30.000 cars sold</p>
                    <p>Functionalities that will guide you to success</p>
                </div>
            </div>
        </div>



    )
}