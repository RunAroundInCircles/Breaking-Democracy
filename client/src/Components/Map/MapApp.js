import React,{Component} from 'react';
import Map from './Map.js';
import country from '../../Resources/Maps/country.svg.js';
import './Map.css';

class MapApp extends Component {
    constructor(props) {
		super(props);
        this.state = {
            currentId: country //Map to currently display, initially set to the country map
        }
        this.setSelectedRegion = this.setSelectedRegion.bind(this); //Bind MapApp to this for setSelectedRegion
    }
	//Renders the map in currentID
    render() {
        return(
            <div className="map-app">
                <Map
                    onSelect={this.setSelectedRegion}
                    currentId={this.state.currentId}
                />
            </div>
        )
    }
	//function to set the currentId to a new map
    setSelectedRegion(region) {
        this.setState({currentId: region});
    }
}

export default MapApp;
