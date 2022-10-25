import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/rick-and-morty-task",
    element: <HomePage />,
    // loader: rootLoader,
    // action: rootAction,
  },
]);
