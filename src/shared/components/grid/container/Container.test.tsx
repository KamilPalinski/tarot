import React from 'react';

import { render, screen } from 'test';
import { Container } from './Container';

describe('Container component', () => {
  it('renders correctly with default props', () => {
    render(<Container>Test</Container>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
