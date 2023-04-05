
import { Empty, Spin } from "antd";
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
import App, { HOME_PAGE, ADD_PAGE, EDIT_PAGE, ALL_PAGE } from "../App";

export default function EditCar({ carId, setPage }) {


    // set pages section 


    let [currentCar, setCurrentCar] = useState({});


    let [brand, setMaker] = useState('');
    let [model, setModel] = useState('');
    let [year, setYear] = useState('');
    let [price, setPrice] = useState('');
    let [mileage, setMileage] = useState('');


    let [isLoading, setIsLoading] = useState(false);



    let api = new Data();

    let getCarById = async () => {

        setIsLoading(true)

        let data = await api.getCarById(carId);
        setCurrentCar(data)
        setIsLoading(false)
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

    let setAll = () => {
        setPage(ALL_PAGE)
    }


    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };





    let editCar = async () => {

        let car = {
            maker: brand,
            model: model,
            mileage: mileage,
            price: price,
            year: year
        }

        console.log(car)

        let data = await api.editCar(car, carId);


        getCarById();



    }


    useEffect(() => {
        getCarById();

    }, [])

    return (

        <div className=" w-full h-[89vh] relative  lg:flex-row lg:justify-start lg:items-center">

            <div className="edit-car-form  relative p-4   flex flex-col  justify-center items-center">



                <div className=" edit-car-form-top text-center w-full bg-gradient-to-r from-slate-300 to-slate-500 mb-2 py-2 px-4 rounded-lg opacity-90 lg:mb-8">
                    <p className="text-slate-800">Fine-tune your favorite supercar's details and keep our collection accurate</p>
                </div>

                {
                    isLoading ?
                        <div className=" h-[90vh] flex flex-col justify-center items-center ">
                            <Spin size="large" />
                        </div>
                        : <div className="   mt-2 w-full h-[30vh] flex flex-row overflow-hidden justify-between rounded-md max-w-[700px] md:mt-2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">

                            <div className=" flex flex-col justify-center lg:pl-4">
                                <div className="relative pl-4 py-1 bg-gradient-to-r from-sky-800 to-violet-700 bg-clip-text text-transparent font-semibold text-xl md:text-3xl md:px-14 lg:text-3xl lg:pl-8 lg:font-semibold">
                                    <p className=" md:min-w-[250px]">{currentCar.maker}</p>
                                    <p>{currentCar.model}</p>
                                </div>

                                <div className=" pl-4  text-slate-600  md:text-xl md:px-14 lg:text-xl lg:pl-8 lg:font-semibold">
                                    <p>Price : <span className="text-green-600 font-semibold">$ {currentCar.price}</span></p>
                                    <p>Reg. year : {currentCar.year}</p>
                                    <p>Mileage (km) : {currentCar.mileage} </p>
                                </div>
                            </div>

                            <div className=" flex justify-center items-center w-[50%]">
                                <img className="  right-0 top-0 w-full" src={carpng} />
                            </div>


                        </div>

                }


                <div className=" flex flex-row px-5 h-[450px] gap-6">

                    <div className="add-info-inp flex flex-col">
                        <p className="mt-12">Maker</p>
                        <p>Model</p>
                        <p>Mileage</p>
                        <p>Price</p>
                        <p className="mb-40">Registration</p>
                    </div>
                    <Form className=" add-form flex flex-col  px-12 py-12  w-auto rounded-lg"
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



                        <div className="flex md:w-[00px]  flex-row gap-4 items-center justify-center mt-2 mr-4">
                            <Button type="primary" onClick={editCar} className="bg-blue-600 text-shadow-glow hover:scale-110">Submit</Button>
                            <Button type="primary" onClick={editCar} danger className="bg-blue-600 text-shadow-glow hover:scale-110">Delete</Button>
                            <Button type="primary" className=" text-shadow-glow hover:scale-110" onClick={setAll} danger>Cancel</Button>
                        </div>





                    </Form>
                </div>






            </div>

            <div className="comm-sell  absolute h-[92vh] rounded-sm top-0 right-0 ">
                <div className="commercial-sell h-[92vh] m-0 p-0" />
            </div>
        </div>



    )
}