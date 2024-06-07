import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BikesDisplay from "../BikesDisplay/BikesDisplay"
import "./MainPage.css"
import About from '../About/About';
import PropTypes from "prop-types"

export default function Main({ allBikes, error }) {
    const [filteredBikes, setFilteredBikes] = useState([])
    console.log("🚀 ~ Main ~ filteredBikes:", filteredBikes)
    const [pullDownData, setPullDownData] = useState({
        skillLevel: "",
        terrain: ""
    })
    // console.log('pullme', pullDownData)
    useEffect(() => {
        const savedPullDownData = localStorage.getItem('pullDownData');
        if (savedPullDownData) {
            // console.log((savedPullDownData, 'pulldata<><><><><><'))
            const parsedData = JSON.parse(savedPullDownData);
            console.log(parsedData, 'parsed<><><><><><><><><')
            setPullDownData(parsedData);
            filterBikes(parsedData, allBikes); // Filter bikes with the saved data
        } else {
            setFilteredBikes([]); // No filter applied initially
        }
    }, [allBikes]);

    // useEffect(() => {
    //     localStorage.setItem('pullDownData', JSON.stringify(pullDownData));
    //     filterBikes(pullDownData, allBikes);
    //     console.log('pull form set local', pullDownData)
    // }, [pullDownData]);

    function filterBikes(data, bikes) {
        let filtered = bikes;
        if (data.skillLevel) {
            filtered = filtered.filter(bike => bike.skillLevel.includes(data.skillLevel));
        }
        if (data.terrain) {
            filtered = filtered.filter(bike => bike.terrain.includes(data.terrain));
        }
        setFilteredBikes(filtered);
        // console.log("🚀 ~ in filterBikes ~ filteredBikes:", filteredBikes)
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setPullDownData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        // console.log('here')
        localStorage.setItem('pullDownData', JSON.stringify(pullDownData));
        filterBikes(pullDownData, allBikes);
    };

    function resetSearch() {
        setPullDownData({
            skillLevel: "",
            terrain: ""
        })
        localStorage.setItem('pullDownData', JSON.stringify(pullDownData))
        setFilteredBikes([])
    }



if (error) {
    return <div className="all-bikes-error">{`There was a problem loading the site, please try again later ${error}`}</div>
    } else {
    return (
        <div className="main-page">
            <h1>Find The Perfect Bike For You!</h1>
            <form className="search-form">
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
                <Link onClick={resetSearch} className="refresh-search">
                <box-icon name='refresh' size='lg' color='#0662a0'></box-icon>
                </Link>
                <Link onClick={handleSubmit} className="submit-search">
                <box-icon name='send' size='md' color='#0662a0'></box-icon>
                </Link>
            </form>
            <div>
                {filteredBikes.length === 0 ? <About className="filtered-bikes-display"/> : <BikesDisplay allBikes={filteredBikes} />} 
            </div>
        </div>
    )
}
}

Main.propTypes = { 
    allBikes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)).isRequired
}