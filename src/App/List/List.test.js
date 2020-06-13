import React from 'react';
import { render } from '@testing-library/react';
import List from './List';

test('renders list page', () => {
  const { getByText } = render(<List />);
  const textElement = getByText(/This is List page/i);
  expect(textElement).toBeInTheDocument();
});
