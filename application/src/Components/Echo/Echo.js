import React,{Component} from 'react';

class Echo extends Component{
	constructor(props){
		super(props);
        
        this.state = {
            name: props.name, //Name of user
            body: props.body, //Body of the tweet
            at: props.at, //@ of the user
            time: props.time //Time of tweet
        }
	}
	render() {
		return(
			<div className="echolist">
                <h1 className="echoh1">{this.state.name}</h1>
                <h2 className="echoh2">{this.state.at}</h2>
                <h3 className="echoh3">{this.state.time}</h3>
                <body className="echobody">{this.state.body}</body>
            </div>
			
		)
	}
	
	
}

export default Echo