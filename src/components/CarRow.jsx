import { Button } from "antd"
import App, { EDIT_PAGE } from "../App";

export default function CarRow({ element, set, setCarId  }) {

    let setPage = () => {
        set(EDIT_PAGE)
        setCarId(element.id)
    }






    return (




        <tr id={element.id}  className="border-b dark:border-neutral-500 cursor-pointer text-slate-700 relative hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ease-in-out duration-500">
            <td className="whitespace-nowrap px-2 py-4 font-medium">1</td>
            <td onClick={setPage} className="whitespace-nowrap px-2 py-4">{element.maker}</td>
            <td className="whitespace-nowrap px-2 py-4">{element.model}</td>
            <td className="whitespace-nowrap px-2 py-4">{element.year}</td>
            <td className="whitespace-nowrap px-2 py-4">{element.mileage}</td>
            <td className="whitespace-nowrap text-emerald-600 px-2 py-4">$ {element.price}</td>
        </tr>




    )
}