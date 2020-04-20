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
import EmailApp from './EmailApp.js';
import emails from './EmailList.json';
import MainPage from '../../App.js';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

/**
 * Checks to see if the Email page is correctly rendered
 */
test('renders emailApp page', () => {
	const tree = renderer
	.create(<EmailApp emails={emails}/>)
	expect(tree).toMatchSnapshot();
});

/**
 * Checks to see if all emails is correctly rendered
 */
test('renders each email', () => {
	const tree = renderer
	.create(<EmailApp emails={emails}/>)
	.toJSON();
	expect(tree.state).not.toBeNull();
});

/**
 * Checks to see if the selected email is correctly rendered
 */
test('renders selected email', () => {
	const wrapper = shallow(<EmailApp emails={emails}/>);
	const button = wrapper.find('selected-email');
	button.simulate('click');
	expect(wrapper.state.onSelect).not.toBeNull();
});
