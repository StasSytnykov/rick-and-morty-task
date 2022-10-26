import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getCharactersFetch } from "../redux/characters/charactersSlice";
import { CharactersList } from "../components/CharactersList/CharactersList";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters.characters);

  useEffect(() => {
    dispatch(getCharactersFetch());
  }, [dispatch]);

  return (
    <div>
      <CharactersList characters={characters} />
    </div>
  );
};
