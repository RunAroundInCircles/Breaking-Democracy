import React,{Component} from 'react';
import Calendar from './Calendar.js';
import './CalendarUI.css';
import Event from "./Event.js";


/**
 * Used to add events to the calendar
 * @extends React, Calendar, Event, ./CalendarUI.css
 */
class CalendarApp extends Component {
  /**
   * Sets initial events to specified date on the calendar.
   * @param {Property} props The parameters needed to setup the calendar
   */
    constructor(props) {

      super(props);

      this.state = {
          events: props.events.map((event) => {
            let date = new Date(event.year, event.month, event.day);
            return(
              {date: date, message: <Event key={event.id} message={event.message} date={date} id={event.id}/>}
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
                <Calendar events={this.state.events}/>
            </div>
        )
    }

}

export default CalendarApp;
