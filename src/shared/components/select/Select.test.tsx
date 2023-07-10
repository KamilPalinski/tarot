import React from 'react';

import { render, fireEvent, screen } from 'test';
import { Select } from './Select';

describe('Select component', () => {
  it('renders correctly with default props', () => {
    render(<Select placeholder="test" options={['testValue']} />);

    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.queryByText('testValue')).not.toBeInTheDocument();
  });

  it('handles open and select correctly', async () => {
    render(<Select placeholder="test" options={[1, 2, 3]} />);

    expect(screen.queryByText('1')).not.toBeInTheDocument();
    expect(screen.queryByText('2')).not.toBeInTheDocument();
    expect(screen.queryByText('3')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('test'));

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();

    fireEvent.click(screen.getByText('2'));

    expect(screen.queryByText('1')).not.toBeInTheDocument();
    expect(screen.queryByText('3')).not.toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
