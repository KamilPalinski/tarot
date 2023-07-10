import styled, { css, from } from 'theme';

export const EsotericCard = styled.img(
  ({ theme: { breakpoints } }) => css`
    width: 180px;
    height: 300px;
    border: none;
    object-fit: contain;

    &:focus {
      outline: 0;
    }

    &.esoteric-card--reversed {
      position: relative;
      width: 98px;
      height: 164px;
      transition-duration: 1s;

      &:hover {
        transform: translateY(-50px);
        transition-duration: 1s;
      }
    }

    &.esoteric-card--selected {
      width: 98px;
      height: 164px;
      transform: translateY(-50px);
      transition-duration: 1s;
    }

    ${from(breakpoints.desktop)} {
      &.esoteric-card--reversed {
        width: 180px;
        height: 300px;
      }

      &.esoteric-card--selected {
        width: 180px;
        height: 300px;
      }
    }
  `,
);
