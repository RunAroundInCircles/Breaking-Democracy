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
        return(
            <div className="email-list">
                
            </div>
        )
    }
}

export default EmailList;