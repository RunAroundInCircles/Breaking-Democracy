import React,{Component} from 'react';
import democristan from './Maps/country.svg.js';

class Map extends Component{

	constructor(props) {
		super(props);
		this.mapRef = React.createRef();
	}

	componentDidMount() {
		this.mapRef.current.querySelectorAll('g > path').forEach((district) => {
			district.addEventListener('click', function(event){
				district.style.fill = "orange";
			})
		});
	}

	render(){
		const svg = {
			__html: democristan
		}
		return <div dangerouslySetInnerHTML={svg} ref={this.mapRef} />
	}
}
export default Map
