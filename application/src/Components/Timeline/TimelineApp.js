import React,{Component} from 'react';
import TimelineEvent from './TimelineEvent.js';
import Timeline from './Timeline.js';

/**
 * TimelineApp component of the app that renders and returns a Timeline which
 * gives the physical timeline object and a TimelineEvent
 * that is given all current events happening on the timeline.
 * @extends React
 */
class TimelineApp extends Component {
// This code snippet will be used later in production
/*    constructor(props) {
		super(props);
    }
    */
   
	/**
 	* Renders a Timeline and a TimelineEvent given all current events.
 	* @return returns the div of a Timeline and a TimelineEvent Component that has all current events passed in.
 	*/
    render() {
        return(
            <div className="timeline-app">
                <Timeline/>
                <TimelineEvent timelineEvents={this.props.timelineEvents}/>
            </div>
        )
    }
}

export default TimelineApp;
