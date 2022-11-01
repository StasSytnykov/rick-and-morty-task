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
    if (sortedCharacters[0].name === "Rick Sanchez") {
      const reversedSortedCharacters = [...sortedCharacters].reverse();
      setSortedCharacters(reversedSortedCharacters);
    }
  };

  const handleSortedCharactersByName = () => {
    setSortedCharacters(
      [...allCharacters].sort((a, b) => a.name[0].localeCompare(b.name[0]))
    );
    if (sortedCharacters[0].name === "26 Years Old Morty") {
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
