import { useAppSelector } from "../hooks/reduxHooks";
import {
  locationSelector,
  isLoadingLocation,
  locationErrorSelector,
} from "../redux/selectors";
import { getLocationFetch } from "../redux/location/locationSlice";
import { useHandleSortData } from "../hooks/useHandleSortData";
import { Table } from "../components/Table/Table";
import { useSortData } from "../hooks/useSortData";

export const LocationPage = () => {
  const locations = useAppSelector(locationSelector);
  const isLoading = useAppSelector(isLoadingLocation);
  const error = useAppSelector(locationErrorSelector);

  const { rulesSortData, onSortedByNumber, onSortedByName } =
    useHandleSortData(getLocationFetch);

  const { sortedFetchedData } = useSortData(
    rulesSortData,
    "residents",
    locations
  );

  return error ? (
    <div>{error.message}</div>
  ) : (
    <Table
      isLoading={isLoading}
      sortedData={sortedFetchedData}
      onSortedByNumber={onSortedByNumber}
      onSortedByName={onSortedByName}
      rulesSortData={rulesSortData}
      arrayType={"residents"}
    />
  );
};
