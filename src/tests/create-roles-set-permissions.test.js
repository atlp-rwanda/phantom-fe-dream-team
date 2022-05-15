import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import SetRoles from '../components/SetRolesPermission/setRoles';
import store from '../redux/store';
import { Provider } from 'react-redux';

test('renders Role', () => {
    render(<Provider store={store}> <Router><SetRoles /> </Router></Provider>);
    const linkElement = screen.getByText("Role");
    expect(linkElement).toBeInTheDocument;
});

test('renders  Permissions', () => {
    render(<Provider store={store}> <Router><SetRoles /> </Router></Provider>);
    const linkElement = screen.getByText("Permissions");
    expect(linkElement).toBeInTheDocument;
});
test('renders Actions', () => {
    render(<Provider store={store}> <Router><SetRoles /> </Router></Provider>);
    const linkElement = screen.getByText("Actions");
    expect(linkElement).toBeInTheDocument;
});

test('renders Add New Role', () => {
    render(<Provider store={store}> <Router><SetRoles /> </Router></Provider>);
    const linkElement = screen.getByText("Add New Role");
    expect(linkElement).toBeInTheDocument;
});

