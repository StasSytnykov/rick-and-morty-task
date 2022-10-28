import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import App from "../App";
import { CharacterPage } from "../pages/CharacterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "characterId/:id", element: <CharacterPage /> },
    ],
  },
]);
