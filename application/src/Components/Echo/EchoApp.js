import React,{Component} from 'react';
import EchoList from './EchoList.js';
import './echoUI.css'
/**
 * EchoApp component of the app that renders and returns a EchoList component 
 * that has all the echos passed into.
 * @extends React
 */
class EchoApp extends Component {
    constructor(props) {
		super(props);
    }
	/**
 	* Renders a EchoList that has all echos passed in.
 	* @return returns the div containing an EchoList Component with all echos.
 	*/
    render() {
        return(
            <div className="echo-app"> 
                <EchoList 
                    echos={this.props.echos} 
                />				
            </div>
        )
    }
}

export default EchoApp;