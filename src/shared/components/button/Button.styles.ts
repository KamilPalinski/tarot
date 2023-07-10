import styled, { css, from } from 'theme';

export const Button = styled.button(
  ({
    theme: {
      colors,
      breakpoints,
      button: { background },
      font: { color },
    },
  }) => css`
    height: 90px;
    border: none;
    border-radius: 10px;
    font-weight: 300;
    text-align: center;
    color: ${color.white};
    word-wrap: break-word;
    background: transparent;

    &:focus {
      outline: 0;
    }

    &.button--red {
      padding: 20px 0;
      font-size: 26px;
      background-color: ${colors.primary};

      ${from(breakpoints.mobile)} {
        font-size: 50px;
      }

      &:hover {
        background: ${background.primary.hover};
      }

      &:active {
        background: ${background.primary.active};
      }

      &:disabled {
        background: ${background.primary.disabled};
      }

      &.button--small {
        width: 190px;

        ${from(breakpoints.mobile)} {
          width: 270px;
        }
      }

      &.button--medium {
        width: 245px;

        ${from(breakpoints.mobile)} {
          width: 450px;
        }
      }
    }

    &.button--green {
      padding: 15px 0;
      font-size: 26px;
      background-color: ${colors.secondary};

      &:hover {
        background: ${background.secondary.hover};
      }

      &:active {
        background: ${background.secondary.active};
      }

      &:disabled {
        background: ${background.secondary.disabled};
      }
      &.button--small {
        width: 188px;

        ${from(breakpoints.mobile)} {
          width: 130px;
        }
      }

      &.button--medium {
        width: 767px;

        ${from(breakpoints.mobile)} {
          width: 175px;
        }
      }
    }
  `,
);
