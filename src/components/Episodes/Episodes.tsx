import {
  LoaderThumb,
  TableStyled,
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
        <tr>
          <TableThStyled onClick={handleSortedCharactersByName}>
            Character name
          </TableThStyled>
          <TableThStyled onClick={handleSortedCharactersByNumberOfSeries}>
            Number of episodes
          </TableThStyled>
        </tr>
      </thead>

      <tbody>
        {sortedCharacters.map(({ name, id, episode }) => (
          <tr key={id}>
            <TableTdStyled>{name}</TableTdStyled>
            <TableTdStyled>{episode.length}</TableTdStyled>
          </tr>
        ))}
      </tbody>
    </TableStyled>
  );
