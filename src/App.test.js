import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import SignUp from './components/signUp'
test('test wellcoming message', () => {
  render(<SignUp />);
  const linkElement = screen.getByText("Sign in to your account");
  expect(linkElement).toBeInTheDocument;
});

test('test signin', () => {
  render(<SignUp />);
  const linkElement = screen.getByText("SignIn");
  expect(linkElement).toBeInTheDocument;
});

test('test forget password message', () => {
  render(<SignUp />);
  const linkElement = screen.getByText("Forgotten Password?");
  expect(linkElement).toBeInTheDocument;
});

test('not member', () => {
  render(<SignUp />);
  const linkElement = screen.getByText("Not amember?");
  expect(linkElement).toBeInTheDocument;
});

test('register ', () => {
  render(<SignUp />);
  const linkElement = screen.getByText("Register");
  expect(linkElement).toBeInTheDocument;
});




