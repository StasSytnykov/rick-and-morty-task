import { useState } from "react";
import { SortType } from "../utils/types";

export const useHandleSortData = () => {
  const [rulesSortData, setRulesData] = useState<SortType>("DESC_NUM");

  const onSortedByNumber = () => {
    rulesSortData === "DESC_NUM"
      ? setRulesData("ASC_NUM")
      : setRulesData("DESC_NUM");
  };

  const onSortedByName = () => {
    rulesSortData === "DESC_NAME"
      ? setRulesData("ASC_NAME")
      : setRulesData("DESC_NAME");
  };

  return { rulesSortData, onSortedByNumber, onSortedByName };
};
