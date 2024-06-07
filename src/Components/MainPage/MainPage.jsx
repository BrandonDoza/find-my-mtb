import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BikesDisplay from "../BikesDisplay/BikesDisplay";
import "./MainPage.css";
import About from "../About/About";
import PropTypes from "prop-types";

export default function Main({ allBikes, error }) {
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [pullDownData, setPullDownData] = useState({
    skillLevel: "",
    terrain: "",
  });

//   console.log(filteredBikes, 'filt')

  useEffect(() => {
    const savedPullDownData = localStorage.getItem("pullDownData");
    if (savedPullDownData) {
      const parsedData = JSON.parse(savedPullDownData);
      setPullDownData(parsedData);
      filterBikes(parsedData, allBikes);
    } else {
      setFilteredBikes([]);
    }
  }, [allBikes]);

  function filterBikes(data, bikes) {
    let filtered = bikes;
    if (data.skillLevel) {
      filtered = filtered.filter((bike) =>
        bike.skillLevel.includes(data.skillLevel)
      );
    }
    if (data.terrain) {
      filtered = filtered.filter((bike) => bike.terrain.includes(data.terrain));
    }
    setFilteredBikes(filtered);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setPullDownData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("pullDownData", JSON.stringify(pullDownData));
    filterBikes(pullDownData, allBikes);
  }

  function resetSearch() {
    setPullDownData({
      skillLevel: "",
      terrain: "",
    });
    localStorage.clear();
    setFilteredBikes([]);
  }

  if (error) {
    return (
      <div className="all-bikes-error">{`There was a problem loading the site, please try again later ${error}`}</div>
    );
  } else {
    return (
      <div className="main-page">
        <h1 id="display-text">Find The Perfect Bike For You!</h1>
        <form className="search-form">
          <select
            id="skillLevel"
            value={pullDownData.skillLevel}
            name="skillLevel"
            onChange={(e) => {
              e.preventDefault();
              handleChange(e);
            }}
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
            <box-icon name="refresh" size="lg" color="#0662a0"></box-icon>
          </Link>
          <Link onClick={handleSubmit} className="submit-search">
            <box-icon name="send" size="md" color="#0662a0"></box-icon>
          </Link>
        </form>
        <div>
          {filteredBikes.length === 0 ? (
            <About className="filtered-bikes-display" />
          ) : (
            <BikesDisplay allBikes={filteredBikes} />
          )}
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  allBikes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
