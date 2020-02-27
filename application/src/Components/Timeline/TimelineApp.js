import React,{Component} from 'react';
import TimelineEvent from './TimelineEvent.js';
import Timeline from './Timeline.js';

/**
 * TimelineApp component of the app that renders and returns a TimelineEvent
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
 	* Renders a TimelineEvent given all current events..
 	* @return returns the div of a TimelineEvent Component that has all current events passed in.
 	*/
    render() {
        return(
            <div className="timeline-app">
                <Timeline/>
                <TimelineEvent timelineEvents={this.props.timelineEvents} eventsCompleted={this.props.eventsCompleted}/>
            </div>
        )
    }
}

export default TimelineApp;
