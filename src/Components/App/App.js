import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';
import FoodDetails from '../FoodDetails/FoodDetails';
import Diary from '../Diary/Diary';
import AppContext from '../../AppContext';

//TODO: FOR TESTING ONLY. REMOVE BEFORE DEPLOYMENT
import sampleResults from '../../data/results';
import createFood from '../../Utilities/createFood';


function App() {

  const [results, setResults] = useState();
  const [diary, setDiary] = useState();
  

  //TODO: FOR TESTING ONLY, REMOVE BEFORE DEPLOYMENT
  const getFoods = (e) => {
    e.preventDefault();

    let samples = [];
    sampleResults.hints.forEach((value, index) => {
      samples.push(createFood.generateFood(value));
    });
  
   setResults(samples);
  }

  
  
  
  
  const value = {
    results,
    setResults,
    diary,
    setDiary,
    getFoods: getFoods
  };

  



  
  


  return (
    <AppContext.Provider value={value}>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Diary} />
          <Route exact path="/search" component={SearchForm} />
          <Route exact path="/food/:foodId" component={FoodDetails} />
          
        </Switch>
      </div>
    </AppContext.Provider>
  );
}

export default App;
