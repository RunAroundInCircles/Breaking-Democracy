import React,{Component} from 'react';
import {Link, useParams} from "react-router-dom";

/**
 * Represents an event in the calendar. This is where users will be able
 * to start minigames and influence candidates
 * @extends React,react-router-dom
 */
class Event extends Component {
  /**
   * Constructor for creating a new event
   * @param {Properties} props Parameters to create a new event
   */
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

/**
 * Handles a click event on a event
 * @param  {Event} e Click Event
 * @return {Alert}  Displays the event to the user
 */
    handleClick(e) {
        e.preventDefault(); //Prevent default behavior
        alert(this.state.message);
    }

/**
 * Renders the alert and allows the user to go back to the original calendar
 * @return {Link} An event that is able to go back to the original calendar
 */
    render() {

        let route = "/Calendar/" + this.props.id;
        return (
            <Link to={route}>{this.props.message}</Link>
        );
    }
}

export default Event;
