import React,{Component} from 'react';

class Email extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            body: props.body, 
            sender: props.sender,
            senderEmail: props.senderEmail,
            ccsEmail: props.ccsEmail,
            favorited: props.favorited,
            pinned: props.pinned,
            id: props.id
        }
    }
}

export default Email;