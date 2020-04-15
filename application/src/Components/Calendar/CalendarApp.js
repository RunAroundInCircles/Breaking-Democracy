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
                <Calendar callbackFromMain={this.callback} events={this.state.events} eventsCompleted={this.props.eventsCompleted} turnStartDate={this.props.turnStartDate}/>
            </div>
        )
    }

}

export default CalendarApp;
