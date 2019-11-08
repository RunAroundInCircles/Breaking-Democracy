import React,{Component} from 'react';
import Map from './Map.js';
import country from './Maps/country.svg.js';

class MapApp extends Component {
    constructor(props) {
		//Sets inital selected email to null and when an email is set to select it binds the selected email to be set.
		super(props);
        this.state = {
            selectedRegion: null,
            currentId: country
        }
        this.setSelectedRegion = this.setSelectedRegion.bind(this);
    }
	//Renders the selected email, the email list and setting the selected email on a click.
    render() {
        return(
            <div className="map-app"> 
                <Map 
                    selectedRegion={this.state.selectedRegion}
                    onSelect={this.setSelectedRegion}
                    currentId={this.state.currentId}
                />				
            </div>
        )
    }
	//function to set the currently selected email to be displayed in EmailReader.js
    setSelectedRegion(region) {
        this.setState({currentId: region});
        //this.setState({selectedRegion: region}); //render gets retriggered as soon as state is changed
    }
}

export default MapApp;