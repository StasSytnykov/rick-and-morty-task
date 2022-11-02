export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export type Status = "idle" | "loading" | "success" | "failed";

export interface InitialState {
  characters: ICharacter[];
  status: Status;
  error: null | { message: string };
  page: number;
}

export type SortType = "DESC_NAME" | "ASC_NAME" | "DESC_NUM" | "ASC_NUM";
