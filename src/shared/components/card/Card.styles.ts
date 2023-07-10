import styled, { css } from 'theme';

export const Wrapper = styled.div(
  ({ theme: { colors, boxShadow } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px 60px;
    box-shadow: ${boxShadow.primary};

    &.card--light-secondary {
      background-color: ${colors.lightSecondary};
    }

    &.card--ultra-light-secondary {
      background-color: ${colors.ultraLightSecondary};
    }
  `,
);

export const Text = styled.p(
  ({ theme: { font } }) => css`
    padding-top: 50px;
    font-weight: 400;
    color: ${font.color.white};
  `,
);
