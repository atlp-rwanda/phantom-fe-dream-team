import React from 'react';
import { render, screen } from '@testing-library/react';
import RegisterUser from '../registerUser';
import { MemoryRouter as Router } from 'react-router-dom';


test('it should display First name', () => {
  
  render( <Router><RegisterUser /> </Router>);
  const linkElement = screen.getByText("Register Drivers & Operators");
  expect(linkElement).toBeInTheDocument;

});

test('it should display Edit', () => {
  
  render( <Router><RegisterUser /> </Router>);
  const linkElement = screen.getByText("Edit");
  expect(linkElement).toBeInTheDocument;

});

test('it should display First name:', () => {
  
  render( <Router><RegisterUser /> </Router>);
  const linkElement = screen.getByText("First name:");
  expect(linkElement).toBeInTheDocument;

});
test('it should display Last name', () => {
  
  render( <Router><RegisterUser /> </Router>);
  const linkElement = screen.getByText("Last name:");
  expect(linkElement).toBeInTheDocument;

});

test('it should display Email:', () => {
  
  render( <Router><RegisterUser /> </Router>);
  const linkElement = screen.getByText("Email:");
  expect(linkElement).toBeInTheDocument;

});

test('it should display Phone:', () => {
  
  render( <Router><RegisterUser /> </Router>);
  const linkElement = screen.getByText("Phone:");
  expect(linkElement).toBeInTheDocument;

});

test('it should display Role: ', () => {
  
  render( <Router><RegisterUser /> </Router>);
  const linkElement = screen.getByText("Role:");
  expect(linkElement).toBeInTheDocument;

});

