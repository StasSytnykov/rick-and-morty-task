import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import App from "../App";
import { CharacterPage } from "../pages/CharacterPage";

export const router = createBrowserRouter([
  {
    path: "/rick-and-morty-task",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "character/:id", element: <CharacterPage /> },
    ],
  },
]);
