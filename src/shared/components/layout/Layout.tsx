import React from 'react';
import classNames from 'classnames';

import * as Styles from './Layout.styles';
import { LayoutProps } from './Layout.types';

export const Layout: React.FC<LayoutProps> = ({ className, style, header, footer, children }) => {
  return (
    <Styles.Wrapper className={classNames(className, 'layout')} style={style}>
      {header}
      <div className="layout__content">{children}</div>
      {footer}
    </Styles.Wrapper>
  );
};
