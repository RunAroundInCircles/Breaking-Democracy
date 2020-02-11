import React from 'react';
import EmailApp from './EmailApp.js';
import emails from './EmailList.json';
import MainPage from '../../App.js';
import renderer from 'react-test-renderer';

import ReactDOM from 'react-dom';

/**
 * Checks to see if the Email is correctly rendered
 */
test('renders emailApp page', () => {
	const tree = renderer
	.create(<EmailApp emails={emails}/>)
	expect(tree).toMatchSnapshot();
});
