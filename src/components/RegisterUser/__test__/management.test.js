import React from 'react';
import { render, screen } from '@testing-library/react';
import Management from '../management';
import { MemoryRouter as Router } from 'react-router-dom';


test('it should display First name', () => {
  
  render( <Router><Management /> </Router>);
  const linkElement = screen.getByText("First name");
  expect(linkElement).toBeInTheDocument;

});

test('it should display delete', () => {
  
  render( <Router><Management /> </Router>);
  const linkElement = screen.getByText("Action");
  expect(linkElement).toBeInTheDocument;

});

test('it should display Last name', () => {
  
  render( <Router><Management /> </Router>);
  const linkElement = screen.getByText("Last name");
  expect(linkElement).toBeInTheDocument;

});

test('it should display Role', () => {
  
  render( <Router><Management /> </Router>);
  const linkElement = screen.getByText("Role");
  expect(linkElement).toBeInTheDocument;

});

test('it should display Email', () => {
  
  render( <Router><Management /> </Router>);
  const linkElement = screen.getByText("Email");
  expect(linkElement).toBeInTheDocument;

});

test('it should display Phone', () => {
  
  render( <Router><Management /> </Router>);
  const linkElement = screen.getByText("Phone");
  expect(linkElement).toBeInTheDocument;

});
