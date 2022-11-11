import { createContext, ReactNode, useReducer } from "react";
import { defaultContext } from "./defautlContext";
import { IContext, InitialLocationsState } from "../utils/types";
import { fetchReducer } from "./reducers/locationsReducer";
import { useHandleSortData } from "../hooks/useHandleSortData";
import { useSortData } from "../hooks/useSortData";

interface Props {
  children: ReactNode;
}

export type LocationContextType = Omit<IContext, "episodesDispatch">;

export const LocationsContext = createContext({
  arrayType: "residents",
  locationsDispatch: () => {},
  ...defaultContext,
} as LocationContextType);

const initialState: InitialLocationsState = {
  locations: [],
  error: null,
  loadingStatus: "idle",
};

export const LocationsContextProvider = ({ children }: Props) => {
  const [{ locations, error, loadingStatus }, locationsDispatch] = useReducer(
    fetchReducer,
    initialState
  );

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
        locationsDispatch,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};
