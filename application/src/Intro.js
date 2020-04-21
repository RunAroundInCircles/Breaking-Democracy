import React,{Component} from 'react';
import './App.css';
import intro from './Resources/intro.mp4';
import MainPage from './MainPage.js'

class Intro extends Component {
	render() {
		return (
			<video id="background-video" autoPlay >
				<source src={intro} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		)
	}
	
	
}

export default Intro