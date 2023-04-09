import {createContext, useContext,useState} from "react"
import Data from "../services/Api"



export const Context=createContext();



export const EmployeeProvider = ({children})=>{



    const [data,setData] = useState([]);

    if(data.length===0){

        let api = new Data();


        api.getCars().then(response=>{
            setData(response.cars)
        })
    }


    return(
        <Context.Provider value={[data,setData]}>{children}</Context.Provider>
    )



};