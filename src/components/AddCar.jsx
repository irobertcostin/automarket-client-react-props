
import { Empty } from "antd";
import React, { useEffect, useState } from 'react';
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
    Result
} from 'antd';

import { LeftOutlined } from "@ant-design/icons";
import App, { HOME_PAGE } from "../App";
import Data from "../services/Api";





export default function AddCar({ setPage }) {

    let api = new Data();


    let [isAdded, setIsAdded] = useState(false)



    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };



    let [maker, setMaker] = useState('');
    let [model, setModel] = useState('');
    let [year, setYear] = useState('');
    let [price, setPrice] = useState('');
    let [mileage, setMileage] = useState('');



    let set = () => {

        setPage(HOME_PAGE);

    }


    const onChangePrice = (price) => {
        setPrice(price)

    };

    const onChangeMaker = (value) => {

        setMaker(value.target.value);

    };

    const onChangeModel = (value) => {

        setModel(value.target.value);
    };

    const onChangeMileage = (element) => {

        setMileage(element);

    };


    const onChangeYear = (element) => {
        setYear((element.$M + 1) + "/" + element.$y)

    };



    let addCar = async () => {

        let car = {
            maker: maker,
            model: model,
            year: year,
            price: `${price}`,
            mileage: mileage
        }

        let resp = await api.addCar(car);

        if (resp.maker) {
            setIsAdded(true)
        }

    }


    let setNew = () => {
        setIsAdded(false)
    }






    return (
        <div className="w-full  flex flex-col items-center relative">

            {
                isAdded
                    ?
                    <div className="w-full border bg-slate-100 ">
                        <Result
                            status="success"
                            title="Successfully Posted A Car For Sale!"
                            // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                            extra={[
                                <Button onClick={set} type="primary" className="bg-blue-600" key="console">
                                    Home
                                </Button>,
                                <Button key="buy" onClick={setNew}>Post a new one</Button>,
                            ]}
                        />
                    </div>
                    :
                    <div className="w-full h-[91vh] relative  lg:flex-row lg:justify-start lg:items-center">
                        <div className=" relative p-4  flex flex-col items-center justify-start ">
                            <div className="rounded-lg px-4 py-2  mt-4 mx-4 mb-2 opacity-[0.9] lg:hidden">
                                <p className="text-center text-[15px] font-bold text-slate-700">Post your car for sale in this section and gain exposure to excentric millionaires </p>
                            </div>
                            
                            <Form className=" add-form flex flex-col  px-12 py-12 lg:mt-8 w-auto rounded-lg"
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
                                    <Input onChange={onChangeMaker} className=" " style={{ width: '200px' }} placeholder="Maker" />
                                </Form.Item>

                                <Form.Item className=" flex ">
                                    <Input onChange={onChangeModel} className="" style={{ width: '200px' }} placeholder="Model" />
                                </Form.Item>


                                <div className=" flex items-center mb-6">
                                    <label className="mr-12 hidden">Mileage</label>
                                    <InputNumber onChange={onChangeMileage} prefix="km" style={{ width: '200px' }} />
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
                                    <DatePicker onChange={onChangeYear} style={{ width: '200px' }} picker="month" placeholder="Registration date" bordered={true} />
                                </div>



                                <div className="flex w-full flex-row gap-4 items-center justify-center mt-2">
                                    <Button type="primary" onClick={addCar} className="bg-blue-600 font-semibold">Submit</Button>
                                    <Button type="primary" onClick={set} className="font-semibold" danger>Cancel</Button>
                                </div>





                            </Form>
                        </div>

                        <div className="comm-sell absolute h-[90vh] m-1 rounded-sm top-0 right-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                            <div className="commercial-sell w-[500px]  h-[500px]" />
                            <div className=" h-[30vh] p-5 text-center w-[500px]">
                                <p className="text-3xl mb-4">Thousands of sellers and buyers trust us.</p>
                                <p>Romania`s biggest vehicle marketplace</p>
                                <p>Over 20.000 daily unique visitors</p>
                                <p>More than 30.000 cars sold</p>
                                <p>Functionalities that will guide you to success</p>
                            </div>
                        </div>
                    </div>
            }


        </div>
    )
}
