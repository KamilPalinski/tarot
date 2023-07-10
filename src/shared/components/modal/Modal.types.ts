import { ReactNode, CSSProperties } from 'react';

export type ModalProps = {
  isOpened: boolean;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};
