import React,{Component} from 'react';
import Email from './Email.js';

class EmailList extends Component {
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
