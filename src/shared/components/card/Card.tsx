import React from 'react';
import classNames from 'classnames';

import * as Styles from './Card.styles';
import { CardProps, CardBackgroundColor } from './Card.types';
import { Header } from './header/Header';

export const Card: React.FC<CardProps> & {
  Header: typeof Header;
  color: typeof CardBackgroundColor;
  Text: typeof Styles.Text;
} = ({ children, style, className, variant = CardBackgroundColor.LIGHT_SECONDARY }) => (
  <Styles.Wrapper style={style} className={classNames('card', className, `card--${variant}`)}>
    {children}
  </Styles.Wrapper>
);

Card.Header = Header;
Card.color = CardBackgroundColor;
Card.Text = Styles.Text;
