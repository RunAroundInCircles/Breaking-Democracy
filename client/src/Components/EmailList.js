import React,{Component} from 'react';
import Email from './Email.js';

class EmailList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            emails: props.emails,
            selectedEmail: props.selectedEmail,
            onSelect: props.onSelect
        }
    }
    render() {
        const emails = this.props.emails.map((email) => {
            return (<Email key={email.id} 
                selected={this.props.selectedEmail && this.props.selectedEmail.id === email.id}
                onSelect={this.props.onSelect}
                {...email}/>);
        });
        return(
            <div className="email-list">
                {emails}
            </div>
        )
    }
}

export default EmailList;