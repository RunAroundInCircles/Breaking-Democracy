import React,{Component} from 'react';
import Calendar from './Calendar.js';

import './CalendarUI.css';

class CalendarApp extends Component {
    constructor(props) {
		//sets initial events to specified date on the calendar.
      super(props);

      this.state = {
          events: props.events
      }
    }
	//Renders the calendar for the current month with all current events.
    render() {
        return(
            <div className="calendar-app">
                <Calendar events={this.props.events}/>
            </div>
        )
    }

}

export default CalendarApp;
