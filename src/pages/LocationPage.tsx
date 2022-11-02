import { Location } from "../components/Location/Location";
import { useEffect, useState } from "react";
import { ILocation } from "../utils/types";
import { useAppSelector } from "../hooks/reduxHooks";
import {
  locationSelector,
  isLoadingLocation,
  locationErrorSelector,
} from "../redux/selectors";
import { getLocationFetch } from "../redux/location/locationSlice";
import { useSortData } from "../hooks/useSortData";

export const LocationPage = () => {
  const [sortedLocation, setSortedLocation] = useState<ILocation[]>([]);

  const { rulesSortData, onSortedByNumber, onSortedByName } =
    useSortData(getLocationFetch);

  const locations = useAppSelector(locationSelector);
  const isLoading = useAppSelector(isLoadingLocation);
  const error = useAppSelector(locationErrorSelector);

  useEffect(() => {
    setSortedLocation(
      [...locations].sort((a, b) => {
        switch (rulesSortData) {
          case "ASC_NUM":
            return a.residents.length - b.residents.length;
          case "DESC_NAME":
            return a.name[0].localeCompare(b.name[0]);
          case "ASC_NAME":
            return b.name[0].localeCompare(a.name[0]);
          default:
            return b.residents.length - a.residents.length;
        }
      })
    );
  }, [locations, rulesSortData]);

  return error ? (
    <div>{error.message}</div>
  ) : (
    <Location
      isLoading={isLoading}
      sortedLocation={sortedLocation}
      onSortedByNumber={onSortedByNumber}
      onSortedByName={onSortedByName}
      rulesSortData={rulesSortData}
    />
  );
};
