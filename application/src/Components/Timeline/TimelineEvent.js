import React,{Component} from 'react';
//import Timeline from './Timeline.js'; Will be used later in production

/**
 * TimelineEvent component of the app that parses each event that is passed down from TimelineApp
 * @extends React
 */
class TimelineEvent extends Component {
    constructor(props) {
        super(props);
    }
	/**
 	* Renders each individual timeline event into its own event space
 	* @return returns the div heading and returns each parsed timeline event
 	*/
    render() {
        //The following mapping function finds the events and their results that need to be displayed
        var eventsFormated = [];
        var i;
        for(i = 0; i < this.props.eventsCompleted.length; i++) {
            var percent = (Math.random() * 2) - 1;
            percent = percent.toFixed(2);
            var fillColor = "grey";
            if(percent > 0) {
                percent = "+" + percent;
                fillColor = "green";
            }
            else if(percent < 0) {
                fillColor = "red";
            }
            var tooltipText =  this.props.events[i].message;
            eventsFormated.push(
                <svg height="100" width="100" style={{margin: 4}}>
                    <circle cx="50" cy="50" r="47" stroke="black" strokeWidth="3" fill={fillColor}>
                        <title>{tooltipText}</title>
                    </circle>
                    <text x="50" y="50" font-family="sans-serif" font-size="12px" fill="white" text-anchor="middle">{this.props.events[i].message}</text>
                </svg>
            );
        }

        return(
            <div className="timeline-list"
                style={{display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    width: '100vw',
                    height: '80vh'
                }}
            >
                {eventsFormated}
            </div>
        )
    }
}

export default TimelineEvent;
