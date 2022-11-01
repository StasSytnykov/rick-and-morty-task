import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages/HomePage";
import { CharacterPage } from "../pages/CharacterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "characters", element: <HomePage /> },
      { path: "characters/characterId/:id", element: <CharacterPage /> },
    ],
  },
]);
