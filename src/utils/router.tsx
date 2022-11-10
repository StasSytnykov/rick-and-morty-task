import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../pages/HomePage";
import { CharacterPage } from "../pages/CharacterPage";
import { StatisticsPage } from "../pages/StatisticsPage";
import { EpisodesPage } from "../pages/EpisodesPage";
import { LocationPage } from "../pages/LocationPage";
import { CharactersContextProvider } from "../context/CharactersContext";
import { LocationsContextProvider } from "../context/LocationContext";
import { EpisodesContextProvider } from "../context/EpisodesContext";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <CharactersContextProvider>
          <EpisodesContextProvider>
            <LocationsContextProvider>
              <App />
            </LocationsContextProvider>
          </EpisodesContextProvider>
        </CharactersContextProvider>
      ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "character/id=:id",
          element: <CharacterPage />,
        },
        {
          path: "statistics",
          element: <StatisticsPage />,
          children: [
            { path: "episodes", element: <EpisodesPage /> },
            {
              path: "location",
              element: <LocationPage />,
            },
          ],
        },
      ],
    },
  ],
  { basename: "/rick-and-morty-task" }
);
