import React from 'react';

import Logo from 'assets/images/logo.png';
import { Button } from 'shared/components';
import * as Styles from './Header.styles';

export const Header: React.FC = () => {
  return (
    <Styles.Wrapper className="header">
      <Styles.Logo src={Logo} alt="logo" className="logo" />
      <Styles.ButtonWrapper>
        <Styles.ContentWrapper>
          <Styles.Button className="header__button" color={Button.color.SECONDARY}>
            O nas
          </Styles.Button>
          <Styles.Button className="header__button" color={Button.color.SECONDARY}>
            Cennik
          </Styles.Button>
          <Styles.Button className="header__button" color={Button.color.SECONDARY}>
            Kontakt
          </Styles.Button>
        </Styles.ContentWrapper>
        <Styles.ContentWrapper>
          <Styles.Button className="header__button" color={Button.color.SECONDARY}>
            Horoskop
          </Styles.Button>
          <Styles.Button className="header__button" color={Button.color.SECONDARY}>
            Przepowiednia
          </Styles.Button>
          <Styles.Button className="header__button" color={Button.color.SECONDARY}>
            Rejestracja
          </Styles.Button>
        </Styles.ContentWrapper>
      </Styles.ButtonWrapper>
    </Styles.Wrapper>
  );
};
