import React,{Component} from 'react';
import Email from './Email.js';

class EmailReader extends Component {
    constructor(props) {
        super(props);
		//Makes a state for the email prop
        this.state = {
            email: props.email
        }
    }
	//renders the email
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
                    <h1>{this.props.email.title}</h1>
                    <h2>{this.props.email.sender}</h2>
                    <h3>{this.props.email.senderEmail}</h3>
                    <h3>{this.props.email.ccsEmail}</h3>
                    <body>{this.props.email.body}</body>
                </div>
            )
        }
    }
}

export default EmailReader;