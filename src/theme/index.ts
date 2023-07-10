import * as styledComponents from 'styled-components';

import { to } from './to/to';
import { from } from './from/from';
import { ThemeVariables } from './ThemeVariables';
import { ThemeType } from './Theme.types';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemeContext,
  ThemeConsumer,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeType>;

export { css, createGlobalStyle, keyframes, ThemeVariables, ThemeProvider, ThemeContext, ThemeConsumer, to, from };

export default styled;
