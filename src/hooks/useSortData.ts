import { useEffect, useState } from "react";
import { FetchedObject } from "../utils/types";

export const useSortData = (
  rulesSortData: string,
  arrayType: string,
  fetchedData: FetchedObject[]
) => {
  const [sortedFetchedData, setSortedFetchedData] = useState<FetchedObject[]>(
    []
  );

  useEffect(() => {
    setSortedFetchedData(
      [...fetchedData].sort(
        (a: Record<string, any>, b: Record<string, any>) => {
          switch (rulesSortData) {
            case "ASC_NUM":
              return a[arrayType].length - b[arrayType].length;
            case "DESC_NAME":
              return a.name[0].localeCompare(b.name[0]);
            case "ASC_NAME":
              return b.name[0].localeCompare(a.name[0]);
            default:
              return b[arrayType].length - a[arrayType].length;
          }
        }
      )
    );
  }, [fetchedData, arrayType, rulesSortData]);

  return { sortedFetchedData };
};
