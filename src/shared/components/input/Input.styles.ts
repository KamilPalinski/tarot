import styled, { css, from } from 'theme';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const Input = styled.input(
  ({ theme: { breakpoints, colors } }) =>
    css`
      width: 100%;
      height: 90px;
      border-radius: 10px;
      font-size: 17px;
      background: ${colors.creamyLight};
      resize: none;

      ::placeholder {
        text-align: center;
        opacity: 0.5;
      }

      :focus {
        outline: 0;
      }

      ${from(breakpoints.desktop)} {
        height: 60px;
        font-size: 38px;
      }
    `,
);

export const Label = styled.label(
  ({ theme: { colors, breakpoints } }) => css`
    margin-right: 15px;
    font-size: 25px;
    color: ${colors.white};

    ${from(breakpoints.desktop)} {
      font-size: 38px;
    }
  `,
);
