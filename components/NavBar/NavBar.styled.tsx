import styled from "styled-components";

const NavBarStyled = styled.nav`
  padding: 50px 0;
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
  justify-content: space-around;
`;

const NavLinkTextThumb = styled.div`
  font-size: 30px;
`;

export { NavBarStyled, WebSiteTitle, NavLinkThumb, NavLinkTextThumb };
