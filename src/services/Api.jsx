import React from "react";
import { Button, message, Result, Space } from "antd";



export default class Data {






    api(path, method = "GET", body = null) {

        const url = "http://localhost:4444" + path;

        const options = {
            method,

            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }

        if (body != null) {


            options.body = JSON.stringify(body);

        }

        return fetch(url, options)


    }

    async getCars() {
        try {
            let data = await this.api('/all-cars')
            // console.log(data.status)
            let resp = await data.json();
            // console.log(resp)
            return resp;

        } catch (error) {
            console.log(error)
        }
    }

    async getMakers() {
        try {
            let data = await this.api('/all-cars/all-makers')
            let resp = await data.json();
            // console.log(resp)
            return resp;

        } catch (error) {
            console.log(error)
        }
    }



    async addCar(car) {
        try {

            // message.loading("Loading", [1],console.log(""))
            let data = await this.api('/new-car', "POST", car)

            if(data.status===201){
                let resp = await data.json();
                
                message.success("Your car has been posted", [3], console.log(resp))
                return resp;
            }else {
                let resp = await data.json();
                
                message.error(resp.error.message, [3], console.log(""))
            }
            
            
        } catch (error) {
            console.log(error)
        }




    }

}