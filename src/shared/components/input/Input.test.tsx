import React from 'react';

import { screen, render, fireEvent } from 'test';
import { Input } from './Input';

describe('Input component', () => {
  it('renders component correctly', () => {
    render(<Input placeholder="testPlaceholder" label="testLabel" name="testName" />);

    expect(screen.getByPlaceholderText('testPlaceholder')).toBeTruthy();
    expect(screen.getByLabelText('testLabel')).toBeTruthy();
  });

  it('fires change value correctly', () => {
    render(<Input placeholder="testPlaceholder" label="testLabel" name="testName" />);

    expect(screen.queryByDisplayValue('Test')).toBeFalsy();

    fireEvent.change(screen.getByPlaceholderText('testPlaceholder'), { target: { value: 'Test' } });

    expect(screen.getByDisplayValue('Test')).toBeTruthy();
  });
});
