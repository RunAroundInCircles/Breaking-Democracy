import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * Renders the application to see if it rendered
 * @type {[test]}
 */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
