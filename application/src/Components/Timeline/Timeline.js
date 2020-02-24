import React,{Component} from 'react';
import { isThisHour } from 'date-fns';

/**
 * Timeline component of the app that renders the svg file for the timeline.
 * @extends React
 */
class Timeline extends Component{
	/**
 	* Renders the timeline.
 	* @return returns the div of the svg image for the timeline.
 	*/
	render(){
		return(
			<div className="timeline-line" 
				style={{display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'absolute',
					width: '100vw',
					height: '80vh'
        		}}
			>
				<svg height="50" width="50">
  					<polygon points="0,25 50,0 50,50" style={{fill: 'grey', stroke: 'red', strokeWidth: 3}}/>
				</svg>
				<svg height="50" width="100vw">
  					<line x1="0" y1="25" x2="100vw" y2="25" style={{stroke: 'red', strokeWidth:3}} />
				</svg>
				<svg height="50" width="50">
  					<polygon points="50,25 0,0 0,50" style={{fill: 'grey', stroke: 'red', strokeWidth: 3}}/>
				</svg>
			</div>
		)
	}
}

export default Timeline; //Export Timeline to be used by other files