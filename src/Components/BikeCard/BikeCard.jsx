export default function BikeCard({make, model, suspensionTravel, price, img}) {
    return (
        <div className="bike-card">
            <h1>{make}</h1>
            <h2>{model}</h2>
            <img src={img} alt={`picture of a ${make} ${model}`}/>
            <p>{suspensionTravel}</p>
            <p>{price}</p>
        </div>
    )
}