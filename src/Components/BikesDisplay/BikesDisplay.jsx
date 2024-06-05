import BikeCard from "../BikeCard/BikeCard"
import "./BikesDisplay.css"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

export default function AllBikes({allBikes}) {
    const bikesToDisplay = allBikes.map(bike => {
        return (
            <NavLink to={`/bikes/${bike.id}`} key={bike.id} className="link">
            <BikeCard
            id={bike.id}
            make={bike.make}
            model={bike.model}
            img={bike.imageUrl}
            suspensionTravel={bike.suspensionTravel}
            price={bike.price}
             />
            </NavLink>
        )
    })
    return (
        <div className="bikes-display">
            {bikesToDisplay}
        </div>
    )
}

AllBikes.propTypes = { 
    allBikes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)).isRequired
}

