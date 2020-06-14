import React from 'react';
import { render } from '@testing-library/react';
import Todos from './Todos';

test('renders todos', () => {
  const { getByText } = render(<Todos />);
  const textElement = getByText(/This is Todos/i);
  expect(textElement).toBeInTheDocument();
});
