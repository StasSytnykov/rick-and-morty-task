import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getCharactersFetch } from "../redux/characters/charactersSlice";
import { CharactersList } from "../components/CharactersList/CharactersList";

export const HomePage = () => {
  const [page, setPage] = useState(2);

  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters.characters);

  const onLoadMoreCharacters = () => {
    setPage((prevState) => {
      if (prevState < 42) return prevState + 1;
      return prevState;
    });
    dispatch(getCharactersFetch(page));
  };

  useEffect(() => {
    dispatch(getCharactersFetch(1));
  }, [dispatch]);

  return (
    <div>
      <CharactersList
        characters={characters}
        onLoadMoreCharacters={onLoadMoreCharacters}
      />
    </div>
  );
};
