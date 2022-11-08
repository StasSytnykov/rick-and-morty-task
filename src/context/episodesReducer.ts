import { FetchedObject, InitialAllCharactersState } from "../utils/types";

type Action =
  | { type: "GET_ALL_CHARACTERS_FETCH" }
  | { type: "GET_ALL_CHARACTERS_SUCCESS"; characters: FetchedObject[] }
  | { type: "GET_ALL_CHARACTERS_FAILURE"; error: null | { message: string } };

export const fetchReducer = (
  state: InitialAllCharactersState,
  action: Action
): InitialAllCharactersState => {
  switch (action.type) {
    case "GET_ALL_CHARACTERS_FETCH":
      return { ...state, loadingStatus: "loading" };
    case "GET_ALL_CHARACTERS_SUCCESS":
      return {
        loadingStatus: "success",
        characters: action.characters,
        error: null,
      };
    case "GET_ALL_CHARACTERS_FAILURE":
      return {
        ...state,
        loadingStatus: "failed",
        error: action.error,
      };
    default:
      return state;
  }
};
