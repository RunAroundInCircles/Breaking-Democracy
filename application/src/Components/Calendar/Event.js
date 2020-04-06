import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

/**
 * Represents an event in the calendar. This is where users will be able
 * to start minigames and influence candidates
 * @extends React,react-router-dom
 */
class Event extends Component {
  const eventState = {
    LOCKED: 'locked',
    COMPLETED: 'completed',
    FAILED: 'failed',
    AVAILABLE: 'available'
  }


    /**
     * Creates the event to be shown within the calendar cells that allows the user to get more information about the specific event
     * @return {Link} An link to /Calendar/id of the event
     */
    render(/*State */) {
        let route = "/Calendar/" + this.props.id;
        //if( avilable ){
        return (
            <Link to={route} className="calendar-event-link">
                <Button className="calendar-event-button">
                    {this.props.message}
				</Button>
            </Link>
        );
        // }else if(locked){
        //
        // else if(completed){
        //
        //
        // }
        // else if(failed){
        //
        // }
    }
}

export default Event;
