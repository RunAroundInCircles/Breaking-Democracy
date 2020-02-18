import React from 'react';
import TimelineApp from './TimelineApp.js'
import timelineevents from './TimelineData.json';
import MainPage from '../../App.js';
import renderer from 'react-test-renderer';

import ReactDOM from 'react-dom';

/**
 * Checks to see if the Timeline is correctly rendered
 */
test('renders TimelineApp page', () => {
	const tree = renderer
	.create(<TimelineApp timelineevents={timelineevents}/>)
	expect(tree).toMatchSnapshot();
});
