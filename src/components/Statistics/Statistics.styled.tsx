import styled from "styled-components";

const NavLinkThumb = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const NavLinkTextThumb = styled.div`
  font-size: 25px;
  text-decoration: underline;
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export { NavLinkThumb, NavLinkTextThumb };
