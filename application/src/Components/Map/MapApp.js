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
import {withRouter} from 'react-router-dom';
import Map from './Map.js';
import './Map.css';

/**
 * Used to display the Map to the user
 * @extends Component
 */
class MapApp extends Component {
  /**
   * Creates the initial Map Component
   * @param {[Property]} props The initial parameters needed to create the Map
   */
    constructor(props) {
        super(props);

        //Bind MapApp to this for setSelectedRegion
        this.setSelectedRegion = this.setSelectedRegion.bind(this);
    }

  /**
   * Renders the map in currentID
   * @return {[Div]} Renders the Map component
   */
    render() {
        return(
            <Map onSelect={this.setSelectedRegion} pollData={this.props.pollData} regionDistrictNames={this.props.regionDistrictNames}/>
        )
    }

  /**
   * function to set the currentId to a new map
   * @param {[ID]} region Figures out which region was clicked by the user and sets the id to the currentID
   */
    setSelectedRegion(region) {
        const {history} = this.props;
        var address = "/Map/" + region;
        history.push(address);
    }
}

export default withRouter(MapApp);
