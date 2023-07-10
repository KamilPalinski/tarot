import { ReactNode, CSSProperties } from 'react';

export enum CardBackgroundColor {
  LIGHT_SECONDARY = 'light-secondary',
  ULTRA_LIGHT_SECONDARY = 'ultra-light-secondary',
}

export type CardProps = {
  children: ReactNode;
  variant?: CardBackgroundColor;
  style?: CSSProperties;
  className?: string;
};
