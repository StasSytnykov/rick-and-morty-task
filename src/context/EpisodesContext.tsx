import { createContext, ReactNode, useEffect, useReducer } from "react";
import { defaultContext } from "./defautlContext";
import { IContext, InitialAllCharactersState } from "../utils/types";
import { fetchReducer } from "./reducers/episodesReducer";
import { fetchAllCharacters } from "../api/fetchData";
import { useHandleSortData } from "../hooks/useHandleSortData";
import { useSortData } from "../hooks/useSortData";

interface Props {
  children: ReactNode;
}

export const EpisodesContext = createContext({
  arrayType: "episode",
  ...defaultContext,
} as IContext);

const initialState: InitialAllCharactersState = {
  characters: [],
  error: null,
  loadingStatus: "idle",
};

export const EpisodesContextProvider = ({ children }: Props) => {
  const [{ characters, error, loadingStatus }, dispatch] = useReducer(
    fetchReducer,
    initialState
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "GET_ALL_CHARACTERS_FETCH" });
      const fetchedAllCharacters = await fetchAllCharacters();
      dispatch({
        type: "GET_ALL_CHARACTERS_SUCCESS",
        characters: [...fetchedAllCharacters],
      });
    };

    fetchData().catch((error) => {
      dispatch({ type: "GET_ALL_CHARACTERS_FAILURE", error: error.message });
    });
  }, []);

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
      }}
    >
      {children}
    </EpisodesContext.Provider>
  );
};
