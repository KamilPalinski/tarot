import React from 'react';

import { render, screen } from 'test';
import { Layout } from './Layout';

describe('Layout component', () => {
  it('renders correctly with default props', () => {
    render(<Layout>Layout</Layout>);

    expect(screen.getByText('Layout')).toBeInTheDocument();
  });

  it('renders correctly with header and footer props', () => {
    render(
      <Layout header={<span>Header</span>} footer={<span>Footer</span>}>
        Layout
      </Layout>,
    );

    expect(screen.getByText('Layout')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});
