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

/*Please note when these tests are run a warning does come up
showing that the prop to is undefined for react router. This
occurs because if to is set to a link it will automatically be loaded
onto the page on startup. Instead by using page the link will only work
when the button are pressed which is how the main application functions.
*/


/**
 * Renders calendar page
 */
test('renders link to calendar page', () => {
	const tree = renderer
	.create(<Router><Link page="http://localhost:3000/Calendar">Calendar</Link> </Router>)
	.toJSON();
	expect(tree).toMatchSnapshot();
});

/**
 * Renders link to email page
 */
test('renders link to email page', () => {
	const tree = renderer
	.create(<Router><Link page="http://localhost:3000/Email">Email</Link> </Router>)
	.toJSON();
	expect(tree).toMatchSnapshot();
});


/**
 * Renders link to map page
 */
test('renders link to map page', () => {
	const tree = renderer
	.create(<Router><Link page="http://localhost:3000/Map">Map</Link> </Router>)
	.toJSON();
	expect(tree).toMatchSnapshot();
});

/**
 * Renders link to echo page
 */
test('renders link to echo page', () => {
	const tree = renderer
	.create(<Router><Link page="http://localhost:3000/Echo">Echo</Link> </Router>)
	.toJSON();
	expect(tree).toMatchSnapshot();
});

/**
 * Renders link to timeline page
 */
test('renders link to timeline page', () => {
	const tree = renderer
	.create(<Router><Link page="http://localhost:3000/Timeline">Timeline</Link> </Router>)
	.toJSON();
	expect(tree).toMatchSnapshot();
});
