import React from 'react';
import 'react-router';
import Calendar from './Components/Calendar/Calendar.js';
import MainPage from './MainPage.js';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

test('renders calendar page', () => {
	const tree = renderer
	.create(<Router><Link page="http://localhost:3000/Calendar">Calendar</Link> </Router>)
	.toJSON();
	expect(tree).toMatchSnapshot();
});