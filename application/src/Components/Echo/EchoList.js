import React,{Component} from 'react';
import Echo from './Echo.js';

/**
 * EchoList component of the app that renders and returns the entire list of echos
 * that have been individually parsed.
 * @extends React
 */
class EchoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //echos is a list of all the echos passed down from EchoApp
            echos: props.echos
        }
    }
	/**
 	* Renders each individual echo and sets the echos key to be the name associated with the echo.
 	* @return returns the div containing the heading and all echos that have been parsed.
 	*/
    render() {
        //The following mapping function parses each echo separately.
        const echos = this.props.echos.map((echo) => {
            return (<Echo key={echo.name}
                {...echo}/>);
        });
        return(
            <div className="echo-list">
                <h1 className="echo-head">Echos</h1>
                {echos}
            </div>
        )
    }
}

export default EchoList;
