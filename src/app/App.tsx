import React from 'react';

import { EsotericCardOmen } from '../shared/components/esotericCardOmen/EsotericCardOmen';

import { GlobalStyle } from './App.styles';
import { AppProviders } from './providers/AppProviders';
import { AppLayout } from './core/AppLayout';

export const App = () => {
  return (
    <AppProviders>
      <GlobalStyle />
      <AppLayout>
        <EsotericCardOmen />
      </AppLayout>
    </AppProviders>
  );
};
