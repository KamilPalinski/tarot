import React from 'react';

import { Container } from './container/Container';
import { Row } from './row/Row';
import { Column } from './column/Column';

export const Grid: React.FC & {
  Container: typeof Container;
  Row: typeof Row;
  Column: typeof Column;
} = ({ children }) => {
  return <>{children}</>;
};

Grid.Container = Container;
Grid.Row = Row;
Grid.Column = Column;
