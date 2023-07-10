import { CSSProperties } from 'react';

export type SelectProps = {
  options: Array<string | number>;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
};
