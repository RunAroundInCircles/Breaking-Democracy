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

class Echo extends Component {
  /**
   * Constructs the echo component
   * @param {Properties} props [All the necessary properties needed to generate the echo component]
   */
    constructor(props) {
        super(props);

        this.state = {
            body: props.body, //The main message of the echo
            name: props.name, //Who sent the echo
            at: props.at, //The handle of the person who sent the echo
            time: props.time //When the echo was submitted
        }
    }
	/**
 	* Renders and returns each state inside the ech.
 	* @return returns the div containing the time, at, name and body to be displayed on the page.
 	*/
    render() {
           return (
                <div className='echo'>
                  <span className='echo-contents'>
					          <h4>{this.state.time}</h4>
                    <h1>{this.state.at}</h1> {/* Name of Sender */}
                    <h2>{this.state.name}</h2> {/* Ttile of Echo */}
                    <h3>{this.state.body}</h3> {/* Body of Echo*/}
                  </span>
                </div>
            );
    }
}

export default Echo;
