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
import Email from './Email.js';

/**
 * Generates a graphical list of all the emails the user can access
 * @extends Component
 */
class EmailList extends Component {

  /**
   * Creates the initial list for all the emails
   * @param {Property} props The parameters needed to create the EmailList
   */
    constructor(props) {
        super(props);

        this.state = {
            //emails is a list of all the emails passed down from EmailApp
            emails: props.emails,
            //selectedEmail is the email selected by the user
            selectedEmail: props.selectedEmail,
            //onSelect is the function passed down from emailApp that allows the application to select a specific email.
            onSelect: props.onSelect
        }
    }

    /**
     * Renders the email List for the user
     * @return {[Div]} The HTML that will render the selected email and the email list
     */
    render() {
        //The following mapping function finds the email that the user selected
        const emails = this.props.emails.map((email) => {
            return (<Email key={email.id}
                //Checks the email ID to see if the specific email is the one that is supposed to be selected
                selected={this.props.selectedEmail && this.props.selectedEmail.id === email.id}
                onSelect={this.props.onSelect}
                {...email}/>);
        });
        return(
            <div className="email-list">
                {/*&nbsp adds a single space before Inbox that lines up the word Inbox with the other emails when being displayed.*/}
				        <h1 className = "Inbox">&nbsp;Inbox</h1>
                {emails}
            </div>
        )
    }
}

export default EmailList;
