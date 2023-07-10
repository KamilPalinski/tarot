import styled, { css, from } from 'theme';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const Textarea = styled.textarea(
  ({ theme: { colors, breakpoints } }) => css`
    width: 100%;
    height: 172px;
    border-radius: 10px;
    resize: none;
    font-size: 17px;
    background: ${colors.creamyLight};

    :focus {
      outline: 0;
    }

    ${from(breakpoints.desktop)} {
      height: 330px;
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
