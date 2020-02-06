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
            selectedEmail: null
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
