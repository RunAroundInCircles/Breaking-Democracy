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
        this.setSelectedRegion = this.setSelectedRegion.bind(this); //Bind MapApp to this for setSelectedRegion
    }

  /**
   * Renders the map in currentID
   * @return {[Div]} Renders the Map component
   */
    render() {
        return(
            <div className="map-app">
                <Map onSelect={this.setSelectedRegion}/>
            </div>
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
