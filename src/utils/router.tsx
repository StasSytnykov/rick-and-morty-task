import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages/HomePage";
import { CharacterPage } from "../pages/CharacterPage";
import { StatisticsPage } from "../pages/StatisticsPage";
import { EpisodesPage } from "../pages/EpisodesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "character/id=:id", element: <CharacterPage /> },
      {
        path: "statistics",
        element: <StatisticsPage />,
        children: [{ path: "episodes", element: <EpisodesPage /> }],
      },
    ],
  },
]);
