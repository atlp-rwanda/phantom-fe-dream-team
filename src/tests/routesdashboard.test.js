import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import RoutesDashboard from '../components/RoutesDashboard/RoutesDashboard';

test(' it should render Route no', () => {
    render(  <Provider store={store}> <Router><RoutesDashboard/></Router></Provider>);
    const linkElement = screen.getByText("Route no");
    expect(linkElement).toBeInTheDocument;
  });
  test(' it should render From', () => {
    render(  <Provider store={store}> <Router><RoutesDashboard/></Router></Provider>);
    const linkElement = screen.getByText("From");
    expect(linkElement).toBeInTheDocument;
  });
  test(' it should render To', () => {
    render(  <Provider store={store}> <Router><RoutesDashboard/></Router></Provider>);
    const linkElement = screen.getByText("To");
    expect(linkElement).toBeInTheDocument;
  });

  test(' it should render To', () => {
    render(  <Provider store={store}> <Router><RoutesDashboard/></Router></Provider>);
    const linkElement = screen.getByText("N0 of stations");
    expect(linkElement).toBeInTheDocument;
  });
  test(' it should render To', () => {
    render(  <Provider store={store}> <Router><RoutesDashboard/></Router></Provider>);
    const linkElement = screen.getByText("stations");
    expect(linkElement).toBeInTheDocument;
  });

  test(' it should render To', () => {
    render(  <Provider store={store}> <Router><RoutesDashboard/></Router></Provider>);
    const linkElement = screen.getByText("Price");
    expect(linkElement).toBeInTheDocument;
  });

  test(' it should render To', () => {
    render(  <Provider store={store}> <Router><RoutesDashboard/></Router></Provider>);
    const linkElement = screen.getByText("Action");
    expect(linkElement).toBeInTheDocument;
  });



  


