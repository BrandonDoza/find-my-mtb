import { useState } from "react";

export default function Main({ allBikes }) {
    const [filteredBikes, setFilteredBikes] = useState([])
    const [skillLevel, setSkillLevel] = useState("")
    const [terrain, setTerrain] = useState("")
    return (
        <div className="main-page">
            <h1>Find The Perfect Bike For You!</h1>
            <form className="search-form">
                <select
                id="skillLevel"
                value={skillLevel}
                name="skillLevel"
                >
                    <option value="">Choose Your Skill Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
                <select
                id="terrain"
                value={terrain}
                name="terrain"
                >
                    <option value="">Choose Your Terrain</option>
                    <option value="rocky">Rocky and Chunky</option>
                    <option value="smooth">Smooth and Flowy</option>
                    <option value="race">XC Race Course</option>
                    <option value="park">Bike Park</option>
                </select>
            </form>
        </div>
    )
}