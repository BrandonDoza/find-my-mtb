import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import { fetchBikes } from "../../apiCalls";
import BikesDisplay from "../BikesDisplay/BikesDisplay";
import Main from "../MainPage/MainPage";
import BikeDetail from "../BikeDetail/BikeDetail";
import MyBikes from "../MyBikes/MyBikes";
import Faq from "../Faq/Faq";
import ErrorPath from "../ErrorPath/ErrorPath";

function App() {
  const [allBikes, setAllBikes] = useState([]);
  const [error, setError] = useState("");
  const [myBikes, setMyBikes] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await fetchBikes();
        setAllBikes(fetchedData.bikes);
      } catch (error) {
        setError(error);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    function getMyBikes() {
      const filteredByFavorite = allBikes.filter((bike) => bike.favorite === true);
      setMyBikes(filteredByFavorite);
    }
    getMyBikes();
  }, [allBikes]);

  function addFavoriteBike(bikeToFind) {
    const updatedBikes = allBikes.map((bike) => {
      if (bike.id === bikeToFind.id) {
        return {
          ...bike,
          favorite: (bike.favorite = !bike.favorite),
        };
      }
      return bike;
    });
    setAllBikes(updatedBikes);
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main allBikes={allBikes} error={error} />} />
        <Route
          path="/allbikes"
          element={<BikesDisplay allBikes={allBikes} error={error} />}
        />
        <Route
          path="/bikes/:id"
          element={<BikeDetail addFavoriteBike={addFavoriteBike} />}
        />
        <Route
          path="/mybikes"
          element={<MyBikes myBikes={myBikes} error={error} />}
        />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<ErrorPath />} />
      </Routes>
    </div>
  );
}

export default App;
