import React from 'react';
import classNames from 'classnames';

import * as Styles from './Button.styles';
import { ButtonProps, ButtonColor, ButtonSize } from './Button.types';

export const Button: React.FC<ButtonProps> & { color: typeof ButtonColor; size: typeof ButtonSize } = ({
  onClick,
  className,
  children,
  style,
  color = ButtonColor.PRIMARY,
  size = ButtonSize.MEDIUM,
}) => {
  return (
    <Styles.Button
      onClick={onClick}
      style={style}
      className={classNames('button', className, `button--${size}`, `button--${color}`)}
    >
      {children}
    </Styles.Button>
  );
};
Button.color = ButtonColor;
Button.size = ButtonSize;
