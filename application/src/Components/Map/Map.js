import React,{Component} from 'react';
import country from '../../Resources/Maps/country.svg.js';

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
		this.state = {
			regions: {
				0: {red:10, blue:90},
				1: {red:10, blue:90},
				2: {red:10, blue:90},
				3: {red:10, blue:90},
				4: {red:10, blue:90},
				5: {red:10, blue:90},
				6: {red:10, blue:90},
				7: {red:10, blue:90},
				8: {red:10, blue:90}
			}
		}

		this.mapRef = React.createRef();
	}

	/**
	 * Shows the map referenced by currentId
	 * @return {Div} Displays the current region or map based off the specific ID
	 */
	render(){
		var svg = {
			__html: country //Formats the map to be inserted as InnnerHTML
		}
		return <div className="country-map" dangerouslySetInnerHTML={svg} ref={this.mapRef}/> //Uses svg to display map
	}

	/**
	 * Attaches onSelect click event to all regions of the map
	 * @return {[Function]} The Function will be used to display the specified region or based off the ID given
	 */
	componentDidMount() {
		var func = this.props.onSelect; //Allows access to onSelect within the forEach
		//Iterates through all paths within the svg and attaches the click event to each path
		this.mapRef.current.querySelectorAll('g > path').forEach((region, index) => {
			region.addEventListener('click', function(event) {
				//Decides which region map to show based on what region is clicked on
				func(index);			
			})
		});
	}
}
export default Map;
