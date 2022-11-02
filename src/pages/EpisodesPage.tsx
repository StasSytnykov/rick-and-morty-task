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
  const [rulesSortCharacters, setRulesCharacters] =
    useState<SortType>("DESC_NUM");

  const allCharacters = useAppSelector(allCharactersSelector);
  const error = useAppSelector(allCharactersErrorSelector);
  const isLoading = useAppSelector(isLoadingAllCharacters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setSortedCharacters(
      [...allCharacters].sort((a, b) => {
        switch (rulesSortCharacters) {
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
  }, [allCharacters, rulesSortCharacters]);

  useEffect(() => {
    dispatch(getAllCharactersFetch());
  }, [dispatch]);

  const onSortedByNumber = () => {
    rulesSortCharacters === "DESC_NUM"
      ? setRulesCharacters("ASC_NUM")
      : setRulesCharacters("DESC_NUM");
  };

  const onSortedByName = () => {
    rulesSortCharacters === "DESC_NAME"
      ? setRulesCharacters("ASC_NAME")
      : setRulesCharacters("DESC_NAME");
  };

  return error ? (
    <div>{error.message}</div>
  ) : (
    <Episodes
      isLoading={isLoading}
      sortedCharacters={sortedCharacters}
      onSortedByNumber={onSortedByNumber}
      onSortedByName={onSortedByName}
      rulesSortCharacters={rulesSortCharacters}
    />
  );
};
