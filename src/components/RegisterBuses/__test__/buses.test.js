import React from 'react';
import { render, screen } from '@testing-library/react';
import Buses from '../buses';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "../../../redux/store"


test('it should display   Plate Number', () => {
  
  render( <Provider store={store}><Router><Buses /> </Router></Provider>);
  const linkElement = screen.getByText("Plate Number");
  expect(linkElement).toBeInTheDocument;

});

test('it should display  Route Number', () => {
  
  render(<Provider store={store}><Router><Buses /> </Router></Provider>);
  const linkElement = screen.getByText("Route Number");
  expect(linkElement).toBeInTheDocument;

});

test('it should display Bus Type', () => {
  
  render( <Provider store={store}><Router><Buses /> </Router></Provider>);
  const linkElement = screen.getByText("Bus Type");
  expect(linkElement).toBeInTheDocument;

});

test('it should display seats', () => {
  
  render(<Provider store={store}><Router><Buses /> </Router></Provider>);
  const linkElement = screen.getByText("Seats");
  expect(linkElement).toBeInTheDocument;

});



