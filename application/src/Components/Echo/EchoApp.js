import React,{Component} from 'react';
import EchoList from './EchoList.js';
import './echoUI.css'

class EchoApp extends Component {
    constructor(props) {
		super(props);
    }
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