import React from 'react';

import { AppProvidersProps } from './AppProviders.types';
import { ThemeContextProvider } from 'shared/context';

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => (
  <ThemeContextProvider>{children}</ThemeContextProvider>
);
