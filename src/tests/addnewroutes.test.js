import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AddnewRoutes from '../components/RoutesDashboard/AddnewRoutes';
test(' it should render Create', () => {
    render(  <Provider store={store}> <Router><AddnewRoutes/></Router></Provider>);
    const linkElement = screen.getByText("Create");
    expect(linkElement).toBeInTheDocument;
  });
  test(' it should render Cancel', () => {
    render(  <Provider store={store}> <Router><AddnewRoutes/></Router></Provider>);
    const linkElement = screen.getByText("Cancel");
    expect(linkElement).toBeInTheDocument;
  });
