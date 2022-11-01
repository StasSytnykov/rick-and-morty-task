import { NavLink, Outlet } from "react-router-dom";
import { NavLinkThumb, NavLinkTextThumb } from "./Statistics.styled";

export const Statistics = () => (
  <>
    <NavLinkThumb>
      <NavLinkTextThumb>
        <NavLink to={"episodes"}>Episodes</NavLink>
      </NavLinkTextThumb>
      <NavLinkTextThumb>
        <NavLink to={"location"}>Location</NavLink>
      </NavLinkTextThumb>
    </NavLinkThumb>
    <Outlet />
  </>
);
