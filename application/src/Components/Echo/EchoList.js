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
                {echos}
            </div>
        )
    }
}

export default EchoList;
