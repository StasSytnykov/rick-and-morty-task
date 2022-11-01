import {
  LoaderThumb,
  TableStyled,
  TableTrHeadStyled,
  TableTrStyled,
  TableTdStyled,
  TableThStyled,
} from "./Episodes.styled";
import { Loader } from "../Loader/Loader";
import { ICharacter } from "../../utils/types";

interface Props {
  sortedCharacters: ICharacter[];
  handleSortedCharactersByNumberOfSeries: () => void;
  handleSortedCharactersByName: () => void;
  isLoading: string;
}

export const Episodes = ({
  isLoading,
  sortedCharacters,
  handleSortedCharactersByNumberOfSeries,
  handleSortedCharactersByName,
}: Props) =>
  isLoading === "loading" ? (
    <LoaderThumb>
      <Loader />
    </LoaderThumb>
  ) : (
    <TableStyled>
      <thead>
        <TableTrHeadStyled>
          <TableThStyled onClick={handleSortedCharactersByName}>
            Character name
          </TableThStyled>
          <TableThStyled onClick={handleSortedCharactersByNumberOfSeries}>
            Number of episodes
          </TableThStyled>
        </TableTrHeadStyled>
      </thead>

      <tbody>
        {sortedCharacters.map(({ name, id, episode }) => (
          <TableTrStyled key={id}>
            <TableTdStyled>{name}</TableTdStyled>
            <TableTdStyled>{episode.length}</TableTdStyled>
          </TableTrStyled>
        ))}
      </tbody>
    </TableStyled>
  );
