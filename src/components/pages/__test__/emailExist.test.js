import React from 'react';
import { render, screen } from '@testing-library/react';
import Email from '../emailExist';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

test('it should display How do you want to reset your password?', () => {
  
  render(  <Provider store={store}> <Router><Email /> </Router></Provider>);
  const linkElement = screen.getByText("How do you want to reset your password?");
  expect(linkElement).toBeInTheDocument;

});

test('it should display we found the following information asssociated with your account', () => {
  
  render(  <Provider store={store}> <Router><Email /> </Router></Provider>);
  const linkElement = screen.getByText("we found the following information asssociated with your account");
  expect(linkElement).toBeInTheDocument;

});
test('it should display Email a confirmation code to', () => {
  
    render(  <Provider store={store}> <Router><Email /> </Router></Provider>);
    const linkElement = screen.getByText("Email a confirmation code to");
    expect(linkElement).toBeInTheDocument;
  
  });
  test('it should e*****@*******.com )', () => {
  
    render( <Provider store={store}> <Router><Email /> </Router></Provider>);
    const linkElement = screen.getByText("andela1@gmail.com");
    expect(linkElement).toBeInTheDocument;
  
  });
