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
import './MainPage.css';
import desktop from './Resources/Title_Computer.png';
import Situations from './Components/Calendar/Situations.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { add, isBefore, isAfter } from 'date-fns';


/**
 * MainPage component of the app that renders and returns all the buttons
 * and allows you to switch between each page using reactRouter.
 * @extends React
 */
class MainPage extends Component{

	constructor(props) {
		super(props);

		this.state = {
			//Only stores red data to reduce unneccesary data storage
			pollData: {
				0: [75, 75, 75, 75, 75, 75, 75],
				1: [25, 25, 25, 25],
				2: [62, 33, 51, 83],
				3: [75, 50, 57],
				4: [38, 51],
				5: [18],
				6: [70, 25, 89, 34],
				7: [21, 12, 37]
			},
			eventsCompleted: [],
			turnStartDate: new Date(2020, 2, 1, 0, 0, 0, 0)
		}
    
		this.callback = this.callback.bind(this);
	}

	/**
	 * Allows an external component to add entries to eventsCompleted and update the pollData
	 * @param  {eventid}   eventsCompleted The id of the event completed.
	 * @param  {percent}   eventsCompleted The percentage amount of change for the region's district
	 * @param  {region}	   eventsCompleted The id of the region to update
	 * @param  {district}  eventsCompleted The id of the district to update
	 */
	callback = (eventid, percent, region, district) => {
		var eventCompleted = {
			eventID: eventid,
			percent: percent,
			region: region,
			district: district
		}

		let updatedData = this.state.pollData;
		updatedData[region][district] += (updatedData[region][district] * percent)

		let turnEndDate = add(this.state.turnStartDate, {weeks: 2});
		let eventsToComplete = [];
		Object.values(events).map((event) => {
			let eventDate = new Date(event.year, event.month, event.day, 0, 0, 0, 0);
			if(!(isBefore(eventDate, this.state.turnStartDate) || isAfter(eventDate, turnEndDate))) {
				let containsDate = false;
				this.state.eventsCompleted.map((eventCompleted) => {
					if (eventCompleted.eventID == event.id) {
						containsDate = true;
					}
				})
				if(!(eventid == event.id || containsDate)) {
					eventsToComplete.push(event.id);
				}
			}
		});
		if(eventsToComplete.length == 0) {
			this.setState({turnStartDate: add(this.state.turnStartDate, {weeks: 2})});
		}

		this.setState({pollData: updatedData});
		this.setState({eventsCompleted: [...this.state.eventsCompleted, eventCompleted]});
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
							<CalendarApp   events={Object.values(events)} eventsCompleted={this.state.eventsCompleted} turnStartDate={this.state.turnStartDate}/>
							<Route path='/Calendar/:id' render={(props)=>{
								return <EventPopup callbackFromMain={this.callback} event={events[props.match.params.id]} situation = {Situations[Math.floor(Math.random()* 10)]}/>
							 }
							}/>
						</Route>
						<Route path='/Email'>
							<EmailApp emails={emails}/>
						</Route>
						<Route path='/Map'>
							<MapApp pollData={this.state.pollData}/>
							<Route path='/Map/:id' render={(props)=>{
									return <MapRegion region={props.match.params.id} pollData={this.state.pollData}/>
								}
							}/>
						</Route>
						<Route path='/Echo'>
							<EchoApp echos={echos}/>
						</Route>
						<Route path='/Timeline'>
							<TimelineApp  events={Object.values(events)} eventsCompleted={this.state.eventsCompleted}/>
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}

}

export default MainPage
