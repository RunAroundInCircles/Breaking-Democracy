const calander = require('../../application/src/Components/Calendar/Calendar.js');

test('Should show the calander on the page', function()
	{
		expect(calander.defaultView()).toEqual(expect.stringContaining('<!doctype html>'));
	}
);

