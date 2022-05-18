import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from '../Users';
import { MemoryRouter as Router } from 'react-router-dom';


test('it should display First name', () => {
  
  render( <Router><Users /> </Router>);
  const linkElement = screen.getByText("First name");
  expect(linkElement).toBeInTheDocument;

});

test('it should display delete', () => {
  
  render( <Router><Users /> </Router>);
  const linkElement = screen.getByText("Action");
  expect(linkElement).toBeInTheDocument;

});

test('it should display Last name', () => {
  
  render( <Router><Users/> </Router>);
  const linkElement = screen.getByText("Last name");
  expect(linkElement).toBeInTheDocument;

});

test('it should display Role', () => {
  
  render( <Router><Users /> </Router>);
  const linkElement = screen.getByText("Role");
  expect(linkElement).toBeInTheDocument;

});

test('it should display Email', () => {
  
  render( <Router><Users /> </Router>);
  const linkElement = screen.getByText("Email");
  expect(linkElement).toBeInTheDocument;

});

test('it should display Phone', () => {
  
  render( <Router><Users/> </Router>);
  const linkElement = screen.getByText("Phone");
  expect(linkElement).toBeInTheDocument;

});
