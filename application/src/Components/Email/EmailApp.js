import React,{Component} from 'react';
import './EmailUI.css';
import EmailList from './EmailList.js';
import EmailReader from './EmailReader.js';

class EmailApp extends Component {
    constructor(props) {
		//Sets inital selected email to null and when an email is set to select it binds the selected email to be set.
		super(props);
        this.state = {
            selectedEmail: null
        }
        this.setSelectedEmail = this.setSelectedEmail.bind(this);
    }
	//Renders the selected email, the email list and setting the selected email on a click.
    render() {
        return(
            <div className="email-app"> 
                <EmailList 
                    emails={this.props.emails} 
                    selectedEmail={this.state.selectedEmail}
                    onSelect={this.setSelectedEmail}
                />				
				{/*Pulls inn the selected email from EmailReader.js*/}
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