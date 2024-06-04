import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleBike } from "../../apiCalls";
import "./BikeDetail.css"

export default function BikeDetail() {
    const [bike, setBike] = useState({})
    const id = useParams().id
    const navigate = useNavigate()
    
    function handleBack() {
        navigate(-1)
    }

    useEffect(() => {
        async function loadBike() {
            try {
                const fetchedBike = await fetchSingleBike(id)
                console.log('fetch', fetchedBike)
                setBike(fetchedBike.bike)
            }
            catch(error) {
                console.log(error)
            }
        }
        loadBike()
    }, [])

    if (!bike) {
        return <div>Loading...</div>;
    }
    const {make, model, suspensionTravel, wheelSize, description, imageUrl,
        ridingStyle, skillLevel, terrain, price} = bike
    return (
        <div className="bike-detail">
            <Link className="close-button" onClick={handleBack}>
            <box-icon color="#0662a0" name='window-close'size="lg"></box-icon>
            </Link>
            <h1 className="bike-make">{make}</h1>
            <h2 className="bike-model">{model}</h2>
            <h3 className="bike-stats">{`Suspension Travel: ${suspensionTravel}`}</h3>
            <h3 className="bike-stats">{`Wheel Size: ${wheelSize}"`}</h3>
            <h3 className="bike-stats">{`Price: $${price}`}</h3>
            <img src={imageUrl} alt={`mountain bike ${make} ${model}`} className="bike-detail-image"/>
            <h4 className="bike-stats">{`Rider Skill Level: ${skillLevel}`}</h4>
            <h4 className="bike-stats">{`Terrain Suited For: ${terrain} - ${ridingStyle} Riding`}</h4>
            <p className="bike-description">{description}</p>
        </div>
    )
}