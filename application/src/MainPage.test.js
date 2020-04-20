/*MIT License

Copyright (c) 2019 Caleb Logan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
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
