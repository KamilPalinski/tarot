import React from 'react';

import { render, screen } from 'test';
import { Column } from './Column';

describe('Column component', () => {
  it('renders correctly with default props', () => {
    render(<Column size={1 / 12}>Children</Column>);

    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
