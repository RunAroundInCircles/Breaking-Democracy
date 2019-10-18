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
        return(
            <div className="email-reader">

            </div>
        )
    }
}

export default EmailReader;