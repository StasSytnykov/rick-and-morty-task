import { createContext, ReactNode, useEffect, useReducer } from "react";
import { defaultContext } from "./defautlContext";
import { IContext, InitialLocationsState } from "../utils/types";
import { fetchReducer } from "./reducers/locationsReducer";
import { fetchLocation } from "../api/fetchData";
import { useHandleSortData } from "../hooks/useHandleSortData";
import { useSortData } from "../hooks/useSortData";

interface Props {
  children: ReactNode;
}

export const LocationsContext = createContext({
  arrayType: "residents",
  ...defaultContext,
} as IContext);

const initialState: InitialLocationsState = {
  locations: [],
  error: null,
  loadingStatus: "idle",
};

export const LocationsContextProvider = ({ children }: Props) => {
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
  return (
    <LocationsContext.Provider
      value={{
        loadingStatus,
        sortedFetchedData,
        onSortedByNumber,
        onSortedByName,
        rulesSortData,
        arrayType: "residents",
        error,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};
