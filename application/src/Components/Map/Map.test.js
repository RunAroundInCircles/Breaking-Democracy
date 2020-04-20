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
import MapApp from './MapApp.js';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from "react-router-dom";

//Poll data to use for testing, numbers represent the percentage of votes your party has
let pollData = {
	0: [75, 75, 75, 75, 75, 75, 75],
	1: [25, 25, 25, 25],
	2: [62, 33, 51, 83],
	3: [75, 50, 57],
	4: [38, 51],
	5: [18],
	6: [70, 25, 89, 34],
	7: [21, 12, 37]
}

/**
 * Checks to see if the MapApp is correctly rendered
 */
test('renders MapApp page', () => {
	const tree = renderer
	.create(
		<Router>
			<MapApp pollData={pollData}/>
		</Router>
	)
	expect(tree).toMatchSnapshot();
});
