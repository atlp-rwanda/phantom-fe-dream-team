import { render, screen } from '@testing-library/react';
import React from 'react';
import Sidebar from './components/Dashboard/sidebar';
import TopNavbar from './components/Dashboard/TopNavbar';
import { MemoryRouter as Router } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Buses from './components/Dashboard/Buses';
import Add from './components/Dashboard/add';
import Home from './components/Dashboard/Home'


test('renders Get in touch with us', () => {
render(<Contact />);
const linkElement = screen.getByText("Get in touch with us");
expect(linkElement).toBeInTheDocument;
});



test('renders Username', () => {
  render(<Router><Sidebar /></Router>);
  const linkElement = screen.getByText("Username");
  expect(linkElement).toBeInTheDocument;
});

test('renders Routes', () => {
  render(<Router><Sidebar /></Router>);
  const linkElement = screen.getByText("Routes");
  expect(linkElement).toBeInTheDocument;
});

test('renders Buses', () => {
  render(<Router><Sidebar /></Router>);
  const linkElement = screen.getByText("Buses");
  expect(linkElement).toBeInTheDocument;
});


test('renders Users ', () => {
  render(<Router><Sidebar /></Router>);
  const linkElement = screen.getByText("Users");
  expect(linkElement).toBeInTheDocument;
});


test('renders Logout', () => {
  render(<Router><Sidebar /></Router>);
  const linkElement = screen.getByText("Logout");
  expect(linkElement).toBeInTheDocument;
});


test('renders ADMIN DASHBOARD', () => {
  render(<Router><TopNavbar /></Router>);
  const linkElement = screen.getByText("ADMIN DASHBOARD");
  expect(linkElement).toBeInTheDocument;
});

test('renders buses', () => {
  render(<Router><Buses/></Router>);
  const linkElement = screen.getByText("Buses");
  expect(linkElement).toBeInTheDocument;
});



test('renders add', () => {
  render(<Router><Add/></Router>);
  const linkElement = screen.getByText("add new ......");
  expect(linkElement).toBeInTheDocument;
});

test('renders home', () => {
  render(<Router><Home/></Router>);
  const linkElement = screen.getByText("Dashboard");
  expect(linkElement).toBeInTheDocument;
});