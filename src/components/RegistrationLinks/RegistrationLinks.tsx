import React from "react";
import {
  RegistrationWrapperStyled,
  RegistrationLinkStyled,
  RegistrationTitleStyled,
} from "./styled";
import { LinkStyled } from "../styled";

export const RegistrationLinks: React.FC<{}> = () => {
  return (
    <RegistrationWrapperStyled>
      <LinkStyled to="">
        <RegistrationLinkStyled width={`147px`} height={`38px`}>
          <RegistrationTitleStyled>РЕГИСТРАЦИЯ</RegistrationTitleStyled>
        </RegistrationLinkStyled>
      </LinkStyled>
      <LinkStyled to="">
        <RegistrationLinkStyled width={`86px`}>
          <RegistrationTitleStyled>ВХОД</RegistrationTitleStyled>
        </RegistrationLinkStyled>
      </LinkStyled>
      <LinkStyled to="">
        <RegistrationLinkStyled width={`41px`}>
          <RegistrationTitleStyled>?</RegistrationTitleStyled>
        </RegistrationLinkStyled>
      </LinkStyled>
    </RegistrationWrapperStyled>
  );
};
