import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders /health page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hey There!!! The App is Healthy/i);
  expect(linkElement).toBeInTheDocument();
});
