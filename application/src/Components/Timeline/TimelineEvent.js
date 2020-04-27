/*MIT License

Copyright (c) 2019 Caleb Logan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import React,{Component} from 'react';

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
        var eventsFormated = [];                                            //Structure to contain events while they are being generated
        let options = {year: 'numeric', month: 'short', day: 'numeric'};    //Format how the dates will be displayed
        var i;
        for(i = 0; i < this.props.eventsCompleted.length; i++) {
            var completedEvent = this.props.eventsCompleted[i]; //Get the next completed event
            var event = this.props.events[completedEvent.eventID]; //Get the details of the completed event
            var fillColor = "grey"; //Start the color as grey
            var percentText = completedEvent.percent; //Get the percentage change
            if(completedEvent.percent > 0) { //If a positive change set color to green
                percentText = "+" + percentText;
                fillColor = "green";
            }
            else if(completedEvent.percent < 0) { //If negative change set color to red
                fillColor = "red";
            }
            let date = new Date(event.year, event.month, event.day); //Get the date of the event
            var tooltipText =  //Format the tooltip text to be the date, event message, the region effected, and the district effected
                date.toLocaleDateString("en-US", options) 
                + "\n" + event.message
                + "\n" + "Region: " + completedEvent.region
                + "\n" + "District: " + completedEvent.district;
            eventsFormated.push(
                <svg height="100" width="100" style={{margin: 4}}>
                    <circle cx="50" cy="50" r="47" stroke="black" strokeWidth="3" fill={fillColor}>
                        <title>{tooltipText}</title>
                    </circle>
                    <text x="50" y="50" font-family="sans-serif" font-size="20px" fill="white" text-anchor="middle">{percentText}</text>
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
