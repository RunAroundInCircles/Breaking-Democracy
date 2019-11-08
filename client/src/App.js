import React from 'react';
import './App.css';
import MapApp from './Components/MapApp.js';
import Map from './Components/Map.js'
import country from './Components/Maps/country.svg.js';

function App() {
  return (
    //Contains all components of the game
    <div className="App">
	{/*<EmailApp emails={emails}/> { Email component of game, takes in list of email json objects } */}
	  <MapApp currentId={country}/>
    </div>
  );
}

export default App;
