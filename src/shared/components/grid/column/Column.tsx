import React from 'react';
import classNames from 'classnames';

import * as Styles from './Column.styles';
import { ColumnProps } from './Column.types';

export const Column: React.FC<ColumnProps> = ({ className, style, size, children }) => (
  <Styles.Column className={classNames(className, 'column')} style={style} size={size}>
    {children}
  </Styles.Column>
);
