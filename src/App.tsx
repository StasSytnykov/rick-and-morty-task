import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <div>
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname;
        }}
      />
      <Outlet />
    </div>
  );
}

export default App;
