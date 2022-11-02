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

type Status = "idle" | "loading" | "success" | "failed";

export type InitialState = {
  characters: ICharacter[];
  status: Status;
  error: null | { message: string };
  page: number;
};
