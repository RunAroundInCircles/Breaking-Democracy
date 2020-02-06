import React from 'react';
import 'react-router';
import Calendar from '../../application/src/Calendar.js';
import MainPage from '../../application/src/MainPage.js';
import renderer from 'react-test-renderer';

const MainPage = require('../../application/src/MainPage.js');

jest.mock('../../application/src/MainPage.js');


test('a test for a test', () => {
	render(
		<MemoryRouter>
			<Calendar/>
		</MemoryRouter>
	);
	click(<Button id="calendar-button">);
	expect(</Calendar>)
});