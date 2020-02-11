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
			//regions stores the color information for all of the different regions in the map
			regions: { 
				0: {red: 255 * Math.random(), blue: 255 * Math.random()},
				1: {red: 255 * Math.random(), blue: 255 * Math.random()},
				2: {red: 255 * Math.random(), blue: 255 * Math.random()},
				3: {red: 255 * Math.random(), blue: 255 * Math.random()},
				4: {red: 255 * Math.random(), blue: 255 * Math.random()},
				5: {red: 255 * Math.random(), blue: 255 * Math.random()},
				6: {red: 255 * Math.random(), blue: 255 * Math.random()},
				7: {red: 255 * Math.random(), blue: 255 * Math.random()},
				8: {red: 255 * Math.random(), blue: 255 * Math.random()}
			}
		}

		this.mapRef = React.createRef();
	}

	/**
	 * Shows the country map
	 * @return {Div} Displays the country map
	 */
	render(){
		var svg = {
			__html: country //Formats the map to be inserted as InnnerHTML
		}
		return <div className="country-map" dangerouslySetInnerHTML={svg} ref={this.mapRef}/> //Uses svg to display map
	}

	/**
	 * Attaches onSelect click event to all regions of the map
	 * @return {[Function]} The Function will be used to redirect to the regional map
	 */
	componentDidMount() {
		var func = this.props.onSelect; //Allows access to onSelect within the forEach
		var colors = this.state.regions; //Allows access to regions within the forEach
		//Iterates through all paths within the svg and attaches the click event to each path and gives them their unique color
		this.mapRef.current.querySelectorAll('g > path').forEach((region, index) => {
			var color = 'rgb(' + colors[index].red + ', 0, ' + colors[index].blue + ')'; //Formats colors to be used
			region.style.setProperty("fill", color);
			region.style.setProperty("fill:hover", 'gold');
			region.addEventListener('click', function(event) {
				//Decides which region map to show based on what region is clicked on
				func(index);			
			})
		});
	}
}
export default Map;
