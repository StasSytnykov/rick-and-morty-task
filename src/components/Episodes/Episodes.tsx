import {
  THeadStyled,
  LoaderThumb,
  TableStyled,
  TableTrStyled,
  TableTdStyled,
  TableThStyled,
  IconNumberThumb,
  TableHeadThumb,
  Icon,
  IconLetterThumb,
} from "./Episodes.styled";
import { Loader } from "../Loader/Loader";
import { ICharacter } from "../../utils/types";
import { FIRST_CHARACTER_BY_NUMBER_OF_EPISODES } from "../../pages/EpisodesPage";
import { FIRST_CHARACTER_BY_NAME } from "../../pages/EpisodesPage";

const FIRST_CHARACTER_BY_Z = "Zarbadar Gloonch";
const LAST_CHARACTER_BY_NUMBER_OF_EPISODES = "Butter Robot";

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
      <THeadStyled>
        <tr>
          <TableThStyled onClick={handleSortedCharactersByName}>
            <TableHeadThumb>
              Character name
              <IconLetterThumb>
                {sortedCharacters[0]?.name === FIRST_CHARACTER_BY_NAME ? (
                  <i className="fa-solid fa-arrow-down-a-z"></i>
                ) : (
                  <Icon className="fa-solid fa-arrow-down-a-z"></Icon>
                )}
                {sortedCharacters[0]?.name === FIRST_CHARACTER_BY_Z ? (
                  <i className="fa-solid fa-arrow-up-a-z"></i>
                ) : (
                  <Icon className="fa-solid fa-arrow-up-a-z"></Icon>
                )}
              </IconLetterThumb>
            </TableHeadThumb>
          </TableThStyled>
          <TableThStyled onClick={handleSortedCharactersByNumberOfSeries}>
            <TableHeadThumb>
              Number of episodes
              <IconNumberThumb>
                {sortedCharacters[0]?.name ===
                FIRST_CHARACTER_BY_NUMBER_OF_EPISODES ? (
                  <i className="fa-solid fa-sort-up"></i>
                ) : (
                  <Icon className="fa-solid fa-sort-up"></Icon>
                )}
                {sortedCharacters[0]?.name ===
                LAST_CHARACTER_BY_NUMBER_OF_EPISODES ? (
                  <i className="fa-solid fa-sort-down"></i>
                ) : (
                  <Icon className="fa-solid fa-sort-down"></Icon>
                )}
              </IconNumberThumb>
            </TableHeadThumb>
          </TableThStyled>
        </tr>
      </THeadStyled>

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
