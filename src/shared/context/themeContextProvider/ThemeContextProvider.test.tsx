import React from 'react';
import { ThemeConsumer } from 'styled-components';

import { render } from 'test';
import { ThemeVariables } from 'theme';

describe('ThemeContextProvider component', () => {
  it('set correctly custom theme', () => {
    const onContext = jest.fn(() => <div />);

    render(<ThemeConsumer>{onContext}</ThemeConsumer>);

    expect(onContext).toHaveBeenCalledWith(ThemeVariables);
  });
});
