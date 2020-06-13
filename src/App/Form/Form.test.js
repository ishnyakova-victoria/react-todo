import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';

test('renders form page', () => {
  const { getByText } = render(<Form />);
  const textElement = getByText(/This is Form page/i);
  expect(textElement).toBeInTheDocument();
});

