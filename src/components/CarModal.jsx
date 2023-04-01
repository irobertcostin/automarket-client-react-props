import { Button } from "antd"
import App,{EDIT_PAGE} from "../App";

export default function CarModal({element,set}){

    let setPage=()=>{
        set(EDIT_PAGE)
    }


    return(
        <div className=" relative w-[325px] h-[150px] rounded-lg p-4  text-[15px] flex flex-col justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]" key={element.id}>
            <p>Maker: {element.maker}</p>
            <p>Model: {element.model}</p>
            <p>Year: {element.year}</p>
            <p>Price: {element.price}</p>
            <p>Km: {element.mileage}</p>

            <div className="absolute bottom-4 right-4">
                <Button type="primary bg-blue-600" onClick={setPage}>Edit</Button>
            </div>
        </div>
    )
}