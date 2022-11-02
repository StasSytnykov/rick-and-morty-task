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
import { ICharacter, SortType } from "../../utils/types";

interface Props {
  sortedCharacters: ICharacter[];
  onSortedByNumber: () => void;
  onSortedByName: () => void;
  isLoading: string;
  sortByNumber: SortType;
  sortByName: SortType;
}

export const Episodes = ({
  isLoading,
  sortedCharacters,
  onSortedByNumber,
  onSortedByName,
  sortByNumber,
  sortByName,
}: Props) =>
  isLoading === "loading" ? (
    <LoaderThumb>
      <Loader />
    </LoaderThumb>
  ) : (
    <TableStyled>
      <THeadStyled>
        <tr>
          <TableThStyled onClick={onSortedByName}>
            <TableHeadThumb>
              Character name
              <IconLetterThumb>
                {sortByName === "DESC" ? (
                  <i className="fa-solid fa-arrow-down-a-z"></i>
                ) : (
                  <Icon className="fa-solid fa-arrow-down-a-z"></Icon>
                )}
                {sortByName === "ASC" ? (
                  <i className="fa-solid fa-arrow-up-a-z"></i>
                ) : (
                  <Icon className="fa-solid fa-arrow-up-a-z"></Icon>
                )}
              </IconLetterThumb>
            </TableHeadThumb>
          </TableThStyled>
          <TableThStyled onClick={onSortedByNumber}>
            <TableHeadThumb>
              Number of episodes
              <IconNumberThumb>
                {sortByNumber === "DESC" ? (
                  <i className="fa-solid fa-sort-up"></i>
                ) : (
                  <Icon className="fa-solid fa-sort-up"></Icon>
                )}
                {sortByNumber === "ASC" ? (
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
