
import { Empty } from "antd";
import React, { useState } from 'react';
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
} from 'antd';

import { LeftOutlined } from "@ant-design/icons";
import App, { HOME_PAGE } from "../App";





export default function AddCar({ setPage }) {




    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };


    let set = () => {

        setPage(HOME_PAGE);

    }


    const onChangePrice = (price) => {
        console.log('changed', price);
    };




    return (
        <div className="w-full  flex flex-col items-center relative">

            <div  className=" flex absolute left-4 top-4 justify-center items-center gap-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 cursor-pointer rounded-lg text-blue-700 font-semibold">
                <svg onClick={set} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

            </div>

            <div className="rounded-lg px-4 py-2  mt-20 mx-4 mb-6">
                <p className="text-center text-[15px] font-bold text-slate-500">Post your car for sale in this section and gain exposure to excentric millionaires 🚀 💵</p>
            </div>



            <div className="w-full h-[48vh] bg-blue-700 p-4 flex flex-col items-center justify-start ">
                <Form className=" flex flex-col bg-white p-7 mt-5 lg:mt-8 max-w-[600px] rounded-lg shadow-[0_20px_50px_rgba(0,_255,_255,_0.7)]"
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

                >



                    <Form.Item label="Model/Maker" className="">
                        <TreeSelect
                            className="w-[250px]"
                            treeData={[
                                {
                                    title: 'Light',
                                    value: 'light',
                                    children: [
                                        {
                                            title: 'Bamboo',
                                            value: 'bamboo',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Form.Item>


                    <div className=" flex items-center mb-6">
                        <label className="mr-12">Mileage</label>
                        <InputNumber prefix="km" style={{ width: '100%' }} />
                    </div>



                    <div className=" flex items-center mb-6">
                        <label className="mr-16">Price</label>
                        <InputNumber
                            defaultValue={1000}
                            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                            onChange={onChangePrice}
                            style={{ width: '100%' }}
                        />
                    </div>

                    <div className=" flex items-center mb-6">
                        <label className="mr-[68px]">Year </label>
                        <DatePicker picker="month" bordered={true} />
                    </div>



                    <div>
                        <Button type="primary" className="bg-blue-600 font-semibold">Post ad</Button>
                    </div>





                </Form>
            </div>



        </div>
    )
}
