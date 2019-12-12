import React,{Component} from 'react';
import TimelineEvent from './TimelineEvent.js';

class TimelineApp extends Component {
    constructor(props) {
		super(props);
    }
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