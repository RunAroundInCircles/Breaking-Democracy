import React from 'react';
import EchoApp from './EchoApp.js';
import echos from './echo.json';
import MainPage from '../../App.js';
import renderer from 'react-test-renderer';

import ReactDOM from 'react-dom';

/**
 * Checks to see if the Echos page is correctly rendered
 */
test('renders EchoApp page', () => {
	const tree = renderer
	.create(<EchoApp echos={echos}/>)
	expect(tree).toMatchSnapshot();
});
