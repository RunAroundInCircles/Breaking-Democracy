import React,{Component} from 'react';
import './App.css';
import MapApp from './Components/MapApp.js';
import EmailApp from './Components/EmailApp.js';
import CalendarApp from './Components/Calendar/CalendarApp.js';
import events from './Components/Calendar/EventList.json';
import emails from './Components/EmailList.json';
import EventPopup from './Components/Calendar/EventPopup.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class MainPage extends Component{
	render(){
		return(
			<Router>
				<div id="screen">
					<nav>
						<ul>
							<li>
								<Link to='/Calendar'>Calendar</Link>
							</li>
							<li>
								<Link to='/Email'>Email</Link>
							</li>
							<li>
								<Link to='/Map'>Map</Link>								
							</li>
						</ul>
					</nav>
					
					<Switch>
						<Route path='/Calendar'>
							<CalendarApp events={events}/>
							<Route path='/Calendar/:id' component={EventPopup} />
						</Route>

						<Route path='/Email'>
							<EmailApp emails={emails}/>
						</Route>
						<Route path='/Map'>
							<MapApp/>
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}

}

export default MainPage
