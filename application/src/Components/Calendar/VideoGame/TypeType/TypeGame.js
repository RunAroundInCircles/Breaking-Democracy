import React,{Component} from 'react';


class TypeGame extends Component{
	/**
	 * Returns that the player has won the mini game and adds the header to the event popup.
	 * @return {HTML} [Returns a header that the user has won]
	 */
	
	/*Will be able to check if the answer is right and change certain attributes when done.*/
	handleSubmit(){
			return(
				<h1>You won! Please Exit.</h1>
			)

	}

	/**
	 * Renders the event popup to show the plaer has won
	 * @return {div} [Returns the popup]
	 */
	render(){
		return(
		<div style={{display: 'flex',
           alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: 1000,
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, .7)'
        }}>
        {/*This div is the body of the popup window containing the back button and the event info*/}
        <div style={{backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRadius: '5px',
                width: '50vw',
                height: '50vh',
                position: 'absolute'
        }}>
				<h1>{this.props.challenges.challenge}</h1>
				{/*Creates a form that has a submit button. and calls handleChange when pressed.*/}
				<form onSubmit={this.handleSubmit}>
					<label>
					Answer:
					<input type="text" onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
	)}
}

export default TypeGame
