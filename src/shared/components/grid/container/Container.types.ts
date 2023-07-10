import { CSSProperties, ReactNode } from 'react';

export type ContainerProps = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};
