import { useEffect, useReducer } from "react";
import { fetchReducer } from "../context/reducers/homePageReducer";
import { fetchCharacters } from "../utils/fetchData";
import { InitialState } from "../utils/types";
import { AxiosError } from "axios";

const MAX_PAGE = 42;

const initialState: InitialState = {
  characters: [],
  loadingStatus: "idle",
  error: null,
  page: 1,
};

export const useFetchData = () => {
  const [{ characters, loadingStatus, error, page }, dispatch] = useReducer(
    fetchReducer,
    initialState
  );

  useEffect(() => {
    if (characters.length === 0) {
      dispatch({ type: "GET_CHARACTERS_FETCH" });
      fetchCharacters(page)
        .then((r) => {
          setTimeout(() => {
            dispatch({ type: "GET_CHARACTERS_SUCCESS", characters: [...r] });
          }, 2000);
        })
        .catch((error) =>
          dispatch({ type: "GET_CHARACTERS_FAILURE", error: error.message })
        );
    }
  }, [characters.length, page]);

  const onLoadMoreCharacters = async () => {
    if (page < MAX_PAGE) {
      dispatch({ type: "GET_PAGE" });
    }
    try {
      dispatch({ type: "GET_CHARACTERS_FETCH" });
      const loadedMoreCharacters = await fetchCharacters(page + 1);
      setTimeout(() => {
        dispatch({
          type: "GET_CHARACTERS_SUCCESS",
          characters: [...loadedMoreCharacters],
        });
      }, 2000);
    } catch (error) {
      const err = error as AxiosError;
      dispatch({ type: "GET_CHARACTERS_FAILURE", error: err });
    }
  };

  return { characters, error, dispatch, onLoadMoreCharacters, loadingStatus };
};
