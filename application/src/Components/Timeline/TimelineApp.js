import React,{Component} from 'react';
import TimelineEvent from './TimelineEvent.js';

/**
 * TimelineApp component of the app that renders and returns a TimelineEvent
 * that is given all current events happening on the timeline.
 * @extends React
 */
class TimelineApp extends Component {
    constructor(props) {
		super(props);
    }
	/**
 	* Renders a TimelineEvent given all current events..
 	* @return returns the div of a TimelineEvent Component that has all current events passed in.
 	*/
    render() {
        return(
            <div className="timeline-app"> 
                <TimelineEvent 
                    timelineevents={this.props.timelineevents} 
                />				
            </div>
        )
    }
}

export default TimelineApp;