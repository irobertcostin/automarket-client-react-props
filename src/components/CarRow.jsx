import { Button ,Popover} from "antd"
import App, { EDIT_PAGE } from "../App";

export default function CarRow({ element, set, setCarId  }) {

    let setPage = () => {
        set(EDIT_PAGE)
        setCarId(element.id)
    }






    return (




        <tr id={element.id}  className="border-b max-h-40  cursor-pointer text-slate-700  hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ease-in-out duration-500 ">
            <td className="whitespace-nowrap px-2 py-4 font-medium">{element.id}</td>
            <td onClick={setPage} className="whitespace-nowrap px-2 py-4 text-fuchsia-800"><Popover content="Click for more details">{element.maker}</Popover></td>
            <td className="whitespace-nowrap px-2 py-4">{element.model}</td>
            <td className="whitespace-nowrap px-2 py-4">{element.year}</td>
            <td className="whitespace-nowrap px-2 py-4">{element.mileage}</td>
            <td className="whitespace-nowrap text-emerald-600 px-2 py-4">$ {element.price}</td>
        </tr>




    )
}