export default function CarModal({element}){



    return(
        <div className="w-[350px] h-[200px] bg-slate-300 rounded-lg p-4 font-bold text-blue shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]" key={element.id}>
            <p>Maker: {element.maker}</p>
            <p>Model: {element.model}</p>
            <p>Year: {element.year}</p>
            <p>Price: {element.price}</p>
            <p>Mileage{element.mileage}</p>
        </div>
    )
}