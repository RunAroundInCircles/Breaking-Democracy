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

/**
 * Represents an actual email which will be used to give tutorials and
 * story information to the player.
 * @extends Component
 */
class Email extends Component {

  /**
   * Creates an email object.
   * @param {Property} props All the properties needed to create an email.
   */
    constructor(props) {
        super(props);

        this.state = {
            title: props.title, //Title of the email
            body: props.body, //Body of the email
            sender: props.sender, //Name of sender of the email
            senderEmail: props.senderEmail, //Email address of the sender of the email
            ccsEmail: props.ccsEmail, //Address(es) CCS'd in the email
            favorited: props.favorited, //True/False value representing if email is favorited
            pinned: props.pinned, //True/False value representing if email is pinned
            id: props.id, //Unique ID of the email
            onSelect: props.onSelect, //Inherited method to run onClick
        }
        //Binds this to handleClick
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * Alters reaction to clicking
     * @param  {Event} e The click event
     * @return {State} Changes which email that is selected
     */
    handleClick(e) {
        e.preventDefault(); //Prevent default behavior
        this.state.onSelect(this.state); //Runs onSelect using this.state as argument
    }
    

/**
 * Renders each individual email in the email list panel
 * @return returns the div of the indvidual email in the email list
 */
    render() {
        //If the email is selected
        if(this.props.selected) {
            // Render as selected
            return (
                <div className='email-selected' onClick={this.handleClick}>
                        <h1>{this.state.sender}</h1> {/* Name of Sender */}
                        <img className="sideImage" src={face} alt="face"/>
                        <h2>{this.state.title}</h2> {/* Title of Email */}
                        <h3>{this.state.body.substring(0,40)}</h3> {/* Body of Email, shortened to 40 characters */}
                </div>
            );
        }
        //Else if the email is not selected
        else {
            // Render as not selected
            return (
                <div className='email-notselected' onClick={this.handleClick}>
                    <h1>{this.state.sender}</h1> {/* Name of Sender */}
                    <img className="sideImage" src={face} alt="face"/>
                    <h2>{this.state.title}</h2> {/* Ttile of Email */}
                    <h3>{this.state.body.substring(0,40)}</h3> {/* Body of Email, shortened to 40 characters */}
                </div>
            );
        }
    }
}

export default Email; //Export Email to be used by other files
