import React from 'react';

import { render, screen } from 'test';
import { Row } from './Row';

describe('Row component', () => {
  it('renders correctly with default props', () => {
    render(<Row>Children</Row>);

    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
