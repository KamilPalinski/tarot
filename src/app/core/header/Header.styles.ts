import styled, { css } from 'theme';
import { Button as BaseButton } from 'shared/components';

export const Wrapper = styled.header(
  ({ theme: { colors } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0px 55px;
    background-color: ${colors.secondary};
  `,
);

export const Logo = styled.img`
  width: 90px;
  height: 90px;
  margin-right: 50px;
`;

export const Button = styled(BaseButton)`
  margin-right: 45px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  display: flex;
`;
