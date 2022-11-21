import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { Table } from "../../components/Table/Table";
import { fetchAllCharacters } from "../../utils/fetchData";
import StatisticsLayout from "../../components/StatisticsLayout/StatisticsLayout";
import { FetchedObject } from "../../utils/types";
import { GetStaticProps } from "next";
import { useHandleSortData } from "../../hooks/useHandleSortData";
import { useSortData } from "../../hooks/useSortData";

export interface Props {
  characters: FetchedObject[];
}

const EpisodesPage: NextPageWithLayout<Props> = ({ characters }) => {
  const { rulesSortData, onSortedByNumber, onSortedByName } =
    useHandleSortData();
  const { sortedFetchedData } = useSortData(
    rulesSortData,
    "episode",
    characters
  );

  return (
    <Table
      arrayType={"episode"}
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

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetchAllCharacters();

  return {
    props: {
      characters: res,
    },
  };
};

export default EpisodesPage;
