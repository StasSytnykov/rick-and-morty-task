import { FetchedObject, Status } from "../utils/types";
import { createContext, ReactNode } from "react";
import { useFetchData } from "../hooks/useFetchData";

interface IContext {
  characters: FetchedObject[];
  onLoadMoreCharacters: () => void;
  loadingStatus: Status;
}

export const TemplateCharactersContext = createContext<IContext>({
  characters: [],
  onLoadMoreCharacters(): Promise<void> {
    return Promise.resolve(undefined);
  },
  loadingStatus: "idle",
});

interface Props {
  children: ReactNode;
}

export const TemplateCharactersContextProvider = ({ children }: Props) => {
  const { characters, onLoadMoreCharacters, loadingStatus } = useFetchData();

  return (
    <TemplateCharactersContext.Provider
      value={{ characters, onLoadMoreCharacters, loadingStatus }}
    >
      {children}
    </TemplateCharactersContext.Provider>
  );
};
