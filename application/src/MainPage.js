import React,{Component} from 'react';
import './App.css';
import MapApp from './Components/Map/MapApp.js';
import EmailApp from './Components/Email/EmailApp.js';
import CalendarApp from './Components/Calendar/CalendarApp.js';
import Echo from './Components/Echo/Echo.js'
import events from './Components/Calendar/EventList.json';
import emails from './Components/Email/EmailList.json';
import echos from './Components/Echo/echo.json';
import {Button, ButtonToolbar} from 'react-bootstrap';
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
						<Link to='/Calendar'> {/*Button to Calendar*/}
							<Button>
								<span>Calendar</span>
							</Button>
						</Link>
						&nbsp;
						&nbsp; {/*This adds spaces between the buttons*/}
						&nbsp;

						<Link to='/Email'>
							<Button> {/*Button to Email*/}
								<span>Email</span>
							</Button>
						</Link>

						&nbsp;
						&nbsp; {/*This adds spaces between the buttons*/}
						&nbsp;
						<Link to='/Map'>
							<Button> {/*Button to Map*/}
								<span>Map</span>
							</Button>
						</Link>
						
						&nbsp;
						&nbsp; {/*This adds spaces between the buttons*/}
						&nbsp;
						<Link to= '/Echo'>
							<Button>
								<span>Echo</span>
							</Button>
						</Link>
					</nav>
					
					<Switch>{/*The switch to click between pages.*/}
						<Route path='/Calendar'>
							<CalendarApp events={Object.values(events)}/>
							<Route path='/Calendar/:id' render={(props)=>{
								return <EventPopup event={events[props.match.params.id]}/>
							 }
							}/>
						</Route>
						<Route path='/Email'>
							<EmailApp emails={emails}/>
						</Route>
						<Route path='/Map'>
							<MapApp/>
						</Route>
						<Route path='/Echo'>
							<Echo echos={echos}/>
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}

}

export default MainPage
