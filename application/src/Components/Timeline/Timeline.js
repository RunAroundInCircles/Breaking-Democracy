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
//import { isThisHour } from 'date-fns'; Will be used later in production

/**
 * Timeline component of the app that renders the svg file for the timeline.
 * @extends React
 */
class Timeline extends Component{

	state = {
    eventsCompleted: this.props.eventsCompleted
  };

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
				{/*Left Arrow*/}
				<svg height="50" width="50">
					<polygon 
						points="0,25 50,0 50,50" 
						style={{fill: 'grey', stroke: 'red', strokeWidth: 3}}
						onclick={this.props.viewPreviousEventGroup}
					/>
				</svg>
				{/*Line*/}
				<svg height="50" width="100vw">
  					<line x1="0" y1="25" x2="100%" y2="25" style={{stroke: 'red', strokeWidth:3}} />
				</svg>
				{/*Right Arrow*/}
				<svg height="50" width="50">
					<polygon 
						points="50,25 0,0 0,50" 
						style={{fill: 'grey', stroke: 'red', strokeWidth: 3}} 
						onClick={this.props.viewNextEventGroup}
					/>
				</svg>
			</div>
		)
	}
}

export default Timeline; //Export Timeline to be used by other files
