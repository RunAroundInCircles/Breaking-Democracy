import React,{Component} from 'react';
import EmailList from './EmailList.js';
import EmailReader from './EmailReader.js';

class EmailApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEmail: null
        }
        this.setSelectedEmail = this.setSelectedEmail.bind(this);
    }
    render() {
        return(
            <div className="email-app"> 
                <EmailList 
                    emails={this.props.emails} 
                    selectedEmail={this.state.selectedEmail}
                    onSelect={this.setSelectedEmail}
                />
                <EmailReader email={this.state.selectedEmail}/>
            </div>
        )
    }
    setSelectedEmail(email) {
        this.setState({selectedEmail: email}); //render gets retriggered as soon as state is changed
    }
}

export default EmailApp;