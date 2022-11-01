import {
  LoaderThumb,
  TableStyled,
  TableTrHeadStyled,
  TableTrStyled,
  TableTdStyled,
  TableThStyled,
  IconNumberThumb,
  TableHeadNumberThumb,
  Icon,
  IconLetterThumb,
} from "./Episodes.styled";
import { Loader } from "../Loader/Loader";
import { ICharacter } from "../../utils/types";
import { FIRST_CHARACTER_BY_NUMBER_OF_EPISODES } from "../../pages/EpisodesPage";

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
}: Props) => {
  return isLoading === "loading" ? (
    <LoaderThumb>
      <Loader />
    </LoaderThumb>
  ) : (
    <TableStyled>
      <thead>
        <TableTrHeadStyled>
          <TableThStyled onClick={handleSortedCharactersByName}>
            <TableHeadNumberThumb>
              Character name
              <IconLetterThumb>
                <i className="fa-solid fa-arrow-up-a-z"></i>
                <i className="fa-solid fa-arrow-down-a-z"></i>
              </IconLetterThumb>
            </TableHeadNumberThumb>
          </TableThStyled>
          <TableThStyled onClick={handleSortedCharactersByNumberOfSeries}>
            <TableHeadNumberThumb>
              Number of episodes
              <IconNumberThumb>
                {sortedCharacters.length !== 0 &&
                sortedCharacters[0].name ===
                  FIRST_CHARACTER_BY_NUMBER_OF_EPISODES ? (
                  <i className="fa-solid fa-sort-up"></i>
                ) : (
                  <Icon className="fa-solid fa-sort-up"></Icon>
                )}
                {sortedCharacters.length !== 0 &&
                sortedCharacters[0].name !==
                  FIRST_CHARACTER_BY_NUMBER_OF_EPISODES ? (
                  <i className="fa-solid fa-sort-down"></i>
                ) : (
                  <Icon className="fa-solid fa-sort-down"></Icon>
                )}
              </IconNumberThumb>
            </TableHeadNumberThumb>
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
};
