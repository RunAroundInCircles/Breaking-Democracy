import React from 'react';
import CalendarApp from './CalendarApp.js';
import events from './EventList.json';
import MainPage from '../../App.js';
import renderer from 'react-test-renderer';

import ReactDOM from 'react-dom';

//Checks to see if the Calendar is correctly rendered
test('renders CalendarApp page', () => {
	const tree = renderer
	.create(<CalendarApp events={Object.values(events)}/>)
	expect(tree).toMatchSnapshot();
});
