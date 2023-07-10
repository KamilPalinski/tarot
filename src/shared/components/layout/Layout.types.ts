import { CSSProperties, ReactNode } from 'react';

export type LayoutProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  header?: ReactNode;
  footer?: ReactNode;
};
