export default function CarModal({element}){



    return(
        <div className="w-[325px] h-[150px] rounded-lg p-4  text-[15px] flex flex-col justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]" key={element.id}>
            <p>Maker: {element.maker}</p>
            <p>Model: {element.model}</p>
            <p>Year: {element.year}</p>
            <p>Price: {element.price}</p>
            <p>Km: {element.mileage}</p>
        </div>
    )
}