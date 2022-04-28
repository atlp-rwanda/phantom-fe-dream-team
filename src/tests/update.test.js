import React from 'react';
import { render, screen } from '@testing-library/react';
import changePassword from '../redux/reducers/changepassword';
import Profile from '../components/updateProfile/profile';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {updateProfile} from "../redux/actions/index";
import ChangePassword from '../components/updateProfile/changePassword';
import { useSelector, useDispatch} from 'react-redux';
import store from '../redux/store';

test('it should display Change your password', () => {
  
  render(  <Provider store={store}> <Router><ChangePassword /> </Router></Provider>);
  const linkElement = screen.getByText("Change your password");
  expect(linkElement).toBeInTheDocument;

});
test('it should have  Old Password input field', () => {
  
  render(  <Provider store={store}> <Router><ChangePassword /> </Router></Provider>);
  const linkElement = screen.getByText("Old Password:");
  expect(linkElement).toBeInTheDocument;

});
test('it should have  New Password input field', () => {
  
  render(  <Provider store={store}> <Router><ChangePassword /> </Router></Provider>);
  const linkElement = screen.getByText("New Password:");
  expect(linkElement).toBeInTheDocument;

});
test('it should have  Retype Password input field', () => {
  
  render(  <Provider store={store}> <Router><ChangePassword /> </Router></Provider>);
  const linkElement = screen.getByText("Retype Password:");
  expect(linkElement).toBeInTheDocument;

});
test('it should have  Save button', () => {
  
  render(  <Provider store={store}> <Router><ChangePassword /> </Router></Provider>);
  const linkElement = screen.getByRole('button',{name:/Save/});
  expect(linkElement).toBeInTheDocument;

});
test('it should have  Cancel button', () => {
  
  render(  <Provider store={store}> <Router><ChangePassword /> </Router></Provider>);
  const linkElement = screen.getByRole('button',{name:/Cancel/});
  expect(linkElement).toBeInTheDocument;

});