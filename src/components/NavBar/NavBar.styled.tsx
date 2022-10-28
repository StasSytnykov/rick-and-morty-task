import styled from "styled-components";

const NavBarStyled = styled.div`
  padding: 100px;
  background-color: rgb(32, 35, 41);
`;

const WebSiteTitle = styled.h1`
  text-align: center;
  font-size: 50px;
  color: rgb(255, 255, 255);

  margin-bottom: 50px;
`;

const NavLinkThumb = styled.div`
  display: flex;
  justify-content: center;
`;

const NavLinkTextThumb = styled.div`
  font-size: 30px;

  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export { NavBarStyled, WebSiteTitle, NavLinkThumb, NavLinkTextThumb };
