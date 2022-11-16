import {
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortUp,
  faSortDown,
  faArrowDownAZ,
  faArrowUpAZ,
} from "@fortawesome/free-solid-svg-icons";

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
                  <FontAwesomeIcon icon={faArrowUpAZ} />
                ) : (
                  <FontAwesomeIcon
                    icon={faArrowUpAZ}
                    style={{ opacity: "50%" }}
                  />
                )}
                {rulesSortData === "ASC_NAME" ? (
                  <FontAwesomeIcon icon={faArrowDownAZ} />
                ) : (
                  <FontAwesomeIcon
                    icon={faArrowDownAZ}
                    style={{ opacity: "50%" }}
                  />
                )}
              </IconLetterThumb>
            </TableHeadThumb>
          </TableThStyled>
          <TableThStyled onClick={onSortedByNumber}>
            <TableHeadThumb>
              Number of episodes
              <IconNumberThumb>
                {rulesSortData === "DESC_NUM" ? (
                  <FontAwesomeIcon icon={faSortUp} />
                ) : (
                  <FontAwesomeIcon icon={faSortUp} style={{ opacity: "50%" }} />
                )}
                {rulesSortData === "ASC_NUM" ? (
                  <FontAwesomeIcon icon={faSortDown} />
                ) : (
                  <FontAwesomeIcon
                    icon={faSortDown}
                    style={{ opacity: "50%" }}
                  />
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
