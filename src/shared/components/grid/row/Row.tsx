import React, { forwardRef } from 'react';
import classNames from 'classnames';

import * as Styles from './Row.styles';
import { RowProps } from './Row.types';

export const Row: React.FC<RowProps> = forwardRef<HTMLDivElement, RowProps>(
  ({ align, className, style, children, isFullWidth }, ref) => (
    <Styles.Row
      className={classNames(className, 'row', { 'row--full-width': isFullWidth })}
      style={style}
      align={align}
      ref={ref}
    >
      {children}
    </Styles.Row>
  ),
);
