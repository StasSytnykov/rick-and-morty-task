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
} from "./Table.styled";
import { Loader } from "../Loader/Loader";
import { Props } from "../../utils/types";

export const Table = ({
  isLoading,
  sortedData,
  onSortedByNumber,
  onSortedByName,
  rulesSortData,
  arrayType,
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
                {rulesSortData === "DESC_NAME" ? (
                  <i
                    data-testid={"arrow"}
                    className="fa-solid fa-arrow-down-a-z"
                  ></i>
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
        {sortedData.map((item) => (
          <TableTrStyled key={item.id}>
            <TableTdStyled>{item.name}</TableTdStyled>
            <TableTdStyled>{item[arrayType].length}</TableTdStyled>
          </TableTrStyled>
        ))}
      </tbody>
    </TableStyled>
  );
