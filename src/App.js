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
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import Review from './components/Review/Review';

function App() {
  return (
    <div>
      <Header></Header>
     
 
    <Router>
      <Switch>
         
      <Route exact path="/">
        <Banner></Banner>
      <Header2></Header2>
      <Nasta></Nasta>
    </Route>

        <Route path="/breakfast">
        <Header2></Header2>
        <Nasta></Nasta>
        
        </Route>
        <Route path="/lunch">
        <Header2></Header2>
         <Dupur></Dupur>

        </Route>
        <Route path="/product/:productName">
          <FoodDetails></FoodDetails>
         
       
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/review">
        <Review></Review>
        </Route>
      </Switch>
    </Router>
      
      
     
    </div>
  );
}

export default App;
