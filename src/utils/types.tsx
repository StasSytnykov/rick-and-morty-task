export interface FetchedObject {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  origin?: object;
  location?: object;
  image: string;
  episode: string[];
  residents: string[];
  dimension?: string;
  url?: string;
  created?: string;
}

type ArrayType = "episode" | "residents";

export interface Props {
  sortedData: FetchedObject[];
  onSortedByNumber: () => void;
  onSortedByName: () => void;
  isLoading: string;
  rulesSortData: SortType;
  arrayType: ArrayType;
}

export type Status = "idle" | "loading" | "success" | "failed";

export interface InitialState {
  characters: FetchedObject[];
  status: Status;
  error: null | { message: string };
  page: number;
}

export type SortType = "DESC_NAME" | "ASC_NAME" | "DESC_NUM" | "ASC_NUM";
