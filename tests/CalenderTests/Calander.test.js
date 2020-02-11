import React from 'react';
import Calendar from '../../application/src/Components/Calendar/Calendar.js';
import renderer from 'react-test-renderer';

const calander = require('../../application/src/Components/Calendar/Calendar.js');

test('Should show the calander on the page', function()
	{
		expect(calander.defaultView()).toEqual(expect.stringContaining('<!doctype html>'));
	}
);

