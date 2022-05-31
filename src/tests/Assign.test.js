
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import AssignDrivers from '../components/Assign-drivers-to-buses/Assign';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { act } from "react-dom/test-utils";



test('renders Drivers',() => {
    act(() => {
    render(<Provider store={store}> <Router><AssignDrivers /> </Router></Provider>);
    const linkElement =  screen.getByText("Drivers");
    expect(linkElement).toBeInTheDocument;
});
})

test('renders Buses',() => {
  act(() => {
  render(<Provider store={store}> <Router><AssignDrivers /> </Router></Provider>);
  const linkElement =  screen.getByText("Buses");
  expect(linkElement).toBeInTheDocument;
});
})


test('renders Action',() => {
  act(() => {
  render(<Provider store={store}> <Router><AssignDrivers /> </Router></Provider>);
  const linkElement =  screen.getByText("Action");
  expect(linkElement).toBeInTheDocument;
});
})

test('renders EDIT',() => {
  act(() => {
  render(<Provider store={store}> <Router><AssignDrivers /> </Router></Provider>);
  const linkElement =  screen.getByText("EDIT");
  expect(linkElement).toBeInTheDocument;
});
})



test('renders DELETE',() => {
  act(() => {
  render(<Provider store={store}> <Router><AssignDrivers /> </Router></Provider>);
  const linkElement =  screen.getByText("DELETE");
  expect(linkElement).toBeInTheDocument;
});
 })








  
