import React from 'react';
import './App.css';
import './Components/Calendar/CalendarUI.css';
import './Components/Email/EmailUI.css';
import './Components/Map/Map.css'

import MapApp from './Components/Map/MapApp.js';
import EmailApp from './Components/Email/EmailApp.js';
import CalendarApp from './Components/Calendar/CalendarApp.js';
import events from './Components/Calendar/EventList.json';
import MainPage from './MainPage.js';
import emails from './Components/Email/EmailList.json';
import Map from './Components/Map/Map.js'


function App() {
  return (
    //Contains all components of the game
    <div className="App">
	    {/*<EmailApp emails={emails}/> { Email component of game, takes in list of email json objects } */}
      {/*<MapApp/> {/*Map component of the game takes no props*/}
		  {/*<CalendarApp events={events}/>*/}
	  <MainPage/>
    </div>
  );
}

export default App;
