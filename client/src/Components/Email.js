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
            id: props.id,
            onSelect: props.onSelect
        }
        this.handleClick = this.handleClick.bind(this);
        if(this.props.selected == true) {
            console.log('selected');
        }
    }

    handleClick(e) {
        e.preventDefault();
        this.state.onSelect(this.state);
    }

    render() {
        if(this.props.selected) {
            // Render as selected
            return (
                <div className='email-selected' onClick={this.handleClick}>
                    <font color = "blue">
                        <h1>{this.state.sender}</h1>
                        <h2>{this.state.title}</h2>
                        <h3>{this.state.body.substring(0,40)}</h3>
                    </font>
                </div>
            );
        } else {
            // Render as not selected
            return (
                <div className='email-notselected' onClick={this.handleClick}>
                    <font color = "red"> 
                    <h1>{this.state.sender}</h1> </font>
                    <h2>{this.state.title}</h2>
                    <h3>{this.state.body.substring(0,40)}</h3>
                </div>
            );
        }
    }
}

export default Email;