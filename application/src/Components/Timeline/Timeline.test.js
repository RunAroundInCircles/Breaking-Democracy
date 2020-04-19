import React from 'react';
import TimelineApp from './TimelineApp.js'
import timelineevents from './TimelineData.json';
import renderer from 'react-test-renderer';

/**
 * Checks to see if the Timeline is correctly rendered
 */
test('renders TimelineApp page', () => {
	const tree = renderer
	.create(<TimelineApp timelineevents={timelineevents}/>)
	expect(tree).toMatchSnapshot();
});
