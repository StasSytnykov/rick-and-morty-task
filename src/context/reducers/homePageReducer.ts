import { FetchedObject, HomePageInitialState } from "../../utils/types";

const MAX_PAGE = 42;

type Action =
  | { type: "GET_PAGE" }
  | { type: "GET_CHARACTERS_FETCH" }
  | { type: "GET_CHARACTERS_SUCCESS"; characters: FetchedObject[] }
  | { type: "GET_CHARACTERS_FAILURE"; error: null | { message: string } };

export const fetchReducer = (
  state: HomePageInitialState,
  action: Action
): HomePageInitialState => {
  switch (action.type) {
    case "GET_PAGE":
      return {
        ...state,
        page: state.page < MAX_PAGE ? state.page + 1 : state.page,
      };
    case "GET_CHARACTERS_FETCH":
      return { ...state, loadingStatus: "loading" };
    case "GET_CHARACTERS_SUCCESS":
      return {
        ...state,
        loadingStatus: "success",
        characters:
          state.characters.length > 0
            ? state.characters.concat(action.characters)
            : action.characters,
      };
    case "GET_CHARACTERS_FAILURE":
      return {
        ...state,
        loadingStatus: "failed",
        error: action.error,
      };
    default:
      return state;
  }
};
