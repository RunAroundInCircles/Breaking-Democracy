import React,{Component} from 'react';
import Calendar from './Calendar.js';
import './CalendarUI.css';
import Event from "./Event.js";


/**
 * Used to render the Calendar object
 * @extends React, Calendar, Event, ./CalendarUI.css
 */
class CalendarApp extends Component {
  /**
   * Converts the events passed in to objects containing a date and the message representing an event
   * @param {Property} props The parameters needed to setup the calendar
   */
    constructor(props) {
      super(props);

      this.state = {
          events: props.events.map((event) => {
            let date = new Date(event.year, event.month, event.day);
            return(
              {date: date, message: <Event key={event.id} message={event.message} date={date} id={event.id} status={event.status}/>}
            );
          })
      }
    }

	/**
   * Renders the calendar for the current month with all current events.
   * @return {div} Returns the calendar with all the events
   */
    render() {
        return(
            <div className="calendar-app">
                <Calendar callbackFromMain={this.callback} events={this.state.events} eventsCompleted={this.props.eventsCompleted}/>
            </div>
        )
    }

}

export default CalendarApp;
