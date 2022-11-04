import { useAppSelector } from "../hooks/reduxHooks";
import { getAllCharactersFetch } from "../redux/allCharacters/allCharactersSlice";
import {
  allCharactersErrorSelector,
  allCharactersSelector,
  isLoadingAllCharacters,
} from "../redux/selectors";
import { useHandleSortData } from "../hooks/useHandleSortData";
import { Table } from "../components/Table/Table";
import { useSortData } from "../hooks/useSortData";

export const EpisodesPage = () => {
  const allCharacters = useAppSelector(allCharactersSelector);
  const error = useAppSelector(allCharactersErrorSelector);
  const isLoading = useAppSelector(isLoadingAllCharacters);

  const { rulesSortData, onSortedByNumber, onSortedByName } = useHandleSortData(
    getAllCharactersFetch
  );

  const { sortedFetchedData } = useSortData(
    rulesSortData,
    "episode",
    allCharacters
  );

  return error ? (
    <div>{error.message}</div>
  ) : (
    <Table
      isLoading={isLoading}
      sortedData={sortedFetchedData}
      onSortedByNumber={onSortedByNumber}
      onSortedByName={onSortedByName}
      rulesSortData={rulesSortData}
      arrayType={"episode"}
    />
  );
};
