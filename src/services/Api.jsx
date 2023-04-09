import React from "react";
import { Button, message, Result, Space } from "antd";
import { RestFilled } from "@ant-design/icons";



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


            let data = await this.api('/new-car', "POST", car)

            if (data.status === 201) {
                let resp = await data.json();

                message.success("Your car has been posted", [3], console.log(resp))
                return resp;
            } else {
                let resp = await data.json();

                message.error(resp.error.message, [3], console.log(""))
            }


        } catch (error) {
            console.log(error)
        }
    }



    async getCarById(id) {
        try {

            let data = await this.api(`/all-cars/car-by-id/id=${id}`)


            if (data.status === 200) {
                let resp = await data.json();
                // console.log(resp)
                return resp;
            } else {
                let resp = await data.json();
                message.error(resp.error.message, [3], console.log(""))
            }


        } catch (error) {
            console.log(error)
        }
    }

    async editCar(car, id) {

        try {
            let data = await this.api(`/edit-car/car-id=${id}`, "PUT", car)

            if (data.status === 201) {
                let response = await data.json();
                return response;
            } else {
                let response = await data.json();
                message.error(response.error.message, [5], console.log(""))
            }

        } catch (error) {
            message.error(error, [3], console.log(""))
        }

    }


    async deleteCar(id) {

        try {

            let data = await this.api(`/all-cars/delete/id=${id}`, "DELETE")
            let response = await data.json();

            if (data.status === 200) {
                message.success(response, [5], console.log(""))
            } else {
                message.error(response.error.message, [5], console.log(""))
            }

        } catch (error) {
            message.error(error, [3], console.log(""))
        }


    }



    async getModelsByMaker(maker) {

        try {
            let data = await this.api(`/all-cars/models-by-maker/maker=${maker}`)
            let response = await data.json();
            if (data.status === 200) {
                return response;
            } else {
                message.error(response.error.message, [5], console.log(""))
            }

        } catch (error) {
            message.error(error, [3], console.log(""))
        }


    }

}