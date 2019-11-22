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
