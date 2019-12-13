import React,{Component} from 'react';
import Timeline from './Timeline.js';

/**
 * TimelineEvent component of the app that parses each event that is passed down from TimelineApp 
 * @extends React
 */
class TimelineEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //timelineevents contains all the events on the timeline given by TimelineApp
            timelineevents: props.timelineevents
        }
    }
	/**
 	* Renders each individual timeline event into its own event space
 	* @return returns the div heading and returns each parsed timeline event
 	*/
    render() {
        //The following mapping function finds the email that the user selected
        const timelineevents = this.props.timelineevents.map((one_event) => {
            return (<Timeline key={one_event.name}
                {...one_event}/>);
        });
        return(
            <div className="timeline-list">
                {/**/}
                <h1 className="Event-head">Timeline</h1>
                {timelineevents}
            </div>
        )
    }
}

export default TimelineEvent;
