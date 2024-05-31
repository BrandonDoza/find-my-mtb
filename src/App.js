import './App.css';
import { Router, Link, NavLink } from "react-router-dom"
import Header from "./Components/Header/Header"

function App() {
  return (
    <div className="App">
      <Header />
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
) */
