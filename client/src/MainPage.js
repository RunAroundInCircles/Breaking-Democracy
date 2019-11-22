import React,{Component} from 'react';
import './App.css';
import MapApp from './Components/MapApp.js';
import EmailApp from './Components/EmailApp.js';
import CalendarApp from './Components/Calendar/CalendarApp.js';
import events from './Components/Calendar/EventList.json';
import emails from './Components/EmailList.json';
import {Button, ButtonToolbar} from 'react-bootstrap';

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
				<div>
					<nav>

						<Link to='/Calendar'>
							<Button renderas='button'>
								<span>Calendar</span>
							</Button>
						</Link>
						&nbsp;
						&nbsp; {/*This adds spaces between the buttons*/}
						&nbsp;

						<Link to='/Email'>
							<Button renderas='button'>
								<span>Email</span>
							</Button>
						</Link>

						&nbsp;
						&nbsp; {/*This adds spaces between the buttons*/}
						&nbsp;
      
						<Link to='/Map'>
							<Button renderas='button'>
								<span>Map</span>
							</Button>
						</Link>
					</nav>

					<Switch>
						<Route path='/Calendar'>
							<CalendarApp events={events}/>
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
