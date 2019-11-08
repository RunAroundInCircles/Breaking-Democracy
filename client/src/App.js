import React from 'react';
import './App.css';
import MapApp from './Components/MapApp.js';

function App() {
  return (
    //Contains all components of the game
    <div className="App">
	    {/*<EmailApp emails={emails}/> { Email component of game, takes in list of email json objects } */}
	    <MapApp/> {/*Map component of the game takes no props*/}
    </div>
  );
}

export default App;
