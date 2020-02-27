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
		//Iterates through all paths within the svg and attaches the click event to each path and gives them their unique color
		this.mapRef.current.querySelectorAll('g > path').forEach((region, index) => {
			var i;
			var red = 0;
			var blue = 0;
			for(i = 0; i < this.props.pollData[index].length; i++) {
				red += this.props.pollData[index][i];
			}
			red = red/this.props.pollData[index].length;
			blue = 100-red;
			
			var color = 'rgb(' + (red/100)*255 + ', 0, ' + (blue/100)*255 + ')'; //Formats colors to be used
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
