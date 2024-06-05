import "./BikeCard.css"
import PropTypes from "prop-types"

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

BikeCard.propTypes = {
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    suspensionTravel: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
}