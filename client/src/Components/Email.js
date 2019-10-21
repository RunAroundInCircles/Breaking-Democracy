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

    render() {
        if(this.props.selected) {
            // Render as selected
            return (
                <div onClick={this.props.onSelect}>
                    {this.title}
                </div>
            );
        } else {
            // Render as not selected
            return (
                <div onClick={this.props.onSelect}>
                    {this.title}
                </div>
            );
        }
    }
}

export default Email;