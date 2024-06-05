import { useState, useEffect } from 'react';
import './App.css';
import { useParams, Routes, Route } from "react-router-dom"
import Header from "../Header/Header"
import { fetchBikes } from '../../apiCalls';
import BikesDisplay from '../BikesDisplay/BikesDisplay'
import Main from '../MainPage/MainPage';
import BikeDetail from '../BikeDetail/BikeDetail';
import MyBikes from '../MyBikes/MyBikes';
import Faq from '../Faq/Faq';
import ErrorPath from '../ErrorPath/ErrorPath';

function App() {
  const [allBikes, setAllBikes] = useState(['here'])
  // console.log('all', allBikes)
  useEffect(() =>  {
  async function loadData() {
    try {
      const fetchedData = await fetchBikes()
      console.log('fetch', fetchedData)
      setAllBikes(fetchedData.bikes)
    }
    catch(error) {
      console.log(error)
    }
  }
  loadData()
}, [])

function addFavoriteBike(bikeToFind) {
  const updatedBikes = allBikes.map(bike => {
      if (bike.id === bikeToFind.id) {
          return {
              ...bike,
              favorite: bike.favorite = !bike.favorite 
          };
      }
      return bike;
  });
  setAllBikes(updatedBikes);
  console.log(allBikes, 'allBikes');
}

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main allBikes={allBikes} />} />
        <Route path="/allbikes" element={<BikesDisplay allBikes={allBikes} />} />
        <Route path="/bikes/:id" element={<BikeDetail addFavoriteBike={addFavoriteBike}/>}/>
        <Route path="/mybikes" element={<MyBikes allBikes={allBikes} /> }/>
        <Route path="/faq" element={<Faq />} />
        {/* <Route path="/bikes/:*" element={<ErrorPath />} /> */}
        <Route path="*" element={<ErrorPath />} />
      </Routes>
    </div>
  );
}

export default App;

/* Psuedocode
- Components needed:
App
Header
Form for searching - pulldown menus
Form for user adding a bike of their own
bikes display 
bike card
bike detail
footer
- Api stuff: 
need to look up async await
will have seperate js file for all api functions:
get post delete
- Functions: 
will need a function to filter bike data by skillLevel
will need a function to filter data by terrain type
will need a function to submit data from the pull downs - Need to look up 
how to auto submit when a choice is chosen (or do I have some sort of submit 
or go button ?)
will need a function to submit the form data when a user adds their own bike -
bike should automatically go into favorites
Need to have a toggle function to be able to favorite a bike - favorited bikes 
should live in state in one of the components. spread it in [...pervBikes, newBike]
- Deleting will be an extension. 

need to have state that is bikes filtered by isFavorite
need to update a bikes favorite if heart is clicked
function toggleFavorite() {
const favorite = bike.favorite ? false : true
setBike({...bike,
  isFavorite: favorite
})
}
) */
