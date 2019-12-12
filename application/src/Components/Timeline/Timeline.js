import React,{Component} from 'react';

class Timeline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name, //Name of the event
            date: props.date, //date of the event
            description: props.description //Description of the event
        }
        
    }

/**
 * Renders each individual timeline event on the timeline
 * @return returns the div of the indvidual timeline event in the timeline list
 */
    render() {
        return (
            <div className='timelineEvent-selected' onClick={this.handleClick}>
				<h1>{this.state.name}</h1> {/* Name of the Event */}
                <h2>{this.state.date}</h2> {/* Date of the Event */}
                <h3>{this.state.description}</h3> {/* Description of the Event */}
            </div>
        );
    }
}

export default Timeline; //Export Timeline to be used by other files
