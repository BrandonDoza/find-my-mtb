import "./BikeCard.css"

export default function BikeCard({make, model, suspensionTravel, price, img}) {
    return (
        <div className="bike-card">
            <h1>{make}</h1>
            <h2>{model}</h2>
            <img src={img} alt={`picture of a ${make} ${model}`}/>
            <p>{`Suspension Travel : ${suspensionTravel}mm`}</p>
            <p>{`Price : $${price}`}</p>
        </div>
    )
}