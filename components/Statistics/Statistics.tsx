import Link from "next/link";
import { NavLinkThumb, NavLinkTextThumb } from "./Statistics.styled";

export const Statistics = () => (
  <>
    <NavLinkThumb>
      <NavLinkTextThumb>
        <Link
          href={"/statistics/episodes"}
          // style={({ isActive }) => ({
          //   color: isActive ? "rgb(218, 75, 12)" : "black",
          // })}
        >
          Episodes
        </Link>
      </NavLinkTextThumb>
      <NavLinkTextThumb>
        <Link
          href={"/statistics/location"}
          // style={({ isActive }) => ({
          //   color: isActive ? "rgb(218, 75, 12)" : "black",
          // })}
        >
          Location
        </Link>
      </NavLinkTextThumb>
    </NavLinkThumb>
  </>
);
