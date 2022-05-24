import { render, screen } from '@testing-library/react';
import React from 'react';
import Sidebar from './components/Dashboard/sidebar';
import TopNavbar from './components/Dashboard/TopNavbar';
import { MemoryRouter as Router } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Buses from './components/Dashboard/Buses';
import RoutesDashboard from './components/Dashboard/RoutesDashboard';
import Add from './components/Dashboard/add';
import Home from './components/Dashboard/Home'
import Sidebar from './components/Dashboard/sidebar';
import TopNavbar from './components/Dashboard/TopNavbar'
test('renders Get in touch with us', () => {
render(<Contact />);
const linkElement = screen.getByText("Get in touch with us");
expect(linkElement).toBeInTheDocument;
});



test('renders Username', () => {
<<<<<<< HEAD
  render(<Router><Sidebar/></Router>);
=======
  render(<Router><Sidebar /></Router>);
>>>>>>> 15bafde77c38d9d70c5b60575b066cb4b707a302
  const linkElement = screen.getByText("Username");
  expect(linkElement).toBeInTheDocument;
});

test('renders Routes', () => {
<<<<<<< HEAD
  render(<Router><Sidebar/></Router>);
=======
  render(<Router><Sidebar /></Router>);
>>>>>>> 15bafde77c38d9d70c5b60575b066cb4b707a302
  const linkElement = screen.getByText("Routes");
  expect(linkElement).toBeInTheDocument;
});

test('renders Buses', () => {
<<<<<<< HEAD
  render(<Router><Sidebar/></Router>);
=======
  render(<Router><Sidebar /></Router>);
>>>>>>> 15bafde77c38d9d70c5b60575b066cb4b707a302
  const linkElement = screen.getByText("Buses");
  expect(linkElement).toBeInTheDocument;
});

<<<<<<< HEAD
test('renders Drivers', () => {
  render(<Router><Sidebar/></Router>);
  const linkElement = screen.getByText("Drivers");
  expect(linkElement).toBeInTheDocument;
});


test('renders Users ', () => {
  render(<Router><Sidebar/></Router>);
=======



test('renders Users ', () => {
  render(<Router><Sidebar /></Router>);
>>>>>>> 15bafde77c38d9d70c5b60575b066cb4b707a302
  const linkElement = screen.getByText("Users");
  expect(linkElement).toBeInTheDocument;
});


test('renders Logout', () => {
<<<<<<< HEAD
  render(<Router><Sidebar/></Router>);
=======
  render(<Router><Sidebar /></Router>);
>>>>>>> 15bafde77c38d9d70c5b60575b066cb4b707a302
  const linkElement = screen.getByText("Logout");
  expect(linkElement).toBeInTheDocument;
});


test('renders ADMIN DASHBOARD', () => {
<<<<<<< HEAD
  render(<Router><TopNavbar/></Router>);
=======
  render(<Router><TopNavbar /></Router>);
>>>>>>> 15bafde77c38d9d70c5b60575b066cb4b707a302
  const linkElement = screen.getByText("ADMIN DASHBOARD");
  expect(linkElement).toBeInTheDocument;
});

test('renders buses', () => {
  render(<Router><Buses/></Router>);
  const linkElement = screen.getByText("Buses");
  expect(linkElement).toBeInTheDocument;
});

test('renders routes', () => {
  render(<Router><RoutesDashboard/></Router>);
  const linkElement = screen.getByText("Routes");
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

