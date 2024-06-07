import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleBike, updateFavorite } from "../../apiCalls";
import "./BikeDetail.css";
import PropTypes from "prop-types";

export default function BikeDetail({ addFavoriteBike }) {
  const [bike, setBike] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const id = useParams().id;
  const navigate = useNavigate();

  const {
    make,
    model,
    suspensionTravel,
    wheelSize,
    description,
    imageUrl,
    ridingStyle,
    skillLevel,
    terrain,
    price,
    favorite,
  } = bike;

  useEffect(() => {
    async function loadBike() {
      try {
        const fetchedBike = await fetchSingleBike(id);
        if (fetchedBike.bike) {
          setBike(fetchedBike.bike);
        } else {
          navigate("*");
        }
      } catch (error) {
        navigate("*");
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    loadBike();
  }, [id]);

  async function toggleFavorite() {
    try {
      const updatedBike = await updateFavorite(id);
      setBike(updatedBike.bike);
      addFavoriteBike(updatedBike.bike);
    } catch (error) {
      if (!bike) {
        return <div>Loading...</div>;
      }
    }
  }

  function handleBack() {
    navigate(-1);
  }

  if (!bike) {
    return <div>Loading...</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!bike) {
    return null;
  }

  if (error) {
    return (
      <div className="all-bikes-error">
        <div>{`There was a problem getting your bike, please try again later ${error}`}</div>
        <Link to="/">
          <button className="home-button">Send Me Home</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="bike-detail">
      <div className="button-nav">
        <Link className="close-button" onClick={handleBack}>
          <box-icon color="#0662a0" name="window-close" size="lg"></box-icon>
        </Link>
        <Link className="favorite-button" onClick={toggleFavorite}>
          <box-icon
            name="heart"
            size="lg"
            color={favorite ? "red" : "#0662a0"}
          ></box-icon>
        </Link>
      </div>
      <h1 className="bike-make">{make}</h1>
      <h2 className="bike-model">{model}</h2>
      <h3 className="bike-stats">{`Suspension Travel: ${suspensionTravel}`}</h3>
      <h3 className="bike-stats">{`Wheel Size: ${wheelSize}"`}</h3>
      <h3 className="bike-stats">{`Price: $${price}`}</h3>
      <img
        src={imageUrl}
        alt={`mountain bike ${make} ${model}`}
        className="bike-detail-image"
      />
      <h4 className="bike-stats">{`Rider Skill Level: ${skillLevel}`}</h4>
      <h4 className="bike-stats">{`Terrain Suited For: ${terrain} - ${ridingStyle} Riding`}</h4>
      <p className="bike-description">{description}</p>
    </div>
  );
}

BikeDetail.propTypes = {
  addFavoriteBike: PropTypes.func.isRequired,
};
