import BikeCard from "../BikeCard/BikeCard"
import "./BikesDisplay.css"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

export default function AllBikes({allBikes, error}) {
    console.log(allBikes, 'allbikes from bikesdisplay')
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

    if (error) {
        return <div className="all-bikes-error">{`There was a problem loading the bikes, please try again later ${error}`}</div>
    } else {
    return (
        <div className="bikes-display">
            {bikesToDisplay}
        </div>
    )
}

AllBikes.propTypes = { 
    allBikes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)).isRequired
}
}

