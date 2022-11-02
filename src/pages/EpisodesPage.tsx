import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { Episodes } from "../components/Episodes/Episodes";
import { getAllCharactersFetch } from "../redux/allCharacters/allCharactersSlice";
import {
  allCharactersErrorSelector,
  allCharactersSelector,
  isLoadingAllCharacters,
} from "../redux/selectors";
import { ICharacter, SortType } from "../utils/types";

export const EpisodesPage = () => {
  const [sortedCharacters, setSortedCharacters] = useState<ICharacter[]>([]);
  const [sortByNumber, setSortByNumber] = useState<SortType>("DESC");
  const [sortByName, setSortByName] = useState<SortType>("");

  const allCharacters = useAppSelector(allCharactersSelector);
  const error = useAppSelector(allCharactersErrorSelector);
  const isLoading = useAppSelector(isLoadingAllCharacters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (sortByNumber === "DESC") {
      setSortedCharacters(
        [...allCharacters].sort((a, b) => b.episode.length - a.episode.length)
      );
    }

    if (sortByNumber === "ASC") {
      setSortedCharacters(
        [...allCharacters].sort((a, b) => a.episode.length - b.episode.length)
      );
    }

    if (sortByName === "DESC") {
      setSortedCharacters(
        [...allCharacters].sort((a, b) => a.name[0].localeCompare(b.name[0]))
      );
    }

    if (sortByName === "ASC") {
      setSortedCharacters(
        [...allCharacters].sort((a, b) => b.name[0].localeCompare(a.name[0]))
      );
    }
  }, [allCharacters, sortByName, sortByNumber]);

  useEffect(() => {
    dispatch(getAllCharactersFetch());
  }, [dispatch]);

  const onSortedByNumber = () => {
    setSortByName("");
    sortByNumber === "DESC" ? setSortByNumber("ASC") : setSortByNumber("DESC");
  };

  const onSortedByName = () => {
    setSortByNumber("");
    sortByName && sortByName === "DESC"
      ? setSortByName("ASC")
      : setSortByName("DESC");
  };

  return error ? (
    <div>{error.message}</div>
  ) : (
    <Episodes
      isLoading={isLoading}
      sortedCharacters={sortedCharacters}
      onSortedByNumber={onSortedByNumber}
      onSortedByName={onSortedByName}
      sortByNumber={sortByNumber}
      sortByName={sortByName}
    />
  );
};
