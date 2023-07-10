import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

import { usePortal } from 'shared/hooks';
import { ModalProps } from './Modal.types';
import * as Styles from './Modal.styles';

export const Modal: React.FC<ModalProps> = ({ isOpened, children, className, style }) => {
  const target = usePortal('modal-portal');
  const root = usePortal('root');

  useEffect(() => {
    if (isOpened) {
      target.classList.add('modal--open');
      root.classList.add('root--blurred');
    }

    return () => {
      target.classList.remove('modal--open');
      root.classList.remove('root--blurred');
    };
  });

  return isOpened
    ? createPortal(
        <Styles.Wrapper className={classNames('modal', className)} style={style}>
          {children}
        </Styles.Wrapper>,
        target,
      )
    : null;
};
