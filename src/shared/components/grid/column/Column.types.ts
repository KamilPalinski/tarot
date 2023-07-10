import { CSSProperties, ReactNode } from 'react';

export type ColumnProps = {
  className?: string;
  style?: CSSProperties;
  size?: number | 'auto';
  children?: ReactNode;
};
