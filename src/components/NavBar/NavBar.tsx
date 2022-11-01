import { NavLink } from "react-router-dom";
import {
  NavBarStyled,
  WebSiteTitle,
  NavLinkThumb,
  NavLinkTextThumb,
} from "./NavBar.styled";

export const NavBar = () => (
  <NavBarStyled>
    <WebSiteTitle>Welcome to Rick and Morty universe!</WebSiteTitle>
    <NavLinkThumb>
      <NavLinkTextThumb>
        <NavLink
          to={"characters"}
          style={({ isActive }) => ({
            color: isActive ? "rgb(218, 75, 12)" : "rgb(255, 255, 255)",
          })}
        >
          Home page
        </NavLink>
      </NavLinkTextThumb>
      <NavLinkTextThumb>
        <NavLink
          to={"statistics"}
          style={({ isActive }) => ({
            color: isActive ? "rgb(218, 75, 12)" : "rgb(255, 255, 255)",
          })}
        >
          Statistics page
        </NavLink>
      </NavLinkTextThumb>
    </NavLinkThumb>
  </NavBarStyled>
);
