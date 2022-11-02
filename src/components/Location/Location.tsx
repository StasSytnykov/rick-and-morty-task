import {
  Icon,
  IconLetterThumb,
  IconNumberThumb,
  LoaderThumb,
  TableHeadThumb,
  TableStyled,
  TableTdStyled,
  TableThStyled,
  TableTrStyled,
  THeadStyled,
} from "../Episodes/Episodes.styled";
import { Loader } from "../Loader/Loader";
import { ILocation, Props } from "../../utils/types";

interface ILocationProps extends Props {
  sortedLocation: ILocation[];
}

export const Location = ({
  isLoading,
  sortedLocation,
  onSortedByNumber,
  onSortedByName,
  rulesSortData,
}: ILocationProps) =>
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
              Location
              <IconLetterThumb>
                {rulesSortData === "DESC_NAME" ? (
                  <i className="fa-solid fa-arrow-down-a-z"></i>
                ) : (
                  <Icon className="fa-solid fa-arrow-down-a-z"></Icon>
                )}
                {rulesSortData === "ASC_NAME" ? (
                  <i className="fa-solid fa-arrow-up-a-z"></i>
                ) : (
                  <Icon className="fa-solid fa-arrow-up-a-z"></Icon>
                )}
              </IconLetterThumb>
            </TableHeadThumb>
          </TableThStyled>
          <TableThStyled onClick={onSortedByNumber}>
            <TableHeadThumb>
              Number of characters
              <IconNumberThumb>
                {rulesSortData === "DESC_NUM" ? (
                  <i className="fa-solid fa-sort-up"></i>
                ) : (
                  <Icon className="fa-solid fa-sort-up"></Icon>
                )}
                {rulesSortData === "ASC_NUM" ? (
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
        {sortedLocation.map(({ name, id, residents }) => (
          <TableTrStyled key={id}>
            <TableTdStyled>{name}</TableTdStyled>
            <TableTdStyled>{residents.length}</TableTdStyled>
          </TableTrStyled>
        ))}
      </tbody>
    </TableStyled>
  );
