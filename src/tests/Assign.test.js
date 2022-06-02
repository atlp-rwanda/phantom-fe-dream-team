
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import AssignDrivers from '../components/Assign-drivers-to-buses/Assign';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { act } from "react-dom/test-utils";



test('renders DRIVERS',() => {
    act(() => {
    render(<Provider store={store}> <Router><AssignDrivers /> </Router></Provider>);
    const linkElement =  screen.getByText("DRIVERS");
    expect(linkElement).toBeInTheDocument;
});
})

test('renders BUSES',() => {
  act(() => {
  render(<Provider store={store}> <Router><AssignDrivers /> </Router></Provider>);
  const linkElement =  screen.getByText("BUSES");
  expect(linkElement).toBeInTheDocument;
});
})


test('renders ACTION',() => {
  act(() => {
  render(<Provider store={store}> <Router><AssignDrivers /> </Router></Provider>);
  const linkElement =  screen.getByText("ACTION");
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








  
