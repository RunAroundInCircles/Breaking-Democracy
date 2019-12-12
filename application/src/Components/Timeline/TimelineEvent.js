import React,{Component} from 'react';
import Timeline from './Timeline.js';


class TimelineEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //emails is a list of all the emails passed down from EmailApp
            timelineevents: props.timelineevents
        }
    }
    render() {
        //The following mapping function finds the email that the user selected
        const timelineevents = this.props.timelineevents.map((one_event) => {
            return (<Timeline key={one_event.name}
                {...one_event}/>);
        });
        return(
            <div className="timeline-list">
                {/*&nbsp adds a single space before Inbox that lines up the word Inbox with the other emails when being displayed.*/}
                <h1 className="Event-head">Timeline</h1>
                {timelineevents}
            </div>
        )
    }
}

export default TimelineEvent;
