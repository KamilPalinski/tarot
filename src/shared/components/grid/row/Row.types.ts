import { CSSProperties, ReactNode, Ref } from 'react';

export type RowProps = {
  className?: string;
  style?: CSSProperties;
  align?: string;
  children: ReactNode;
  isFullWidth?: boolean;
  ref?: Ref<HTMLDivElement>;
};
