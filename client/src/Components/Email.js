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
                    <h1 >{this.state.title}</h1>}
                </div>
            );
        } else {
            // Render as not selected
            return (
                <div onClick={this.props.onSelect}>
                    <h1 >{this.state.title}</h1>
                </div>
            );
        }
    }
}

export default Email;