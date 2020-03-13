import React,{Component} from 'react';
import './App.css';
import MapApp from './Components/Map/MapApp.js';
import MapRegion from './Components/Map/MapRegion.js';
import EmailApp from './Components/Email/EmailApp.js';
import CalendarApp from './Components/Calendar/CalendarApp.js';
import EchoApp from './Components/Echo/EchoApp.js'
import events from './Components/Calendar/EventList.json';
import emails from './Components/Email/EmailList.json';
import echos from './Components/Echo/echo.json';
import {Button} from 'react-bootstrap';
import EventPopup from './Components/Calendar/EventPopup.js';
import TimelineApp from './Components/Timeline/TimelineApp.js'
import timelineEvents from './Components/Timeline/TimelineData.json';
import './MainPage.css';
import desktop from './Resources/Title_Computer.png';
import Situations from './Components/Calendar/Situations.json';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


/**
 * MainPage component of the app that renders and returns all the buttons
 * and allows you to switch between each page using reactRouter.
 * @extends React
 */
class MainPage extends Component{
  state = {
    eventsCompleted: []

  };

  /**
   * Allows the EventPopup component to say if the user has completed the game successfully.
   * @param  {ID}   eventsCompleted The id of the event completed.
   */
  callback = (eventsCompleted) => {
    this.state.eventsCompleted.push(eventsCompleted);
  };

	render(){
		return(

      <Router>
				<div id="screen">
        <img className="desktop" src={desktop} alt="desktop"/>
          <nav>
						<Link to='/Calendar'> {/*Button to Calendar*/}
							<Button id="calendar-button">
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

						&nbsp;
						&nbsp; {/*This adds spaces between the buttons*/}
						&nbsp;
						<Link to= '/Timeline'>
							<Button>
								<span>Timeline</span>
							</Button>
						</Link>
					</nav>

					<Switch>{/*The switch to click between pages.*/}
						<Route path='/Calendar'>
							<CalendarApp   events={Object.values(events)} eventsCompleted={this.state.eventsCompleted}/>
							<Route path='/Calendar/:id' render={(props)=>{
								return <EventPopup callbackFromMain={this.callback} event={events[props.match.params.id]} situation = {Situations[Math.floor(Math.random()* 10)]} eventsCompleted={this.state.eventsCompleted}/>
							 }
							}/>
						</Route>
						<Route path='/Email'>
							<EmailApp emails={emails}/>
						</Route>
						<Route path='/Map'>
							<MapApp/>
							<Route path='/Map/:id' render={(props)=>{
									return <MapRegion region={props.match.params.id}/>
								}
							}/>
						</Route>
						<Route path='/Echo'>
							<EchoApp echos={echos}/>
						</Route>
						<Route path='/Timeline'>
							<TimelineApp timelineEvents={timelineEvents} eventsCompleted={this.state.eventsCompleted}/>
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}

}

export default MainPage
