import { createContext, ReactNode, useReducer } from "react";
import { defaultContext } from "./defautlContext";
import { IContext, InitialAllCharactersState } from "../utils/types";
import { fetchReducer } from "./reducers/episodesReducer";
import { useHandleSortData } from "../hooks/useHandleSortData";
import { useSortData } from "../hooks/useSortData";

interface Props {
  children: ReactNode;
}

export type EpisodesContextType = Omit<IContext, "locationsDispatch">;

export const EpisodesContext = createContext({
  arrayType: "episode",
  episodesDispatch: () => {},
  ...defaultContext,
} as EpisodesContextType);

const initialState: InitialAllCharactersState = {
  characters: [],
  error: null,
  loadingStatus: "idle",
};

export const EpisodesContextProvider = ({ children }: Props) => {
  const [{ characters, error, loadingStatus }, episodesDispatch] = useReducer(
    fetchReducer,
    initialState
  );

  const { rulesSortData, onSortedByNumber, onSortedByName } =
    useHandleSortData();

  const { sortedFetchedData } = useSortData(
    rulesSortData,
    "episode",
    characters
  );

  return (
    <EpisodesContext.Provider
      value={{
        loadingStatus,
        sortedFetchedData,
        onSortedByNumber,
        onSortedByName,
        rulesSortData,
        arrayType: "episode",
        error,
        episodesDispatch,
      }}
    >
      {children}
    </EpisodesContext.Provider>
  );
};
