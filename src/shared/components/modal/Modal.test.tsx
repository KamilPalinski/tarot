import React from 'react';

import { render, screen } from 'test';
import { Modal } from './Modal';

describe('Modal component', () => {
  it('renders correctly with default props', () => {
    render(<Modal isOpened>test</Modal>);

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
