import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import SetRoles from '../components/SetRolesPermission/setRoles';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { act } from "react-dom/test-utils";
test('renders Role',() => {
    act(() => {
    render(<Provider store={store}> <Router><SetRoles /> </Router></Provider>);
    const linkElement =  screen.getByText("Role");
    expect(linkElement).toBeInTheDocument;
});
})
test('renders  Permissions', () => {
    act(() => {
    render(<Provider store={store}> <Router><SetRoles /> </Router></Provider>);
    const linkElement = screen.getByText("Permissions");
    expect(linkElement).toBeInTheDocument;
});
})
test('renders Actions', () => {
    act(() => {
    render(<Provider store={store}> <Router><SetRoles /> </Router></Provider>);
    const linkElement = screen.getByText("Actions");
    expect(linkElement).toBeInTheDocument;
});
})


