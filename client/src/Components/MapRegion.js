import React,{Component} from 'react';
import country from './Maps/country.svg.js';
import region1 from './Maps/Region-1.svg.js';
import region2 from './Maps/Region-2.svg.js';
import region3 from './Maps/Region-3.svg.js';
import region4 from './Maps/Region-4.svg.js';
import region5 from './Maps/Region-5.svg.js';
import region6 from './Maps/Region-6.svg.js';
import region7 from './Maps/Region-7.svg.js';
import region8 from './Maps/Region-8.svg.js';

//NOT IMPLEMENTED

class MapRegion extends Component {
    constructor(props) {
        super(props);

        this.mapRef = React.createRef();
        this.state  = {
            id: props.id
        } 

        this.handleClick = this.handleClick.bind(this);
    }

    //Alters reaction to clicking
    handleClick(e) {
        e.preventDefault(); //Prevent default behavior
        this.state.onSelect(this.state); //Runs onSelect using this.state as argument
    }

    render() {
        const svg = {
			__html: this.state.id
		}
		return <div className='region-Map' onClick={this.handleClick} dangerouslySetInnerHTML={svg} ref={this.mapRef} />
    }
}

export default MapRegion;