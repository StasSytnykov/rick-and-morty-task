import { Table } from "../components/Table/Table";
import React, { createContext, useEffect, useReducer } from "react";
import { defaultContext } from "../context/defautlContext";
import { IContext, InitialLocationsState } from "../utils/types";
import { fetchReducer } from "../context/reducers/locationsReducer";
import { fetchLocation } from "../api/fetchData";
import { useSortData } from "../hooks/useSortData";
import { useHandleSortData } from "../hooks/useHandleSortData";

export const LocationsContext = createContext({
  arrayType: "residents",
  ...defaultContext,
} as IContext);

const initialState: InitialLocationsState = {
  locations: [],
  error: null,
  loadingStatus: "idle",
};

export const LocationPage = () => {
  const [{ locations, error, loadingStatus }, dispatch] = useReducer(
    fetchReducer,
    initialState
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "GET_LOCATIONS_FETCH" });
      const fetchedLocations = await fetchLocation();
      dispatch({
        type: "GET_LOCATIONS_SUCCESS",
        locations: [...fetchedLocations],
      });
    };

    fetchData().catch((error) => {
      dispatch({ type: "GET_LOCATIONS_FAILURE", error: error.message });
    });
  }, []);

  const { rulesSortData, onSortedByNumber, onSortedByName } =
    useHandleSortData();

  const { sortedFetchedData } = useSortData(
    rulesSortData,
    "residents",
    locations
  );

  return error ? (
    <div>{error.message}</div>
  ) : (
    <LocationsContext.Provider
      value={{
        loadingStatus,
        sortedFetchedData,
        onSortedByNumber,
        onSortedByName,
        rulesSortData,
        arrayType: "residents",
      }}
    >
      <Table contextType={"location"} />;
    </LocationsContext.Provider>
  );
};
