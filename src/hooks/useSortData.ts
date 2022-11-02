import { useEffect, useState } from "react";
import { SortType } from "../utils/types";
import { useAppDispatch } from "./reduxHooks";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

export const useSortData = (getFetch: ActionCreatorWithoutPayload<string>) => {
  const [rulesSortData, setRulesData] = useState<SortType>("DESC_NUM");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFetch());
  }, [dispatch, getFetch]);

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
