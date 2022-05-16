import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import { Provider } from 'react-redux';
import AddRole from '../components/SetRolesPermission/AddRole';
test('renders ADD USER ROLE', () => {
    render(<Provider store={store}> <Router><AddRole /> </Router></Provider>);
    const linkElement = screen.getByText("ADD USER ROLE");
    expect(linkElement).toBeInTheDocument;
});

test('renders User Role:', () => {
    render(<Provider store={store}> <Router><AddRole /> </Router></Provider>);
    const linkElement = screen.getByText("User Role:");
    expect(linkElement).toBeInTheDocument;
});

test('renders Permissions:', () => {
    render(<Provider store={store}> <Router><AddRole /> </Router></Provider>);
    const linkElement = screen.getByText("Permissions:");
    expect(linkElement).toBeInTheDocument;
});
test('renders Select Permissions', () => {
    render(<Provider store={store}> <Router><AddRole /> </Router></Provider>);
    const linkElement = screen.getByText("Select Permissions");
    expect(linkElement).toBeInTheDocument;
});
test('renders Cancel', () => {
    render(<Provider store={store}> <Router><AddRole /> </Router></Provider>);
    const linkElement = screen.getByText("Cancel");
    expect(linkElement).toBeInTheDocument;
});
test('renders Save', () => {
    render(<Provider store={store}> <Router><AddRole /> </Router></Provider>);
    const linkElement = screen.getByText("Save");
    expect(linkElement).toBeInTheDocument;
});
