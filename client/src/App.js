import React from 'react';
import './App.css';
import EmailApp from './Components/EmailApp.js';
import emails from './Components/EmailList.json';

function App() {
  return (
    <div className="App">
      <EmailApp emails={emails}/>
    </div>
  );
}

export default App;
