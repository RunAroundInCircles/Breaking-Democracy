import React,{Component} from 'react';

class Timeline extends Component{
	
	render(){
		return(
			<div 
				style={{display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'absolute',
				width: '100vw',
				height: '80vh'
        }}>
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

export default Timeline