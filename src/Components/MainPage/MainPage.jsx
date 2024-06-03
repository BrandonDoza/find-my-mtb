import { useState, useEffect } from "react";
import BikesDisplay from "../BikesDisplay/BikesDisplay"
import "./MainPage.css"

export default function Main({ allBikes }) {
    const [filteredBikes, setFilteredBikes] = useState([])
    console.log("🚀 ~ Main ~ filteredBikes:", filteredBikes)
    const [pullDownData, setPullDownData] = useState({
        skillLevel: "",
        terrain: ""
    })
    // const [terrain, setTerrain] = useState("")
//    console.log('skill', skillLevel)
//    console.log('terrain', terrain)
   function filterBikes(name, value) {
    const bikesByFilter = allBikes.filter(bike => {
        console.log(bike[name], 'here')
        return (bike[name].includes(value))
    })
    console.log(bikesByFilter, 'filteredBikes')
    // return bikesByFilter
    setFilteredBikes(bikesByFilter)
   }

   function handleChange(e) {
    const selectedValue = e.target.value
    const selectedName = e.target.name
    setPullDownData((prevData) => {
        return {...prevData,
            [selectedName]: selectedValue
        }
   })
   filterBikes(selectedName, selectedValue)
}

function handleSubmit(e) {
    e.preventDefault();
}

    return (
        <div className="main-page">
            <h1>Find The Perfect Bike For You!</h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <select
                id="skillLevel"
                value={pullDownData.skillLevel}
                name="skillLevel"
                onChange={(e) => {
                    e.preventDefault()
                    handleChange(e)}}
                >
                    <option value="">Choose Your Skill Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
                <select
                id="terrain"
                value={pullDownData.terrain}
                name="terrain"
                onChange={handleChange}
                >
                    <option value="">Choose Your Terrain</option>
                    <option value="Rocky">Rocky and Chunky</option>
                    <option value="Smooth">Smooth and Flowy</option>
                    <option value="Race">XC Race Course</option>
                    <option value="Park">Bike Park</option>
                </select>
            </form>
            <div className="filtered-bikes-display">
                {filteredBikes.length === 0 ? <h1>No Bikes Yet</h1> : <BikesDisplay allBikes={filteredBikes} />} 
            </div>
        </div>
    )
}