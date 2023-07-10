import React from 'react';

import { render, screen, fireEvent } from 'test';
import { Textarea } from './Textarea';

describe('Textarea component', () => {
  it('renders component correctly', () => {
    render(<Textarea placeholder="testPlaceholder" label="testLabel" name="testLabel" />);

    expect(screen.getByPlaceholderText('testPlaceholder')).toBeTruthy();
    expect(screen.getByLabelText('testLabel')).toBeTruthy();
  });

  it('fires change event correctly', () => {
    render(<Textarea name="testLabel" placeholder="testPlaceholder" />);

    fireEvent.change(screen.getByPlaceholderText('testPlaceholder'), { target: { value: 'testValue' } });

    expect(screen.getByDisplayValue('testValue')).toBeTruthy();
  });
});
