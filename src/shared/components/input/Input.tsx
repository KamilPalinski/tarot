import React from 'react';
import classNames from 'classnames';

import * as Styles from './Input.styles';
import { InputTypesProps } from './Input.types';

export const Input: React.FC<InputTypesProps> = ({ style, className, placeholder, name, label }) => {
  return (
    <Styles.Wrapper>
      {label && <Styles.Label htmlFor={name}>{label}</Styles.Label>}
      <Styles.Input style={style} id={name} placeholder={placeholder} className={classNames('input', className)} />;
    </Styles.Wrapper>
  );
};
