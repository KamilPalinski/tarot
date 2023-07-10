import BackgroundImage from '../../assets/images/background-logo.png';

import styled, { css } from 'theme';
import { Grid } from 'shared/components';

export const Column = styled(Grid.Row)(
  ({ theme: { colors } }) => css`
    position: relative;
    height: 1200px;
    background-color: ${colors.secondary};
    background-image: url(${BackgroundImage});
    background-position: center top;
  `,
);
