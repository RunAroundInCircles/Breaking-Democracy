import React from 'react';
import './App.css';
import EmailApp from './Components/EmailApp.js';
import emails from './Components/EmailList.json';

function App() {
  return (
    //Contains all components of the game
    <div className="App">
      <EmailApp emails={emails}/> {/* Email component of game, takes in list of email json objects */}
    </div>
  );
}

export default App;
