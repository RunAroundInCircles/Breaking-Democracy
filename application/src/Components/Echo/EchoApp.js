import React,{Component} from 'react';
import EchoList from './EchoList.js';
import './echoUI.css';
import dolphin from '../../Resources/Echo_Dolphin.png';

/**
 * EchoApp component of the app that renders and returns a EchoList component
 * that has all the echos passed into.
 * @extends React
 */
class EchoApp extends Component {
//This code snippet will be used later in production
/*    constructor(props) {
		super(props);
    }
*/
	/**
 	* Renders a EchoList that has all echos passed in.
 	* @return returns the div containing an EchoList Component with all echos.
 	*/
    render() {
        return(
            <div className="echo-app">
                <img className="dolphin" src={dolphin} alt="dolphin"/>
                <h1 className="echo-head">Echos</h1>
                <EchoList
                    echos={this.props.echos}
                />
            </div>
        )
    }
}

export default EchoApp;
