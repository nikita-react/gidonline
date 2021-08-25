import React from 'react';
import {
  HeaderWrapperStyled,
  HeaderImgStyled,
  HeaderLinkStyled,
  HeaderSearchWrapperStyled,
  HeaderSearchStyled,
  HeaderLinksWrapperStyled,
} from './styled';
import { ButtonStyled, LinkStyled } from '../styled';
import logo from '../../images/gidonline.png';
import routes from '../../urls';

export const Header: React.FC = () => {
  return (
    <HeaderWrapperStyled>
      <LinkStyled to={routes.basic.gidonline}>
        <HeaderImgStyled src={logo} alt={'logo'} />
      </LinkStyled>
      <HeaderSearchWrapperStyled>
        <HeaderSearchStyled placeholder={'Название фильма...'} />
        <ButtonStyled
          width={'105px'}
          height={'31px'}
          backgroundColor={'#333'}
          title={'Поиск'}
          fontSize={'13px'}
        >
          Поиск
        </ButtonStyled>
        <HeaderLinksWrapperStyled>
          <HeaderLinkStyled to={routes.basic.new}>Новинки</HeaderLinkStyled>
          <HeaderLinkStyled to={routes.basic.premieres}>
            Премьеры
          </HeaderLinkStyled>
          <HeaderLinkStyled to={routes.basic.navigator}>
            Навигатор
          </HeaderLinkStyled>
          <HeaderLinkStyled to={routes.basic.random}>
            Случайный
          </HeaderLinkStyled>
        </HeaderLinksWrapperStyled>
      </HeaderSearchWrapperStyled>
    </HeaderWrapperStyled>
  );
};
