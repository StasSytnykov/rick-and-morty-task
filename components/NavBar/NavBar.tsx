import Link from "next/link";
import {
  NavBarStyled,
  WebSiteTitle,
  NavLinkThumb,
  NavLinkTextThumb,
} from "./NavBar.styled";
import { useRouter } from "next/router";

export const NavBar = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <NavBarStyled>
      <WebSiteTitle>Welcome to Rick and Morty universe!</WebSiteTitle>
      <NavLinkThumb>
        <NavLinkTextThumb>
          <Link
            href={"/"}
            style={
              path === "/"
                ? { color: "rgb(218, 75, 12)" }
                : { color: "rgb(255, 255, 255)" }
            }
          >
            Home page
          </Link>
        </NavLinkTextThumb>
        <NavLinkTextThumb>
          <Link
            href={"/statistics"}
            style={
              path === "/statistics"
                ? { color: "rgb(218, 75, 12)" }
                : { color: "rgb(255, 255, 255)" }
            }
          >
            Statistics page
          </Link>
        </NavLinkTextThumb>
      </NavLinkThumb>
    </NavBarStyled>
  );
};
