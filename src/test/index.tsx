import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { ThemeProvider, ThemeVariables } from 'theme';

const customRender = (node: ReactElement, options?: Omit<RenderOptions, 'queries'>) => {
  return render(<ThemeProvider theme={ThemeVariables}>{node}</ThemeProvider>, options);
};

export * from '@testing-library/react';
export { renderHook, act as hookAct } from '@testing-library/react-hooks';
export { customRender as render };
