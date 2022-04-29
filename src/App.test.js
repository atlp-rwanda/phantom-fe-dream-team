import { render, screen } from '@testing-library/react';
import React from 'react';

import Contact from './components/Contact/Contact';

test('renders Get in touch with us', () => {
render(<Contact />);
const linkElement = screen.getByText("Get in touch with us");
expect(linkElement).toBeInTheDocument;
});
import Dashboard from './components/dashboard';
import { MemoryRouter as Router } from 'react-router-dom';


test('renders Username', () => {
  render(<Router><Dashboard/></Router>);
  const linkElement = screen.getByText("Username");
  expect(linkElement).toBeInTheDocument;
});

test('renders Routes', () => {
  render(<Router><Dashboard/></Router>);
  const linkElement = screen.getByText("Routes");
  expect(linkElement).toBeInTheDocument;
});

test('renders Buses', () => {
  render(<Router><Dashboard/></Router>);
  const linkElement = screen.getByText("Buses");
  expect(linkElement).toBeInTheDocument;
});

test('renders Drivers', () => {
  render(<Router><Dashboard/></Router>);
  const linkElement = screen.getByText("Drivers");
  expect(linkElement).toBeInTheDocument;
});


test('renders Users ', () => {
  render(<Router><Dashboard/></Router>);
  const linkElement = screen.getByText("Users");
  expect(linkElement).toBeInTheDocument;
});


test('renders Logout', () => {
  render(<Router><Dashboard/></Router>);
  const linkElement = screen.getByText("Logout");
  expect(linkElement).toBeInTheDocument;
});


test('renders ADMIN DASHBOARD', () => {
  render(<Router><Dashboard/></Router>);
  const linkElement = screen.getByText("ADMIN DASHBOARD");
  expect(linkElement).toBeInTheDocument;
});

