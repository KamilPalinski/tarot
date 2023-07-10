import styled, { css } from 'theme';

const HEADER_HEIGHT = 120;

export const Wrapper = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    flex-flow: column;
    min-width: 1160px;
    height: 100%;

    .layout__content {
      flex: 1 0 auto;
      background-color: ${colors.ultraLightSecondary};
    }

    > .header {
      position: fixed;
      z-index: 3;

      + .layout__content {
        margin-top: ${HEADER_HEIGHT}px;
      }
    }
  `,
);
