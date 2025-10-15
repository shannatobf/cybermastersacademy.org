
import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About page heading', () => {
  render(<About />);
  expect(screen.getByText(/Cyber Masters Academy/i)).toBeInTheDocument();
});