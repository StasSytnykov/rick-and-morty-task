import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  charactersSelector,
  pageSelector,
  errorSelector,
} from "../redux/characters/charactersSelector";
import {
  getCharactersFetch,
  getPage,
} from "../redux/characters/charactersSlice";
import { CharactersList } from "../components/CharactersList/CharactersList";

export const HomePage = () => {
  const characters = useAppSelector(charactersSelector);
  const page = useAppSelector(pageSelector);
  const error = useAppSelector(errorSelector);
  const dispatch = useAppDispatch();

  const onLoadMoreCharacters = () => {
    dispatch(getPage());
    dispatch(getCharactersFetch(page));
  };

  useEffect(() => {
    if (characters.length === 0) {
      dispatch(getCharactersFetch(1));
    }
  }, [dispatch, characters]);

  return error ? (
    <div>{error.message}</div>
  ) : (
    <div>
      <CharactersList
        characters={characters}
        onLoadMoreCharacters={onLoadMoreCharacters}
      />
    </div>
  );
};
