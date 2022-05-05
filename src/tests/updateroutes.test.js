import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import UpdateRoute from '../components/RoutesDashboard/UpdateRoute';
test(' it should render Create', () => {
    render(  <Provider store={store}> <Router><UpdateRoute/></Router></Provider>);
    const linkElement = screen.getByText("Update");
    expect(linkElement).toBeInTheDocument;
  });
  test(' it should render Cancel', () => {
    render(  <Provider store={store}> <Router><UpdateRoute/></Router></Provider>);
    const linkElement = screen.getByText("Cancel");
    expect(linkElement).toBeInTheDocument;
  });
