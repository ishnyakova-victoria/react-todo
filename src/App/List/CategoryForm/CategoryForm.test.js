import React from 'react';
import { render } from '@testing-library/react';
import CategoryForm from './CategoryForm';

test('renders form page', () => {
  const { getByText } = render(<CategoryForm />);
  const textElement = getByText(/This is CategoryForm page/i);
  expect(textElement).toBeInTheDocument();
});

