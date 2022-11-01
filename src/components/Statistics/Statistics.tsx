import { NavLink, Outlet } from "react-router-dom";
import { NavLinkThumb, NavLinkTextThumb } from "./Statistics.styled";

export const Statistics = () => (
  <>
    <NavLinkThumb>
      <NavLinkTextThumb>
        <NavLink
          to={"episodes"}
          style={({ isActive }) => ({
            color: isActive ? "rgb(218, 75, 12)" : "black",
          })}
        >
          Episodes
        </NavLink>
      </NavLinkTextThumb>
      <NavLinkTextThumb>
        <NavLink
          to={"location"}
          style={({ isActive }) => ({
            color: isActive ? "rgb(218, 75, 12)" : "black",
          })}
        >
          Location
        </NavLink>
      </NavLinkTextThumb>
    </NavLinkThumb>
    <Outlet />
  </>
);
