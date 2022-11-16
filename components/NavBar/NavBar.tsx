import Link from "next/link";
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
        <Link
          href={"/"}
          // style={({ isActive }) => ({
          //   color: isActive ? "rgb(218, 75, 12)" : "rgb(255, 255, 255)",
          // })}
        >
          Home page
        </Link>
      </NavLinkTextThumb>
      <NavLinkTextThumb>
        <Link
          href={"/statistics"}
          // style={({ isActive }) => ({
          //   color: isActive ? "rgb(218, 75, 12)" : "rgb(255, 255, 255)",
          // })}
        >
          Statistics page
        </Link>
      </NavLinkTextThumb>
    </NavLinkThumb>
  </NavBarStyled>
);
