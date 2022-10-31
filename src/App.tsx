import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { useLocation, Navigate } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/" && <Navigate to={"characters"} />}
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
