import styled, { css } from 'theme';

export const Wrapper = styled.footer(
  ({ theme: { colors } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${colors.secondary};
  `,
);
