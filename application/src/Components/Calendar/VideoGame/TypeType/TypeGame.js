import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';


class TypeGame extends Component{
	/**
	 * Returns that the player has won the mini game and adds the header to the event popup.
	 * @return {HTML} [Returns a header that the user has won]
	 */
	constructor(props) {
		super(props);
		this.state = {
			result: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	/*Will be able to check if the answer is right and change certain attributes when done.*/
	handleSubmit(event){
		event.preventDefault();
		var percent = (Math.random() * 2) - 1;
        percent = percent.toFixed(2);
		
		var region = Math.floor(Math.random() * 8);
			
		var district = Math.floor(Math.random() * 7);
		
		this.props.callbackFromMain(this.props.eventID, percent, region, 0);

		this.setState({result: "Success!"});
	}

	/**
	 * Renders the event popup to show the plaer has won
	 * @return {div} [Returns the popup]
	 */
	render(){
		return(
			//This div is the body of the popup window containing the back button and the event info
			<div style={{justifyContent: 'center'}}>
				<h1>{this.props.challenges.challenge}</h1>
				{/*Creates a form that has a submit button. and calls handleChange when pressed.*/}
				<form onSubmit={this.handleSubmit}>
					<label>
						Answer:
						<input type="text" onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
				<h1>{this.state.result}</h1>
			</div>
	)}
}

export default TypeGame
