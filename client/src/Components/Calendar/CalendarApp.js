import React,{Component} from 'react';
import Calendar from './Calendar.jsx';

import './CalendarUI.css';

class CalendarApp extends Component {
    constructor(props) {
		//Sets inital selected email to null and when an email is set to select it binds the selected email to be set.
      super(props);
    }
	//Renders the selected email, the email list and setting the selected email on a click.
    render() {
        return(
            <div className="calendar-app">
                <span className="icon">date_range</span>
                <Calendar />
            </div>
        )
    }

}

export default CalendarApp;
