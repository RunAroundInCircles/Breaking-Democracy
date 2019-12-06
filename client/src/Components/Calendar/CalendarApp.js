import React,{Component} from 'react';
import Calendar from './Calendar.js';
import './CalendarUI.css';
import Event from "./Event.js";

class CalendarApp extends Component {
    constructor(props) {
		//sets initial events to specified date on the calendar.
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
	//Renders the calendar for the current month with all current events.
    render() {
        return(
            <div className="calendar-app">
                <Calendar events={this.state.events}/>
            </div>
        )
    }

}

export default CalendarApp;
