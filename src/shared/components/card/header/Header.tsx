import React from 'react';
import classNames from 'classnames';

import { HeaderProps } from './Header.types';
import * as Styles from './Header.styles';

export const Header: React.FC<HeaderProps> = ({ children, hasBorder, className, style }) => (
  <Styles.Text
    style={style}
    className={classNames('card__header', className, {
      'card__header--border-bottom': hasBorder,
    })}
  >
    {children}
  </Styles.Text>
);
