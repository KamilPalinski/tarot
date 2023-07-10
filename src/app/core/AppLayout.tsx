import React from 'react';

import { Grid, Layout } from 'shared/components';
import * as Styles from './AppLayout.styles';
import { Header } from './header/Header';
import { AppLayoutProps } from './AppLayout.types';
import { Footer } from './footer/Footer';

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <Layout header={<Header />} footer={<Footer />}>
    <Grid.Container>
      <Styles.Column>{children}</Styles.Column>
    </Grid.Container>
  </Layout>
);
