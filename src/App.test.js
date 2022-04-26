import { render, screen } from '@testing-library/react';

import React from 'react';

import Landingpage from './components/Landingpage/Landingpage';
test('renders learn react link', () => {
  render(<Landingpage />);
  const linkElement = screen.getByText("WELCOME TO PHANTOM");
  expect(linkElement).toBeInTheDocument;
});
test(' it should render paragraph', () => {
  render(<Landingpage />);
  const linkElement = screen.getByText("Don't need to wait for the bus for long? We can help. know the best nearby station");
  expect(linkElement).toBeInTheDocument;
});

test(' it should render about phantom', () => {
  render(<Landingpage />);
  const linkElement = screen.getByText("About Phantom");
  expect(linkElement).toBeInTheDocument;
});

test(' it should render about phantom  details', () => {
  render(< br />);
  
});

test(' it should render about button', () => {
  render(<Landingpage />);
  const linkElement = screen.getByText("Read More");
  expect(linkElement).toBeInTheDocument;
});




