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

export type ArrayType = "episode" | "residents";

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
  locations?: FetchedObject[];
  loadingStatus: Status;
  error: null | { message: string };
  page: number;
}

export type SortType = "DESC_NAME" | "ASC_NAME" | "DESC_NUM" | "ASC_NUM";

export interface IContext {
  sortedFetchedData: FetchedObject[];
  loadingStatus: Status;
  onSortedByNumber: () => void;
  onSortedByName: () => void;
  rulesSortData: SortType;
  arrayType: ArrayType;
}

export type InitialAllCharactersState = Omit<
  InitialState,
  "page" | "locations"
>;

export type InitialLocationsState = Omit<InitialState, "page" | "characters">;
