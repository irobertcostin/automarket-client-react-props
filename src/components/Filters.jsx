import Home from "./Home";
import React,{useState,useEffect} from "react";
import Data from "../services/Api";

import { Cascader } from 'antd';










export default function Filters({makers}) {

    
    const optionLists = [

        {
            value: 'Audi',
            label: 'Audi',
            isLeaf: false,
        },
        {
            value: 'BMW',
            label: 'BMW',
            isLeaf: false,
        },
    ];




    const [options, setOptions] = useState(optionLists);

    const onChange = (value, selectedOptions) => {
        // console.log(value );
        console.log(makers)
        // console.log(makers)
        // selectedOptions e model 
        // value e maker
    };


    const loadData = (selectedOptions) => {
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;



        // load options lazily
        setTimeout(() => {
            targetOption.loading = false;
            targetOption.children = [
                {
                    label: `${targetOption.label} Dynamic 1`,
                    value: 'dynamic1',
                },
                {
                    label: `${targetOption.label} Dynamic 2`,
                    value: 'dynamic2',
                },
            ];
            setOptions([...options]);
        }, 1000);
    };
    return <Cascader options={options} size="medium" loadData={loadData} onChange={onChange} changeOnSelect defaultValue={"Search"} />;
};
