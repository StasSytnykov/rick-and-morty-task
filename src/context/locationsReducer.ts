import { FetchedObject, InitialLocationsState } from "../utils/types";

type Action =
  | { type: "GET_LOCATIONS_FETCH" }
  | { type: "GET_LOCATIONS_SUCCESS"; locations: FetchedObject[] }
  | { type: "GET_LOCATIONS_FAILURE"; error: null | { message: string } };

export const fetchReducer = (
  state: InitialLocationsState,
  action: Action
): InitialLocationsState => {
  switch (action.type) {
    case "GET_LOCATIONS_FETCH":
      return { ...state, loadingStatus: "loading" };
    case "GET_LOCATIONS_SUCCESS":
      return {
        loadingStatus: "success",
        locations: action.locations,
        error: null,
      };
    case "GET_LOCATIONS_FAILURE":
      return {
        ...state,
        loadingStatus: "failed",
        error: action.error,
      };
    default:
      return state;
  }
};
