import { ReactElement } from "react";
import { Table } from "../../components/Table/Table";
import { fetchLocation } from "../../utils/fetchData";
import StatisticsLayout from "../../components/StatisticsLayout/StatisticsLayout";
import { NextPageWithLayout } from "../_app";
import { GetStaticProps } from "next";
import { useHandleSortData } from "../../hooks/useHandleSortData";
import { useSortData } from "../../hooks/useSortData";
import { FetchedObject } from "../../utils/types";

export interface Props {
  locations: FetchedObject[];
}

const LocationPage: NextPageWithLayout<Props> = ({ locations }) => {
  const { rulesSortData, onSortedByNumber, onSortedByName } =
    useHandleSortData();
  const { sortedFetchedData } = useSortData(
    rulesSortData,
    "residents",
    locations
  );

  return (
    <Table
      arrayType={"residents"}
      onSortedByName={onSortedByName}
      onSortedByNumber={onSortedByNumber}
      rulesSortData={rulesSortData}
      sortedFetchedData={sortedFetchedData}
    />
  );
};

LocationPage.getLayout = function getLayout(page: ReactElement) {
  return <StatisticsLayout>{page}</StatisticsLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetchLocation();

  return {
    props: {
      locations: res,
    },
  };
};

export default LocationPage;
