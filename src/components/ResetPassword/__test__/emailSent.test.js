import React from 'react';
import { render, screen } from '@testing-library/react';
import Email from '../emailSent';
import { MemoryRouter as Router } from 'react-router-dom';
test('it should display Email sent', () => {
  
  render(  <Router><Email />  </Router>);
  const linkElement = screen.getByText("Email sent");
  expect(linkElement).toBeInTheDocument;

});

test('it should display A link to reset your password has been sent to your email', () => {
  
  render(  <Router><Email />  </Router>);
  const linkElement = screen.getByText("A link to reset your password has been sent to your email");
  expect(linkElement).toBeInTheDocument;

});