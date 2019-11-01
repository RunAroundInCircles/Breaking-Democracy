import React,{Component} from 'react';
import svg from './democrastan.svg';

class Map extends Component{
	render(){
		return(
			<div className='mySvg'>
				<img src={svg}/>
			</div>
		);
	}
}
export default Map