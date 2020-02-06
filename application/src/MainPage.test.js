import React from 'react';
import 'react-router';
import Calendar from './Components/Calendar/Calendar.js';
import MainPage from './MainPage.js';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calendar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
