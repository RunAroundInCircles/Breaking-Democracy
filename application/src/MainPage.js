/*MIT License

Copyright (c) 2019 Caleb Logan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

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
import mainMusicMP3 from './Resources/Music/ThemeLoopable.mp3';
import mainMusicWAV from './Resources/Music/ThemeLoopable.wav';
import clickEffect from './Resources/Sound FX/MouseClick1.wav';
import Intro from './Intro';
import GoodEnding from './GoodEnding';
import BadEnding from './BadEnding';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { add, isBefore, isAfter, addDays } from 'date-fns';
import { createBrowserHistory } from "history";

/**
 * MainPage component of the app that renders and returns all the buttons
 * and allows you to switch between each page using reactRouter.
 * @extends React
 */
class MainPage extends Component{

/**
 * Creates the initial MainPage
 * @param {[type]} props The properties that set the MainPage to its initial state
 */
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
			//regionDistrictNames stores all of the names of the regions and districts to be displayed on the map
			//the first name in the array is the region, all subsequent are districts
			regionDistrictNames: {
				0: ["Saika","Rakka","Feidler","Larch","Broon","Lona La","Oglad","Prock"],
				1: ["Kaika","Ash","Holly","Kefler","Darby"],
				2: ["Flaze","Gretroit","Hearth","Magdo","Garde"],
				3: ["Libdove","Moka","Agon","Veera"],
				4: ["Osco","Proe","Haley"],
				5: ["Warren Central", "Warren Central"],
				6: ["Dukaste","Locke","Rehlat","Selia","Dukaste City"],
				7: ["Wegruesoe","Zaftan","Blektan","Wegruesoe City"]
			},
			//eventsCompleted is an array to hold all of the events that have been finished by the player after they complete them.
			eventsCompleted: [],
			currentEmails: [], //The current list of emails for the sprint we are on
			currentEchos: [], //The current list of echos for the sprint we are on
			currentSprint: 1, //The current two week interval we are on
			turnStartDate: new Date(2020, 2, 1, 0, 0, 0, 0),//turnStartDate is the beginning Date for the game February 1, 2020, indicates the start of the turn in Calendar
			renderVideo: true, //Determines whether the intro video or the game should be rendered
			gameEnded: false, //Determines whether the user has finished the game
			lastEventID: 0, //The last event in the game
			hasPlayerWon: false, //Check to see if the player won
			playerScore: 0 //Holds the score of the player
		}

    	//These are all the functions used by other files
		this.callback = this.callback.bind(this);
		this.setCurrentEmail = this.setCurrentEmail.bind(this);
		this.ifEmailExists = this.ifEmailExists.bind(this);
		this.setCurrentEcho = this.setCurrentEcho.bind(this);
		this.ifEchoExists = this.ifEchoExists.bind(this);
		this.handleVideoEnd = this.handleVideoEnd.bind(this);
		this.checkIfPlayerWon = this.checkIfPlayerWon.bind(this);
		this.update_main_loop = this.update_main_loop.bind(this);
		this.restartGame = this.restartGame.bind(this);

    	//Used to determine the last eventID
		var tempDate =  new Date(1 , 1, 1, 0, 0, 0, 0);
		//Find the eventID with the last day and month
		Object.values(events).map((event) => {
			let eventDate = new Date(event.year, event.month, event.day, 0, 0, 0, 0);
			if(isAfter(eventDate,tempDate)) {
					this.state.lastEventID = event.id;
					tempDate = eventDate;
			}
		});

		//Creates a history for the Router so that we can add './Email' to it
		//This allows us to skip the '/' page and go directly to './Email' instead
		let createdHistory = createBrowserHistory();
		createdHistory.push('./Email');
	}

    /**
  	 * Allows an external component to add entries to eventsCompleted and update the pollData
  	 * @param  {eventid}   eventsCompleted The id of the event completed.
  	 * @param  {percent}   eventsCompleted The percentage amount of change for the region's district
  	 */
  	callback = (eventid, percent) => {
  		//Get the region and district to change
  		var region = Math.floor(Math.random() * 8);
  		var district = Math.floor(Math.random() * this.state.pollData[region].length);

  		//Create the new completed event to add
  		var eventCompleted = {
  			eventID: eventid,
  			percent: percent,
  			region: this.state.regionDistrictNames[region][0], //Adds the name of the region
  			district: this.state.regionDistrictNames[region][district + 1] //Adds the name of the district
  		}

		let updatedData = this.state.pollData; //Update the poll data
		let difference = 50 - updatedData[region][district]; //Gets the difference of 50 and the old score

    	//Gets the ratio of the difference and a selected number
		//The selected number helps determine difficulty of the game, closer to 0 = easier, closer to 50 = harder
		let differenceRatio = difference/17;

    	if(differenceRatio < 0) differenceRatio *= -1;
		//Adds the difference of 50 and the current score times the percent change and the
		//ratio between the difference and a selected number so that
		//good changes get the score closer to 50% and bad scores drive the score away from 50%
  		updatedData[region][district] += (difference * percent * differenceRatio);

  		//Check if the updated poll is out of bounds
  		if(updatedData[region][district] > 100) {
  			updatedData[region][district] = 100;
		}
		else if(updatedData[region][district] < 0) {
			updatedData[region][district] = 0;
		}

		//Checks to see if the user has finished all events and if they won the game
		let updatedGameEnded = this.state.gameEnded;
		let updatedHasPlayerWon = this.state.hasPlayerWon;
		if(Object.values(this.state.eventsCompleted).length + 1 == Object.values(events).length) {
			updatedGameEnded = true;
			updatedHasPlayerWon = this.checkIfPlayerWon(updatedData);
		}

		//Get the event IDs between the two dates that need to be completed before the round can advance
		let eventsToComplete = this.getEventIDsBetween(this.state.turnStartDate, add(this.state.turnStartDate, {days: 13}));

		//Remove the newly completed event
		eventsToComplete.splice(eventsToComplete.indexOf(eventid), 1);

  		//Remove all completed event IDs from the array
  		this.state.eventsCompleted.map((completedEvent) => {
  			if(eventsToComplete.includes(completedEvent.eventID)) {
  				eventsToComplete.splice(eventsToComplete.indexOf(completedEvent.eventID), 1);
  			}
  		});

		//Check if the turn needs to be advanced
		let updatedTurnStartDate = this.state.turnStartDate;
		let updatedCurrentSprint = this.state.currentSprint;
  		while(eventsToComplete.length == 0 && !updatedGameEnded){
			//If all events are complete advance the turn counter
			updatedTurnStartDate = add(updatedTurnStartDate, {weeks: 2});

			//Update eventsToComplete to detect turns with no events
			eventsToComplete = this.getEventIDsBetween(updatedTurnStartDate, add(updatedTurnStartDate, {days: 13}));

			//Advance the sprint number
			updatedCurrentSprint += 1;
  		}

    	//Update the states that were affected by the completed event
		this.setState((state, props) => ({
			pollData: updatedData,
			eventsCompleted: [...state.eventsCompleted, eventCompleted],
			turnStartDate: updatedTurnStartDate,
			currentSprint: updatedCurrentSprint,
			gameEnded: updatedGameEnded,
			hasPlayerWon: updatedHasPlayerWon
		}));
    };

	/**
	 * Calculates whether the player won based off of their score
	 * The player wins when they have a majority of districts with scores
	 * between 40 and 60
	 * @param {data} data the data to use to calculate the player's score
	 * @returns {boolean} whether the player won or not
	 */
	checkIfPlayerWon = (data) =>{
		let i;
		let j;
		let districtsWon = 0;
		let districtsConservative = 0;
		let districtsLiberal = 0;
		let iterableData = Object.values(data);

    	//Loop through map data
		for(i = 0; i < iterableData.length; i++) {
			for(j = 0; j < iterableData[i].length; j++) {
				//If the player's score is within the range of 40-60 then the player has won the district
				//Remember that we want the country divided so that is why the range is 40-60
				if(iterableData[i][j] >= 40 && iterableData[i][j] <= 60) {
					districtsWon++;
				}
				else if(iterableData[i][j] > 60) {
					districtsConservative++;
				}
				else {
					districtsLiberal++;
				}
			}
		}

    	//If the player won the majority of the districts then the player has won
		if(districtsWon > districtsLiberal && districtsWon > districtsConservative){
			return true;
		}
		else {
			return false;
		}
	}

	/**
	 * Resets the game back to its initial attribute so the player can play again
	 */
  	restartGame = () =>{
		//Play button click sound effect
		new Audio(clickEffect).play();
		
		//Reset states back to initial values
		this.setState({
			eventsCompleted : [],
			currentEmails : [],
			currentEchos : [],
			currentSprint : 1,
			turnStartDate :  new Date(2020, 2, 1, 0, 0, 0, 0),
			renderVideo: false,
			gameEnded: false,
			lastEventID: 0,
			hasPlayerWon: false,
			playerScore: 0
		});
	}


	/**
   *
   * @param  {[type]} turnStartDate The start of the 2 week interval
   * @param  {[type]} turnEndDate   The end of the 2 week interval
   * @return {[type]}               Returns all of the event IDs between 2 dates
   */
	getEventIDsBetween = (turnStartDate, turnEndDate) => {
		let eventsBetween = [];

    	//Loops through all the events
		Object.values(events).map((event) => {
      		//Recieves the date from the event
			let eventDate = new Date(event.year, event.month, event.day, 0, 0, 0, 0);
      		//Checks to see if the event is within the 2 week interval
			if(!(isBefore(eventDate, turnStartDate) || isAfter(eventDate, turnEndDate))) {
        		event.status = 0;
        		eventsBetween.push(event.id);
			}
		});

    	//Returns a list of all events in the 2  weeks
		return eventsBetween;
	}


  /**
   * Determines if the email is currently being displayed
   * @param  {emails}     emails         The array of the currentEmails displayed.
   * @param  {foundEmail} foundEmail     The email that wants to be added to the current emails.
   * @return {[type]}                    Returns if the email already exists in the email reader
   */
	ifEmailExists(emails, foundEmail){
		for(var i in emails) {
			if(emails[i].currentSprint == foundEmail.currentSprint)
			{
				return false;
			}
		}
		return true;
	}

	/**
   * This function gets the current emails needed for the current sprint.
   * @param  {emails} emails The list of emails to be assessed and added to the current email list.
   */
	setCurrentEmail(emails) {
		for(var i in emails) {
			if(emails[i].currentSprint == this.state.currentSprint)
			{
				if(this.ifEmailExists(this.state.currentEmails, emails[i])){
					this.setState({currentEmails: [...this.state.currentEmails, emails[i]]});
				}
			}
		}
	}


  /**
   * checks if the passed in echo is already in the list of current echos.
   * If it is not then it returns True, else if it already exists in the list it returns False
   * @param  {echos}       echos      The array of the currentEchos displayed.
   * @param  {foundEcho}   foundecho  The echo that wants to be added to the current emails.
   */
	ifEchoExists(echos, foundEcho){
		for(var i in echos) {
			if(echos[i].time == foundEcho.time)
			{
				return false;
			}
		}
		return true;
	}

  /**
   * This function gets the current echoes needed for the current sprint.
   * 	@param  {echos} echos The list of echos to be assessed and added to the current echo list.
   */
	setCurrentEcho(echos) {
    	//Loops through all echoes
		for(var i in echos) {
     	//Checks if the echo has the current sprint
			if(echos[i].currentSprint == this.state.currentSprint)
			{
        		//If the echo already exists remove it from the list
				if(this.ifEchoExists(this.state.currentEchos, echos[i])){
          			this.state.currentEchos.unshift(echos[i]);
				}
			}
		}
	}

	/**
	 * Allows the main music to be paused or played when given a state
	 * @param  {[type]} state Determine if the audio should be paused or played
	 */
	update_main_loop = (state) => {
		var audio = document.getElementById("main-music");
		if(state == true){
			audio.play();
		}
		else{
			audio.pause();
		}

	}

	/**
	 * This function allows the calendar to update the turn date which allows the player to progress
	 * through the game.
	 */
	updateTurnStartDate  = () => {
		var newdate = addDays(13, this.state.turnStartDate);
		this.setState({
			turnStartDate :  newdate//Moves the turn date up by 2 weeks.
		});
	}

	/**
	 * This function is passed down to Intro so once the video has ended the game can be rendered
	 * Plays a button clicking sound if the event was triggered by a button click
	 * @param {boolean} clicked whether the event was triggered through a click or not
	 */
	handleVideoEnd(clicked) {
		if(clicked) new Audio(clickEffect).play();
		this.setState({renderVideo: false});
	}

	/**
	 * Renders the main page component
	 */
	render(){
		return(
			(this.state.renderVideo) //Check if the intro video should be rendered
			?(//Render video
				<div>
					<img className="desktop" src={desktop} alt="desktop"/>
					<Intro endedCallback={this.handleVideoEnd}/>
				</div>
			)
			:((this.state.gameEnded) //Check if the game has ended
				?((this.state.hasPlayerWon) //Check if the player has won
					?(//Render Good Ending
						<div>
							<img className="desktop" src={desktop} alt="desktop"/>
							<GoodEnding restartCallback={this.restartGame}/>
						</div>
					)
					:(//Render Bad Ending
						<div>
							<img className="desktop" src={desktop} alt="desktop"/>
							<BadEnding restartCallback={this.restartGame}/>
						</div>
					)
				)
				:(//render game
					//Adding history allows us to start on Email instead of the '/' page

					<Router history={createBrowserHistory().push('/Email')}>
						<div id="screen">
							<audio controls autoPlay loop id="main-music">
								<source src={mainMusicMP3} type="audio/mpeg"></source>
								<source src={mainMusicWAV} type="audio/wav"></source>
								Your Browser does not support the audio element.
							</audio>

							{this.setCurrentEmail(emails)}
							{this.setCurrentEcho(echos)}
							<img className="desktop" src={desktop} alt="desktop"/>
							<nav>
								<Link to='/Calendar'>
									<Button onClick={() => {new Audio(clickEffect).play()}}> {/*Button to Calendar*/}
										<span>Calendar</span>
									</Button>
								</Link>

								&nbsp;
								&nbsp; {/*This adds spaces between the buttons*/}
								&nbsp;

								<Link to='/Email'>
									<Button onClick={() => {new Audio(clickEffect).play()}}> {/*Button to Email*/}
										<span>Email</span>
									</Button>
								</Link>

								&nbsp;
								&nbsp; {/*This adds spaces between the buttons*/}
								&nbsp;

								<Link to='/Map'>
									<Button onClick={() => {new Audio(clickEffect).play()}}> {/*Button to Map*/}
										<span>Map</span>
									</Button>
								</Link>

								&nbsp;
								&nbsp; {/*This adds spaces between the buttons*/}
								&nbsp;

								<Link to= '/Echo'>
									<Button onClick={() => {new Audio(clickEffect).play()}}> {/*Button to Echo*/}
										<span>Echo</span>
									</Button>
								</Link>

								&nbsp;
								&nbsp; {/*This adds spaces between the buttons*/}
								&nbsp;

								<Link to= '/Timeline'>
									<Button onClick={() => {new Audio(clickEffect).play()}}> {/*Button to Timeline*/}
										<span>Timeline</span>
									</Button>
								</Link>
							</nav>

							<Switch>{/*The switch to click between pages.*/}
								<Route path='/Calendar'>
									<CalendarApp  events={Object.values(events)} eventsCompleted={this.state.eventsCompleted} turnStartDate={this.state.turnStartDate}/>
									<Route path='/Calendar/:id' render={(props)=>{
										return <EventPopup updateMainMusic={this.update_main_loop} callbackFromMain={this.callback} event={events[props.match.params.id]} situation = {Situations[Math.floor(Math.random()* 10)]}/>
										}
									}/>
								</Route>
								<Route path='/Email'>
									<EmailApp emails = {this.state.currentEmails}/>
								</Route>
								<Route path='/Map'>
									<MapApp pollData={this.state.pollData} regionDistrictNames={this.state.regionDistrictNames}/>
									<Route path='/Map/:id' render={(props)=>{
											return <MapRegion region={props.match.params.id} pollData={this.state.pollData} regionDistrictNames={this.state.regionDistrictNames}/>
										}
									}/>
								</Route>
								<Route path='/Echo'>
									<EchoApp echos={this.state.currentEchos}/>
								</Route>
								<Route path='/Timeline'>
									<TimelineApp events={Object.values(events)} eventsCompleted={this.state.eventsCompleted}/>
								</Route>
							</Switch>
						</div>
					</Router>
				)
    		)
		);
	}
}

export default MainPage
