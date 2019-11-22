import React,{Component} from 'react';
import Calendar from './Calendar.js';
import './CalendarUI.css';
import Event from "./Event.js";

class CalendarApp extends Component {
    constructor(props) {
		//Sets inital selected email to null and when an email is set to select it binds the selected email to be set.
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
	//Renders the selected email, the email list and setting the selected email on a click.
    render() {
        return(
            <div className="calendar-app">
                <Calendar events={this.state.events}/>
            </div>
        )
    }

}

export default CalendarApp;
