import {
  Icon,
  IconLetterThumb,
  IconNumberThumb,
  TableHeadThumb,
  TableStyled,
  TableTdStyled,
  TableThStyled,
  TableTrStyled,
  THeadStyled,
} from "./Table.styled";
import { Loader } from "../Loader/Loader";
import { ArrayType, FetchedObject, SortType } from "../../utils/types";

export interface Props {
  sortedFetchedData: FetchedObject[];
  onSortedByNumber: () => void;
  onSortedByName: () => void;
  loadingStatus: string;
  rulesSortData: SortType;
  arrayType: ArrayType;
}

export const Table = ({
  onSortedByNumber,
  onSortedByName,
  sortedFetchedData,
  rulesSortData,
  arrayType,
  loadingStatus,
}: Props) => {
  return loadingStatus === "loading" ? (
    <Loader />
  ) : (
    <TableStyled>
      <THeadStyled>
        <tr>
          <TableThStyled onClick={onSortedByName}>
            <TableHeadThumb>
              Character name
              <IconLetterThumb data-testid={"arrow"}>
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
              Number of episodes
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
        {sortedFetchedData.map((item) => (
          <TableTrStyled key={item.id}>
            <TableTdStyled>{item.name}</TableTdStyled>
            <TableTdStyled>{item[arrayType].length}</TableTdStyled>
          </TableTrStyled>
        ))}
      </tbody>
    </TableStyled>
  );
};
