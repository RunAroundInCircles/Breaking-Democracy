import React,{Component} from 'react';
import Echo from './Echo.js';


class EchoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //emails is a list of all the emails passed down from EmailApp
            echos: props.echos
        }
    }
    render() {
        //The following mapping function finds the email that the user selected
        const echos = this.props.echos.map((echo) => {
            return (<Echo key={echo.name}
                {...echo}/>);
        });
        return(
            <div className="echo-list">
                {/*&nbsp adds a single space before Inbox that lines up the word Inbox with the other emails when being displayed.*/}
                <h1 className="echo-head">Echos</h1>
                {echos}
            </div>
        )
    }
}

export default EchoList;
