import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

/**
 * Represents an event in the calendar. This is where users will be able
 * to start minigames and influence candidates
 * @extends React,react-router-dom
 */
class Event extends Component {
    /**
     * Creates the event to be shown within the calendar cells that allows the user to get more information about the specific event
     * @return {Link} An link to /Calendar/id of the event
     */
    render() {
        let route = "/Calendar/" + this.props.id;


        if(this.props.status == 0){ //Ready to play
          return (
              <Link to={route} className="calendar-event-link">
                  <Button className="calendar-event-button">
                      {this.props.message}
				                </Button>
              </Link>
          );
        }
      else if(this.props.status == 2){ //Completed
          return (
        <Link to={route} className="calendar-event-link">
            <Button className="calendar-event-button-completed">
                {this.props.message}
                  </Button>
        </Link>
        );
      }
      else if(this.props.status == 3){ //failed
          return (
        <Link to={route} className="calendar-event-link">
            <Button className="calendar-event-button-failed">
                {this.props.message}
                  </Button>
        </Link>
        );
      }
      else { //locked
          return (
        <Link to={route} className="calendar-event-link">
            <Button className="calendar-event-button-locked">
                {this.props.message}
                  </Button>
        </Link>
        );
      }
    }
}

export default Event;
