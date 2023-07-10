import React from 'react';
import classNames from 'classnames';

import * as Styles from './Textarea.styles';
import { TextareaProps } from './Textarea.types';

export const Textarea: React.FC<TextareaProps> = ({ style, className, placeholder, label, name }) => {
  return (
    <Styles.Wrapper>
      {label && <Styles.Label htmlFor={name}>{label}</Styles.Label>}
      <Styles.Textarea
        style={style}
        id={name}
        placeholder={placeholder}
        className={classNames('textarea', className)}
      />
    </Styles.Wrapper>
  );
};
