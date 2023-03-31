
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






export default function AddCar() {




    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };



    const onChangePrice = (price) => {
        console.log('changed', price);
    };




    return (
        <div className="w-full  flex flex-col items-center">

            <div className="rounded-lg px-4 py-2  mt-4 mx-4 mb-6">
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
