import React,{Component} from 'react';
import democristan from './Maps/democristan.svg.js';

class Map extends Component{
	
	render(){
		const svg = {
			__html: democristan
		}
		return <div dangerouslySetInnerHTML={svg}/>;
	}
}
export default Map