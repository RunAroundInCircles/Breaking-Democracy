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
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

let container; //Used to contain the rendered page so that its components can be tested

/** 
 * Before each test sets container to a new div element and adds it to the document
*/
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

/**
 * After each test removes container from the document and sets it to null
 */
afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

/**
 * Checks to see if the EmailApp page is correctly rendered
 */
test('renders emailApp page', () => {
	const tree = renderer
	.create(<EmailApp emails={emails}/>)
	expect(tree).toMatchSnapshot();
});

/**
 * Checks to see if all emails are correctly rendered
 */
test('renders each email', () => {
	const tree = renderer
	.create(<EmailApp emails={emails}/>)
	.toJSON();
	expect(tree.state).not.toBeNull();
});

/**
 * Checks to see if clicking on emails changes them to selected
 */
test('renders selected email', () => {
	//Expect that at first no emails should be selected
	act(() => { //act allows functions to behave closer to normal browser behavior
		ReactDOM.render(<EmailApp emails={emails}/>, container); //Renders EmailApp
	});
	let emailsSelected = container.querySelectorAll(".email-selected"); //Get all selected emails
	expect(emailsSelected.length).toBe(0);

	const emailsNotselected = container.querySelectorAll(".email-notselected"); //Get all non-selected emails
	act(() => {
		emailsNotselected.item(0).dispatchEvent(new MouseEvent('click', {bubbles: true})); //Click on the first non-selected email found
	});
	emailsSelected = container.querySelectorAll(".email-selected"); //Get all selected emails
	expect(emailsSelected.length).toBe(1);
});
