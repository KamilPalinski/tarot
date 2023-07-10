import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeContextProviderProps } from './ThemeContextProvider.types';
import { ThemeVariables } from 'theme';

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => (
  <ThemeProvider theme={ThemeVariables}>{children}</ThemeProvider>
);
