import React,{Component} from 'react';
import './App.css';
import intro from './Resources/intro.mp4';

/**
 * Used to play the intro video to introduce players to the game
 */
class Intro extends Component {
	render() {
		return (
			//The video to show the players when they arrive on the page
			//onEnded calls a method that update's MainPage's state so that the player can being playing
			<video id="background-video" autoPlay controls onEnded={this.props.endedCallback}>
				<source src={intro} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		)
	}
}

export default Intro