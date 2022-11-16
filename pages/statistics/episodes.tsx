import type { ReactElement } from "react";
import { useContext, useEffect } from "react";
import type { NextPageWithLayout } from "../_app";
import { EpisodesContext } from "../../context/EpisodesContext";
import { Table } from "../../components/Table/Table";
import { fetchAllCharacters } from "../../utils/fetchData";
import StatisticsLayout from "../../components/StatisticsLayout/StatisticsLayout";

const EpisodesPage: NextPageWithLayout = () => {
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

EpisodesPage.getLayout = function getLayout(page: ReactElement) {
  return <StatisticsLayout>{page}</StatisticsLayout>;
};

export default EpisodesPage;
