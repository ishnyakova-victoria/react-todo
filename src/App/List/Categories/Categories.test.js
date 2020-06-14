import React from 'react';
import { render } from '@testing-library/react';
import Categories from './Categories';

test('renders categories', () => {
  const { getByText } = render(<Categories />);
  const textElement = getByText(/This is Categories/i);
  expect(textElement).toBeInTheDocument();
});
