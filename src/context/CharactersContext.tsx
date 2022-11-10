import { FetchedObject, Status } from "../utils/types";
import { createContext, ReactNode } from "react";
import { useFetchData } from "../hooks/useFetchData";

interface IContext {
  characters: FetchedObject[];
  onLoadMoreCharacters: () => void;
  loadingStatus: Status;
  error: null | { message: string };
}

export const CharactersContext = createContext<IContext>({
  characters: [],
  onLoadMoreCharacters(): Promise<void> {
    return Promise.resolve(undefined);
  },
  loadingStatus: "idle",
  error: null,
});

interface Props {
  children: ReactNode;
}

export const CharactersContextProvider = ({ children }: Props) => {
  const { characters, onLoadMoreCharacters, loadingStatus, error } =
    useFetchData();

  return (
    <CharactersContext.Provider
      value={{ characters, onLoadMoreCharacters, loadingStatus, error }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
