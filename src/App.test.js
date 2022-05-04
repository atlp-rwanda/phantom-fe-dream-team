import { render, screen } from '@testing-library/react';
import React from 'react';

import Contact from './components/Contact/Contact';

test('renders Get in touch with us', () => {
render(<Contact />);
const linkElement = screen.getByText("Get in touch with us");
expect(linkElement).toBeInTheDocument;
});
