import React from 'react';
import { render } from '@testing-library/react';
import View from './View';

test('renders view page', () => {
  const { getByText } = render(<View />);
  const textElement = getByText(/This is View page/i);
  expect(textElement).toBeInTheDocument();
});
