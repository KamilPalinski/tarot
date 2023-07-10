import styled, { css } from 'theme';

export const Text = styled.p(
  ({ theme: { font, colors } }) => css`
    width: 100%;
    padding-bottom: 16px;
    font-weight: 300;
    text-align: center;
    color: ${font.color.white};

    &.card__header--border-bottom {
      border-bottom: 1px solid ${colors.white};
    }
  `,
);
