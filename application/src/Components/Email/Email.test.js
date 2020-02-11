import React from 'react';
import EmailApp from './EmailApp.js';
import emails from './EmailList.json';
import MainPage from '../../App.js';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

/**
 * Checks to see if the Email is correctly rendered
 */
test('renders emailApp page', () => {
	const tree = renderer
	.create(<EmailApp emails={emails}/>)
	expect(tree).toMatchSnapshot();
});


test('renders each email', () => {
	const tree = renderer
	.create(<EmailApp emails={emails}/>)
	.toJSON();
	expect(tree.state).not.toBeNull();
});


test('renders each email', () => {
	const wrapper = shallow(<EmailApp emails={emails}/>);
	const button = wrapper.find('selected-email');
	button.simulate('click');
	expect(wrapper.state.onSelect).not.toBeNull();
});