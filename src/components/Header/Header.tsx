import React from 'react';
import {
  HeaderWrapper,
  HeaderImg,
  HeaderLink,
  HeaderSearchWrapper,
  HeaderSearch,
  HeaderLinksWrapper,
} from './styled';
import { Button, LinkStyled } from '../styled';
import logo from '../../images/gidonline.png';
import routes from '../../constants';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <LinkStyled to={routes.gidonline}>
        <HeaderImg src={logo} alt={'logo'} />
      </LinkStyled>
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
          <HeaderLink to={routes.new}>Новинки</HeaderLink>
          <HeaderLink to={routes.premieres}>Премьеры</HeaderLink>
          <HeaderLink to={routes.navigator}>Навигатор</HeaderLink>
          <HeaderLink to={routes.random}>Случайный</HeaderLink>
        </HeaderLinksWrapper>
      </HeaderSearchWrapper>
    </HeaderWrapper>
  );
};

export default Header;
