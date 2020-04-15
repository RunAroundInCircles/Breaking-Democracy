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
