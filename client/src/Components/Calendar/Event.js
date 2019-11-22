import React,{Component} from 'react';

class Event extends Component {
    constructor(props) {
        //sets the initial date and message of each event on the calendar.
		super(props);

        this.state = {
            date: props.date,
            message: props.message
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {//Handles a click event on a event
        e.preventDefault(); //Prevent default behavior
        alert(this.state.message);
    }

    render() {
        return ( //renders the event onto the date's cell on the calendar
            <svg className="eventSVG" onClick={this.handleClick}>
                <g>
                    <rect width="1000" height="25%" fillOpacity=".25" fill="red"/>
                    <text x="0" y="15">{this.state.message}</text>
                </g>
            </svg>
        );
    }
}

export default Event;
