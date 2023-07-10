import styled, { css } from 'theme';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  font-size: 26px;
  font-weight: 400;
`;

export const SelectWrapper = styled.div(
  ({ theme: { colors } }) => css`
    position: relative;
    border-radius: 10px;
    padding: 30px 55px 30px 30px;
    background-color: ${colors.creamyLight};
  `,
);

export const Clip = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
  width: 25px;
  height: 30px;
  margin-left: 50px;
  background-color: black;
  transition: transform 0.3s;
  clip-path: polygon(0% 0%, 100% 0%, 50% 100%);

  &.clip--rotated {
    transform: rotate(180deg);
    transition: transform 0.3s;
  }
`;

export const OptionsWrapper = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    background-color: ${colors.creamyLight};
  `,
);

export const Option = styled.ol(
  ({ theme: { colors } }) => css`
    padding-left: 30px;

    &:hover {
      background-color: ${colors.gray};
    }
  `,
);
