import React from 'react';
import notFound from '../../images/404.png';
import {
  NotFoundWrapperStyled,
  BlockStyled,
  BlockTextStyled,
  BlockHomeStyled,
  NotFoundImgStyled,
} from './styled';
import { LinkStyled } from '../styled';
import routes from '../../urls';
import Header from '../Header';
import { ContainerWrapperStyled } from '../Container/styled';

export const NotFound: React.FC<{}> = () => {
  return (
    <ContainerWrapperStyled>
      <Header />
      <NotFoundWrapperStyled>
        <BlockStyled>
          <BlockTextStyled>
            Страница не существует, перейдите на{' '}
            <LinkStyled to={routes.basic.gidonline}>
              <BlockHomeStyled>Главную</BlockHomeStyled>
            </LinkStyled>
          </BlockTextStyled>
        </BlockStyled>
        <NotFoundImgStyled src={notFound} />
      </NotFoundWrapperStyled>
    </ContainerWrapperStyled>
  );
};
