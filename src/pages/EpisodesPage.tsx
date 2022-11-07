import { useHandleSortData } from "../hooks/useHandleSortData";
import { Table } from "../components/Table/Table";
import { useSortData } from "../hooks/useSortData";
import React, { useEffect, useState, createContext, useReducer } from "react";
import { ArrayType, FetchedObject, SortType, Status } from "../utils/types";
import { fetchAllCharacters } from "../api/fetchData";

interface IContext {
  sortedFetchedData: FetchedObject[];
  loadingStatus: Status;
  onSortedByNumber: () => void;
  onSortedByName: () => void;
  rulesSortData: SortType;
  arrayType: ArrayType;
}

export const EpisodesContext = createContext<IContext>({
  arrayType: "episode",
  loadingStatus: "idle",
  onSortedByName(): void {},
  onSortedByNumber(): void {},
  rulesSortData: "DESC_NUM",
  sortedFetchedData: [],
});

interface InitialAllCharactersState {
  characters: FetchedObject[];
  loadingStatus: Status;
  error: null | { message: string };
}

type Action =
  | { type: "getAllCharactersFetch" }
  | { type: "getAllCharactersSuccess"; results: FetchedObject[] }
  | { type: "getAllCharactersFailure"; error: null | { message: string } };

const initialState: InitialAllCharactersState = {
  characters: [],
  error: null,
  loadingStatus: "idle",
};

const reducer = (state: InitialAllCharactersState, action: Action) => {
  switch (action.type) {
    case "getAllCharactersFetch":
      return { ...state, loadingStatus: "loading" };
    case "getAllCharactersSuccess":
      return {
        loadingStatus: "success",
        characters: action.results,
        error: null,
      };
    case "getAllCharactersFailure":
      return {
        ...state,
        loadingStatus: "failed",
        error: action.error,
      };
    default:
      return state;
  }
};

export const EpisodesPage = () => {
  const [state, dispatch] = useReducer<React.Reducer<any, any>>(
    reducer,
    initialState
  );
  console.log(state);
  console.log(dispatch);

  const [allCharacters, setAllCharacters] = useState<FetchedObject[]>([]);
  const [error, setError] = useState<null | { message: string }>(null);
  const [loadingStatus, setLoadingStatus] = useState<Status>("idle");

  useEffect(() => {
    const fetchData = async () => {
      setLoadingStatus("loading");
      const fetchedAllCharacters = await fetchAllCharacters();
      setAllCharacters(fetchedAllCharacters);
      setLoadingStatus("success");
    };

    fetchData().catch(setError);
  }, []);

  const { rulesSortData, onSortedByNumber, onSortedByName } =
    useHandleSortData();

  const { sortedFetchedData } = useSortData(
    rulesSortData,
    "episode",
    allCharacters
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
      <Table />
    </EpisodesContext.Provider>
  );
};
