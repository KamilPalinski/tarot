import styled, { css, from } from 'theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Cards = styled.div(
  ({ theme: { breakpoints } }) => css`
    height: 170px;
    display: block;
    ${from(breakpoints.desktop)} {
      height: 320px;
    }

    .esoteric-card {
      margin-right: -150px;

      ${from(breakpoints.desktop)} {
        margin-right: -100px;
      }
    }
  `,
);

export const WrapperResult = styled.div(
  ({
    theme: {
      font: { color },
      breakpoints,
    },
  }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
    h1 {
      height: 40px;
      color: ${color.white};
      font-size: 25px;
      text-align: center;
      margin-bottom: 100px;

      ${from(breakpoints.desktop)} {
        font-size: 50px;
      }
    }
  `,
);

export const Result = styled.img(
  ({ theme: { breakpoints } }) => css`
    width: 98px;
    height: 164px;
    margin-bottom: 50px;

    ${from(breakpoints.desktop)} {
      width: 178px;
      height: 288px;
    }
  `,
);

export const Content = styled.div(
  ({
    theme: {
      font: { color },
      breakpoints,
    },
  }) => css`
    display: inline-flex;
    h2 {
      margin-left: 100px;
      font-size: 13px;
      color: ${color.white};
      margin-bottom: 10px;
      ${from(breakpoints.desktop)} {
        font-size: 25px;
      }
    }
    p {
      margin-left: 100px;
      font-size: 13px;
      color: ${color.white};

      ${from(breakpoints.desktop)} {
        font-size: 25px;
      }
    }
  `,
);
