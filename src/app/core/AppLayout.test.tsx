import React from 'react';

import { render, screen } from 'test';
import { AppLayout } from './AppLayout';

describe('AppLayout component', () => {
  it('renders correctly with default props', () => {
    render(<AppLayout />);

    expect(screen.getAllByRole('button').length).toBe(6);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getAllByText('Lorem').length).toBe(5);
  });

  it('renders correctly children', () => {
    render(
      <AppLayout>
        <p>test</p>
      </AppLayout>,
    );

    expect(screen.getAllByRole('button').length).toBe(6);
    expect(screen.getAllByText('Lorem').length).toBe(5);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
