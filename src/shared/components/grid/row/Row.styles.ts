import styled, { css } from 'theme';

export const Row = styled.div<{ align?: string }>(
  ({ align, theme: { grid } }) => css`
    display: flex;
    width: 100%;
    max-width: ${grid.maxWidth}px;
    margin: 0 auto;
    ${align &&
      css`
        justify-content: ${align};
      `}

    &.row--full-width {
      max-width: ${grid.maxWidthFull}px;
    }
  `,
);
