import { useHandleSortData } from "../hooks/useHandleSortData";
import { Table } from "../components/Table/Table";
import { useSortData } from "../hooks/useSortData";
import React, { useEffect, createContext, useReducer } from "react";
import { InitialAllCharactersState, IContext } from "../utils/types";
import { fetchAllCharacters } from "../api/fetchData";
import { fetchReducer } from "../context/reducers/episodesReducer";
import { defaultContext } from "../context/defautlContext";

export const EpisodesContext = createContext({
  arrayType: "episode",
  ...defaultContext,
} as IContext);

const initialState: InitialAllCharactersState = {
  characters: [],
  error: null,
  loadingStatus: "idle",
};

export const EpisodesPage = () => {
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

  return error ? (
    <div>{error.message}</div>
  ) : (
    <EpisodesContext.Provider
      value={{
        loadingStatus,
        sortedFetchedData,
        onSortedByNumber,
        onSortedByName,
        rulesSortData,
        arrayType: "episode",
      }}
    >
      <Table contextType={"episode"} />
    </EpisodesContext.Provider>
  );
};
