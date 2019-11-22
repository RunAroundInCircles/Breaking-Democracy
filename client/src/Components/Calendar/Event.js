import React,{Component} from 'react';

class Event extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: props.date,
            message: props.message
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault(); //Prevent default behavior
        alert(this.state.message);
    }

    render() {
        return (
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
