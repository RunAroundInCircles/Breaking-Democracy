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
import './EmailUI.css';
import EmailList from './EmailList.js';
import EmailReader from './EmailReader.js';


/**
 * Used to display a list of emails and a reader that allows the user to view an
 * entire email.
 * @extends Component
 */
class EmailApp extends Component {

  /**
   * Creates the initial Email Application
   * @param {Property} props The parameters needed to set up the Email Application
   */
    constructor(props) {
		//Sets inital selected email to null and when an email is set to select it binds the selected email to be set.
		super(props);
        this.state = {
            selectedEmail: null,
			      currentEmails: []
        }
        this.setSelectedEmail = this.setSelectedEmail.bind(this);
    }

	/**
   * Renders the selected email, the email list and setting the selected email on a click.
   * @return {Div} Returns a list of emails and a reader that allows the user to read the full email.
   */
    render() {
        return(
            <div className="email-app">
                <EmailList
                    emails={this.props.emails}
                    selectedEmail={this.state.selectedEmail}
                    onSelect={this.setSelectedEmail}
                />
				        {/*Pulls in the selected email from EmailReader.js*/}
                <EmailReader email={this.state.selectedEmail}/>
            </div>
        )
    }


	//function to set the currently selected email to be displayed in EmailReader.js
    setSelectedEmail(email) {
        this.setState({selectedEmail: email}); //render gets retriggered as soon as state is changed
    }
}

export default EmailApp;
