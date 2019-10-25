import React,{Component} from 'react';
import Email from './Email.js';

class EmailReader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: props.email
        }
    }

    render() {
        if (this.props.email === null) {
            return(
                <div className="email-reader">
                </div>
            )
        }
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