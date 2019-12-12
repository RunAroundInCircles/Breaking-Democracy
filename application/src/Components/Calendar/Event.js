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
 * Renders the alert and allows the user to go back to the original calendar
 * @return {Link} An event that is able to go back to the original calendar
 */
    render() {

        let route = "/Calendar/" + this.props.id;
        return (
            <Link to={route} className="calendar-event-link">
                <Button className="calendar-event-button">
                    {this.props.message}
				</Button>
            </Link>
        );
    }
}

export default Event;
