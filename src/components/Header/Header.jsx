import React from 'react';
import {
  HeaderWrapper,
  HeaderImg,
  HeaderLink,
  HeaderSearchWrapper,
  HeaderSearch,
  HeaderLinksWrapper,
  HeaderLinkLine,
} from './styled';
import { Button } from '../styled';
import logo from '../../images/gidonline.png';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderLink>
        <HeaderImg src={logo} alt={'logo'} />
      </HeaderLink>
      <HeaderSearchWrapper>
        <HeaderSearch placeholder={'Название фильма...'} />
        <Button
          width={'105px'}
          height={'31px'}
          backgroundColor={'#333'}
          title={'Поиск'}
          fontSize={'13px'}
        >
          Поиск
        </Button>
        <HeaderLinksWrapper>
          <HeaderLink>Новинки</HeaderLink>
          <HeaderLinkLine>|</HeaderLinkLine>
          <HeaderLink>Премьеры</HeaderLink>
          <HeaderLinkLine>|</HeaderLinkLine>
          <HeaderLink>Навигатор</HeaderLink>
          <HeaderLinkLine>|</HeaderLinkLine>
          <HeaderLink>Случайный</HeaderLink>
        </HeaderLinksWrapper>
      </HeaderSearchWrapper>
    </HeaderWrapper>
  );
}
