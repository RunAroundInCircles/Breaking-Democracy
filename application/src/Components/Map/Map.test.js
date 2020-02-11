import React from 'react';
import MapApp from './MapApp.js';
import MapRegion from './/MapRegion.js';
import MainPage from '../../App.js';
import renderer from 'react-test-renderer';

import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Checks to see if the Map is correctly rendered
test('renders MapApp page', () => {
	const tree = renderer

	.create(
		<Router>
			<Route path='/Map/:id' render={(props)=>{
					return <MapRegion/>
				}
			}>
		</Route>
	</Router>
	)
	expect(tree).toMatchSnapshot();


});
