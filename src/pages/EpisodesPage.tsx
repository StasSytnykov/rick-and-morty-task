import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { Episodes } from "../components/Episodes/Episodes";
import { getAllCharactersFetch } from "../redux/allCharacters/allCharactersSlice";
import {
  allCharactersErrorSelector,
  allCharactersSelector,
  isLoadingAllCharacters,
} from "../redux/selectors";
import { ICharacter } from "../utils/types";

const FIRST_CHARACTER_BY_NAME = "26 Years Old Morty";
const FIRST_CHARACTER_BY_NUMBER_OF_EPISODES = "Rick Sanchez";

export const EpisodesPage = () => {
  const [sortedCharacters, setSortedCharacters] = useState<ICharacter[]>([]);
  const allCharacters = useAppSelector(allCharactersSelector);
  const error = useAppSelector(allCharactersErrorSelector);
  const isLoading = useAppSelector(isLoadingAllCharacters);
  const dispatch = useAppDispatch();

  const handleSortedCharactersByNumberOfSeries = () => {
    setSortedCharacters(
      [...allCharacters].sort((a, b) => b.episode.length - a.episode.length)
    );
    if (sortedCharacters[0].name === FIRST_CHARACTER_BY_NUMBER_OF_EPISODES) {
      const reversedSortedCharacters = [...sortedCharacters].reverse();
      setSortedCharacters(reversedSortedCharacters);
    }
  };

  const handleSortedCharactersByName = () => {
    setSortedCharacters(
      [...allCharacters].sort((a, b) => a.name[0].localeCompare(b.name[0]))
    );
    if (sortedCharacters[0].name === FIRST_CHARACTER_BY_NAME) {
      setSortedCharacters(
        [...allCharacters].sort((a, b) => b.name[0].localeCompare(a.name[0]))
      );
    }
  };

  useEffect(() => {
    setSortedCharacters(
      [...allCharacters].sort((a, b) => b.episode.length - a.episode.length)
    );
  }, [allCharacters]);

  useEffect(() => {
    dispatch(getAllCharactersFetch());
  }, [dispatch]);

  return error ? (
    <div>{error.message}</div>
  ) : (
    <Episodes
      isLoading={isLoading}
      sortedCharacters={sortedCharacters}
      handleSortedCharactersByNumberOfSeries={
        handleSortedCharactersByNumberOfSeries
      }
      handleSortedCharactersByName={handleSortedCharactersByName}
    />
  );
};
