import React,{Component} from 'react';
import challenges from './codingChallenges.json';


class TypeGame extends Component{

	handleChange(){
			return(
				<h1>You won! Please Exit.</h1>
			)
	
	}
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
				<h1>{challenges[Math.floor(Math.random() * 10)]}</h1>
				//make textbox and a  submit button when submit button is clicked then check and move on.
				<form onSubmit={this.handleSubmit}>
					<label>
					Answer:
					<input type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
			</div>
	)}
}

export default TypeGame