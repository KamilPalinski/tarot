import React from 'react';
import classNames from 'classnames';

import * as Styles from './Container.styles';
import { ContainerProps } from './Container.types';

export const Container: React.FC<ContainerProps> = ({ className, style, children }) => (
  <Styles.Container className={classNames(className, 'container')} style={style}>
    {children}
  </Styles.Container>
);
