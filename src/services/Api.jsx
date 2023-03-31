import React from "react";
import { Button, message } from "antd";


export default class Data {


    api(path,method="GET",body=null){

        const url="http://localhost:4444"+path;

        const options = {
            method,

            headers: {
                'Content-Type':'application/json; charset=utf-8',
                'X-Requested-With':'XMLHttpRequest'
            }
        }

        if(body!=null){

            
            options.body=JSON.stringify(body);
            
        }

        return fetch(url,options)


    }

    async getCars(){
        try {
            let data = await this.api('/all-cars')
            let resp= await data.json();
            // console.log(resp)
            return resp;
            
        } catch (error) {
            console.log(error)
        }
    }

    async getMakers(){
        try {
            let data = await this.api('/all-cars/all-makers')
            let resp= await data.json();
            // console.log(resp)
            return resp;
            
        } catch (error) {
            console.log(error)
        }
    }
}