import React from 'react';
import Email from '../../application/src/Components/Email/EmailApp.js';
import MainPage from '../../application/src/Components/App.js';
import renderer from 'react-test-renderer';

test('Email Application should render', function(){
  expect(MainPage.render().toEqual(expect.stringContaining('<!doctype html'));
});
