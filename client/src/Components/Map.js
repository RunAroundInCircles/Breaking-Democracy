import React,{Component} from 'react';
import MapRegion from './MapRegion.js';
import country from './Maps/country.svg.js';
import region1 from './Maps/Region-1.svg.js';
import region2 from './Maps/Region-2.svg.js';
import region3 from './Maps/Region-3.svg.js';
import region4 from './Maps/Region-4.svg.js';
import region5 from './Maps/Region-5.svg.js';
import region6 from './Maps/Region-6.svg.js';
import region7 from './Maps/Region-7.svg.js';
import region8 from './Maps/Region-8.svg.js';

class Map extends Component{
	constructor(props) {
		super(props);

		this.mapRef = React.createRef();
		this.state = {
			selectedRegion: props.selectedRegion,
			onSelect: props.onSelect,
			currentID: props.currentId
		}
		this.displayRegionMap = this.displayRegionMap.bind(this);
	}

	displayRegionMap(id) {
		this.setState({currentID: id})
	}

	render(){
		var svg = {
			__html: this.props.currentId
		}
		return <div className="country-map" dangerouslySetInnerHTML={svg} ref={this.mapRef}/>
	}

	componentDidMount() {
		/*const regions = this.props.regions.map((region) => {
			return (<MapRegion key={region.id}
				selectedRegion={this.props.selectedRegion && this.props.selectedRegion.id === region.id}
				onSelect={this.props.onSelect}
				{...region}/>);
			});
		*/

		var func = this.state.onSelect;
		this.mapRef.current.querySelectorAll('g > path').forEach((region, index) => {
			region.addEventListener('click', function(event) {


				switch(index){
						case 0:
							func(region1);
						break;
						case 1:
							func(region2);
						break;
						case 2:
							func(region3);
						break;
						case 3:
							func(region4);
						break;
						case 4:
							func(region6);
						break;
						case 5:
							func(region5);
						break;
						case 6:
							func(region8);
						break;
						case 7:
							func(region7);
						break;
						default:
							func(country);
						break;


				}


				//func(region.id);

				this.mapRef = React.createRef();
				const svg = {
					__html: region.id
				}
				return <div classsName="region-map" dangerouslySetInnerHTML={svg} ref={this.mapRef} />

				//console.log('1');
				//return (<MapRegion key={region.id}
					//selected={this.props.selectedRegion && this.props.selectedRegion.id === region.id}
					//onSelect={this.props.onSelect}
					//>);
				}
			)
		});
		//console.log(region);
		//if(region != "undefined") {
			//this.setState({currentID: region.id});
		//}

	}
}
export default Map;
