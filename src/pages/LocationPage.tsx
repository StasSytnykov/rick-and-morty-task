import { useContext, useEffect } from "react";
import { Table } from "../components/Table/Table";
import { LocationsContext } from "../context/LocationContext";
import { fetchLocation } from "../api/fetchData";

export const LocationPage = () => {
  const {
    error,
    locationsDispatch,
    sortedFetchedData,
    onSortedByNumber,
    onSortedByName,
    rulesSortData,
    arrayType,
    loadingStatus,
  } = useContext(LocationsContext);

  useEffect(() => {
    if (sortedFetchedData.length === 0) {
      const fetchData = async () => {
        locationsDispatch({ type: "GET_LOCATIONS_FETCH" });
        const fetchedLocations = await fetchLocation();
        locationsDispatch({
          type: "GET_LOCATIONS_SUCCESS",
          locations: [...fetchedLocations],
        });
      };
      fetchData().catch((error) => {
        locationsDispatch({
          type: "GET_LOCATIONS_FAILURE",
          error: error.message,
        });
      });
    }
  }, [locationsDispatch, sortedFetchedData.length]);

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
