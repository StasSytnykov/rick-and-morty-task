import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
