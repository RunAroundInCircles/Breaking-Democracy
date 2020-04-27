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
			__html: country //Formats the map to be inserted as InnerHTML
		}
		return (
			<div>
				<h1 id="region-name">Country of Democristan</h1>
				<h2 id="conservative-box" style={{position: 'absolute',
						alignItems: 'center',
						justifyContent: 'center',
						left: '10%',
						top: '50%'
				}}></h2>
				<h2 id="liberal-box" style={{position: 'absolute',
						alignItems: 'center',
						justifyContent: 'center',
						left: '10%',
						top: '55%'
				}}></h2>
				{/*Uses svg to display map*/}
				<div className="country-map" dangerouslySetInnerHTML={svg} ref={this.mapRef}/>
			</div>
		);
	}

	/**
	 * Attaches onSelect click event to all regions of the map
	 * @return {[Function]} The Function will be used to redirect to the regional map
	 */
	componentDidMount() {
		var func = this.props.onSelect; //Allows access to onSelect within the forEach
    if(this.mapRef.current) {
			var redTotal = 0;
      //Iterates through all paths within the svg and attaches the click event to each path and gives them their unique color
      this.mapRef.current.querySelectorAll('g > path').forEach((region, index) => {
        var i;
        var red = 0;
        var blue = 0;
        for(i = 0; i < this.props.pollData[index].length; i++) {
          red += this.props.pollData[index][i];
					redTotal += this.props.pollData[index][i];
        }
        red = red/this.props.pollData[index].length;
        blue = 100-red;

        var color = 'rgb(' + (red/100)*255 + ', 0, ' + (blue/100)*255 + ')'; //Formats colors to be used
        region.style.setProperty("fill", color);
        region.style.setProperty("fill:hover", 'gold');
        var name = this.props.regionDistrictNames[index][0]
				var regionName = document.getElementById('region-name');
				var conservativeBox = document.getElementById('conservative-box');
				var liberalBox = document.getElementById('liberal-box');
				//Function to display the name and poll percentage of the Region that is being hovered over
        region.addEventListener('mouseover', function(event) {
          regionName.innerText = "Region of " + name;
					conservativeBox.innerText = red.toFixed(2) + "% Conservative";
					liberalBox.innerText = blue.toFixed(2) + "% Liberal";
        });
        //Function to display the name and poll percentage of Democristan if no region is being hovered over
        region.addEventListener('mouseout', function(event) {
          regionName.innerText = "Country of Democristan";
					conservativeBox.innerText = (redTotal/28).toFixed(2) + "% Conservative";
					liberalBox.innerText = (100-(redTotal/28)).toFixed(2) + "% Liberal";
        });
        region.addEventListener('click', function(event) {
          //Decides which region map to show based on what region is clicked on
          func(index);
        });
				//Displays Democristan pollData by default
				conservativeBox.innerText = (redTotal/28).toFixed(2) + "% Conservative";
				liberalBox.innerText = (100-(redTotal/28)).toFixed(2) + "% Liberal";
      });
		}
	 }
}
export default Map;
