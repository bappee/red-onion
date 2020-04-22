import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Header2 from './components/Header2/Header2';
import Nasta from './components/Nasta/Nasta';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dupur from './components/Dupur/Dupur';
import FoodDetails from './components/foodDetails/FoodDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Header2></Header2>

    <Router>
      <Switch>
         
      <Route exact path="/">
      
      <Nasta></Nasta>
    </Route>

        <Route path="/breakfast">
        <Nasta></Nasta>

        </Route>
        <Route path="/lunch">
         <Dupur></Dupur>
        </Route>
        <Route path="/product/:productName">
          <FoodDetails></FoodDetails>
        
       
        </Route>
      </Switch>
    </Router>
      
      
     
    </div>
  );
}

export default App;
