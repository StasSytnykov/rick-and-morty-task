import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import { Episodes } from "../components/Episodes/Episodes";
import { getAllCharactersFetch } from "../redux/allCharacters/allCharactersSlice";
import {
  allCharactersErrorSelector,
  allCharactersSelector,
  isLoadingAllCharacters,
} from "../redux/selectors";
import { ICharacter } from "../utils/types";
import { useSortData } from "../hooks/useSortData";

export const EpisodesPage = () => {
  const [sortedCharacters, setSortedCharacters] = useState<ICharacter[]>([]);

  const allCharacters = useAppSelector(allCharactersSelector);
  const error = useAppSelector(allCharactersErrorSelector);
  const isLoading = useAppSelector(isLoadingAllCharacters);

  const { rulesSortData, onSortedByNumber, onSortedByName } = useSortData(
    getAllCharactersFetch
  );

  useEffect(() => {
    setSortedCharacters(
      [...allCharacters].sort((a, b) => {
        switch (rulesSortData) {
          case "ASC_NUM":
            return a.episode.length - b.episode.length;
          case "DESC_NAME":
            return a.name[0].localeCompare(b.name[0]);
          case "ASC_NAME":
            return b.name[0].localeCompare(a.name[0]);
          default:
            return b.episode.length - a.episode.length;
        }
      })
    );
  }, [allCharacters, rulesSortData]);

  return error ? (
    <div>{error.message}</div>
  ) : (
    <Episodes
      isLoading={isLoading}
      sortedCharacters={sortedCharacters}
      onSortedByNumber={onSortedByNumber}
      onSortedByName={onSortedByName}
      rulesSortData={rulesSortData}
    />
  );
};
