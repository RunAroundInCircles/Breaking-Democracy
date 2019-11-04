import React,{Component} from 'react';

class Email extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: props.title, //Title of the email
            body: props.body, //Body of the email
            sender: props.sender, //Name of sender of the email
            senderEmail: props.senderEmail, //Email address of the sender of the email
            ccsEmail: props.ccsEmail, //Address(es) CCS'd in the email
            favorited: props.favorited, //True/False value representing if email is favorited
            pinned: props.pinned, //True/False value representing if email is pinned
            id: props.id, //Unique ID of the email
            onSelect: props.onSelect //Inherited method to run onClick
        }
        
        //Binds this to handleClick
        this.handleClick = this.handleClick.bind(this);
    }

    //Alters reaction to clicking
    handleClick(e) {
        e.preventDefault(); //Prevent default behavior
        this.state.onSelect(this.state); //Runs onSelect using this.state as argument
    }

    render() {
        //If the email is selected
        if(this.props.selected) {
            // Render as selected
            return (
                <div className='email-selected' onClick={this.handleClick}>
                        <h1>{this.state.sender}</h1> {/* Name of Sender */}
                        <h2>{this.state.title}</h2> {/* Ttile of Email */}
                        <h3>{this.state.body.substring(0,40)}</h3> {/* Body of Email, shortened to 40 characters */}
                </div>
            );
        }
        //Else if the email is not selected 
        else {
            // Render as not selected
            return (
                <div className='email-notselected' onClick={this.handleClick}>
                    <h1>{this.state.sender}</h1> {/* Name of Sender */}
                    <h2>{this.state.title}</h2> {/* Ttile of Email */}
                    <h3>{this.state.body.substring(0,40)}</h3> {/* Body of Email, shortened to 40 characters */}
                </div>
            );
        }
    }
}

export default Email; //Export Email to be used by other files