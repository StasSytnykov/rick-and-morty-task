import React, { useEffect, useReducer } from "react";
import { AxiosError } from "axios";
import { CharactersList } from "../components/CharactersList/CharactersList";
import { HomePageInitialState } from "../utils/types";
import { fetchCharacters } from "../api/fetchData";
import { fetchReducer } from "../context/homePageReducer";
import { TemplateCharactersContextProvider } from "../context/TemplateCharactersContext";

const initialState: HomePageInitialState = {
  characters: [],
  loadingStatus: "idle",
  error: null,
  page: 1,
};

const MAX_PAGE = 42;

export const HomePage = () => {
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
      console.log(loadingStatus);
      dispatch({ type: "GET_CHARACTERS_FAILURE", error: err });
    }
  };

  return error ? (
    <div>{error.message}</div>
  ) : (
    <div>
      <TemplateCharactersContextProvider
        characters={characters}
        onLoadMoreCharacters={onLoadMoreCharacters}
      >
        <CharactersList />
      </TemplateCharactersContextProvider>
    </div>
  );
};
