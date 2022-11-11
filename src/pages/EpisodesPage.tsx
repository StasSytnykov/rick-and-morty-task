import { Table } from "../components/Table/Table";
import { useContext, useEffect } from "react";
import { EpisodesContext } from "../context/EpisodesContext";
import { fetchAllCharacters } from "../api/fetchData";

export const EpisodesPage = () => {
  const {
    error,
    episodesDispatch,
    sortedFetchedData,
    onSortedByNumber,
    onSortedByName,
    rulesSortData,
    arrayType,
    loadingStatus,
  } = useContext(EpisodesContext);

  useEffect(() => {
    if (sortedFetchedData.length === 0) {
      const fetchData = async () => {
        episodesDispatch({ type: "GET_ALL_CHARACTERS_FETCH" });
        const fetchedAllCharacters = await fetchAllCharacters();
        episodesDispatch({
          type: "GET_ALL_CHARACTERS_SUCCESS",
          characters: [...fetchedAllCharacters],
        });
      };

      fetchData().catch((error) => {
        episodesDispatch({
          type: "GET_ALL_CHARACTERS_FAILURE",
          error: error.message,
        });
      });
    }
  }, [episodesDispatch, sortedFetchedData.length]);

  return error ? (
    <div>{error.message}</div>
  ) : (
    <Table
      arrayType={arrayType}
      loadingStatus={loadingStatus}
      onSortedByName={onSortedByName}
      onSortedByNumber={onSortedByNumber}
      rulesSortData={rulesSortData}
      sortedFetchedData={sortedFetchedData}
    />
  );
};
