import { CSSProperties, ReactNode } from 'react';

export type HeaderProps = {
  children: ReactNode;
  hasBorder?: boolean;
  className?: string;
  style?: CSSProperties;
};
