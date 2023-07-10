import { ReactNode, CSSProperties } from 'react';

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

export enum ButtonColor {
  PRIMARY = 'red',
  SECONDARY = 'green',
}

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?(): void;
};
