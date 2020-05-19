import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import SearchForm from '../SearchForm/SearchForm';
import FoodDetails from '../FoodDetails/FoodDetails';
import AppContext from '../../AppContext';

function App() {

  const [results, setResults] = useState();
  const value = {
    results,
    setResults
  };

  return (
    <AppContext.Provider value={value}>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchForm} />
          <Route exact path="/food/:foodId" component={FoodDetails} />
        </Switch>
      </div>
    </AppContext.Provider>
  );
}

export default App;
