import React from 'react';
import { render, screen } from '@testing-library/react';
import Email from '../emailExist';
import { MemoryRouter as Router } from 'react-router-dom';
test('it should display How do you want to reset your password?', () => {
  
  render(  <Router><Email />  </Router>);
  const linkElement = screen.getByText("How do you want to reset your password?");
  expect(linkElement).toBeInTheDocument;

});

test('it should display we found the following information asssociated with your account', () => {
  
  render(  <Router><Email />  </Router>);
  const linkElement = screen.getByText("we found the following information asssociated with your account");
  expect(linkElement).toBeInTheDocument;

});
test('it should display Email a confirmation code to', () => {
  
    render(  <Router><Email />  </Router>);
    const linkElement = screen.getByText("Email a confirmation code to");
    expect(linkElement).toBeInTheDocument;
  
  });
  test('it should e*****@*******.com )', () => {
  
    render(  <Router><Email />  </Router>);
    const linkElement = screen.getByText("e*****@*******.com");
    expect(linkElement).toBeInTheDocument;
  
  });