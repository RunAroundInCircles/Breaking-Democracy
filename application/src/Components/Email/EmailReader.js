import React,{Component} from 'react';
import face from '../../Resources/Email Faces/face.png';

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
                    <img className="readerImage" src={face} alt="face"/>
                </div>
            )
        }
    }
}

export default EmailReader;
