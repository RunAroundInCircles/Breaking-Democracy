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
import face from '../../Resources/Email Faces/game_master.png';
import face2 from '../../Resources/Email Faces/putin.png';

const url = ['../../Resources/Email Faces/game_master.png',
				'../../Resources/Email Faces/putin.png'];

/**
 * This will display a full email to the user.
 * @extends Component
 */
class EmailReader extends Component {
    constructor(props) {
        super(props);
		//Makes a state for the email prop
        this.state = {
            email: props.email
        }
    }
	renderImage(imageUrl) {
		if(this.props.email.face == url[0]){			
			return (
				<div>
					<img className="readerImage" src={face} alt="face"/>
				</div>
			);
		}
		else{
			return (
				<div>
					<img className="readerImage" src={face2} alt="face"/>
				</div>
			);
		}
	}
	/**
   * Renders the email
   * @return {[Div]} Renders either an empty box because no email is selected or the selected email
   */
    render() {
		//If the email is null return nothing.
        if (this.props.email === null) {
            return(
                <div className="email-reader">
                </div>
            )
        }
		//Else if it is not null we return title, sender, senders email, cc emails, body to the containter to show selected email.
        else {
            return(
                <div className="email-reader">
                    <h1 className="emailh1">{this.props.email.title}</h1>
                    <h2 className="emailh2">{this.props.email.sender}</h2>
                    <h3 className="emailh3">{this.props.email.senderEmail}</h3>
                    <h3 className="emailh4">{this.props.email.ccsEmail}</h3>
                    <body className="emailbody" style={{whiteSpace: 'pre-wrap'}}>{this.props.email.body}</body>
                    {url.map(urlImage => this.renderImage(urlImage))}
                </div>
            )
        }
    }
}

export default EmailReader;
