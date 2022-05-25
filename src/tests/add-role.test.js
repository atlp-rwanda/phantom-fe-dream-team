import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { act } from "react-dom/test-utils";
import AddRole from '../components/SetRolesPermission/AddRole';

test('renders User Role:', () => {
    act(() => {
        render(<Provider store={store}> <Router><AddRole /> </Router></Provider>);
        const linkElement = screen.getByText("User Role:");
       


    expect(linkElement).toBeInTheDocument;
});
})

test('renders Select Permissions', () => {
    act(() => {
    render(<Provider store={store}> <Router><AddRole /> </Router></Provider>);
    const linkElement = screen.getByText("Select Permissions");
    expect(linkElement).toBeInTheDocument;
});
})
test('renders Cancel', () => {
    act(() => {
    render(<Provider store={store}> <Router><AddRole /> </Router></Provider>);
    const linkElement = screen.getByText("Cancel");
    expect(linkElement).toBeInTheDocument;
});
})
test('renders Save', () => {
    act(() => {
    render(<Provider store={store}> <Router><AddRole /> </Router></Provider>);
    const linkElement = screen.getByText("Save");
    expect(linkElement).toBeInTheDocument;
});
})
