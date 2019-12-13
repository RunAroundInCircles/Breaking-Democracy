import React,{Component} from 'react';
import country from '../../Resources/Maps/country.svg.js';
import region1 from '../../Resources/Maps/Region-1.svg.js';
import region2 from '../../Resources/Maps/Region-2.svg.js';
import region3 from '../../Resources/Maps/Region-3.svg.js';
import region4 from '../../Resources/Maps/Region-4.svg.js';
import region5 from '../../Resources/Maps/Region-5.svg.js';
import region6 from '../../Resources/Maps/Region-6.svg.js';
import region7 from '../../Resources/Maps/Region-7.svg.js';
import region8 from '../../Resources/Maps/Region-8.svg.js';

/**
 * Generates a Map for the user so they can click on a region and zoom in on the region
 * @extends Component
 */
class Map extends Component{
	/**
	 * Generates the Map object
	 * @param {Property} props The initial parameters needed to setup the Map
	 */
	constructor(props) {
		super(props);

		this.mapRef = React.createRef();
		this.state = {
			onSelect: props.onSelect, //On click response passed from MapApp
			currentID: props.currentId //Current map to display
		}
	}

	/**
	 * Shows the map referenced by currentId
	 * @return {Div} Displays the current region or map based off the specific ID
	 */
	render(){
		var svg = {
			__html: this.props.currentId //Formats the map to be inserted as InnnerHTML
		}
		return <div className="country-map" dangerouslySetInnerHTML={svg} ref={this.mapRef}/> //Uses svg to display map
	}

	/**
	 * Attaches onSelect click event to all regions of the map
	 * @return {[Function]} The Function will be used to display the specified region or based off the ID given
	 */
	componentDidMount() {
		var func = this.state.onSelect; //Allows access to onSelect within the forEach
		//Iterates through all paths within the svg and attaches the click event to each path
		this.mapRef.current.querySelectorAll('g > path').forEach((region, index) => {
			region.addEventListener('click', function(event) {
				//Decides which region map to show based on what region is clicked on
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
			})
		});
	}
}
export default Map;
