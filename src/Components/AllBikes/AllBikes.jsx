import BikeCard from "../BikeCard/BikeCard"
import "./AllBikes.css"

export default function AllBikes({allBikes}) {
    const bikesToDisplay = allBikes.map(bike => {
        return (
            <BikeCard
            key={bike.id}
            id={bike.id}
            make={bike.make}
            model={bike.model}
            img={bike.imageUrl}
            suspensionTravel={bike.suspensionTravel}
            price={bike.price}
             />
        )
    })
    return (
        <div className="bikes-display">
            {bikesToDisplay}
        </div>
    )
}

{/* <div className="bike-card">
<h1>{make}</h1>
<h2>{model}</h2>
<img src={imageUrl}/>
<p>{suspensionTravel}</p>
<p>{price}</p>
</div> */}