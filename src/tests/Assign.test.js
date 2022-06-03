
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import AssignDrivers from '../components/Assign-drivers-to-buses/Assign';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { act } from "react-dom/test-utils";


test('renders DRIVER',() => {
    act(() => {
    render(<Provider store={store}> <Router><AssignDrivers /> </Router></Provider>);
    const linkElement =  screen.getByText("DRIVER");
    expect(linkElement).toBeInTheDocument;
});
})

test('renders BUS',() => {
  act(() => {
  render(<Provider store={store}> <Router><AssignDrivers /> </Router></Provider>);
  const linkElement =  screen.getByText("BUS");
  expect(linkElement).toBeInTheDocument;
});
})


test('renders ACTIONS',() => {
  act(() => {
  render(<Provider store={store}> <Router><AssignDrivers /> </Router></Provider>);
  const linkElement =  screen.getByText("ACTIONS");
  expect(linkElement).toBeInTheDocument;
});
})

