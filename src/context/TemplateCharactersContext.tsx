import { FetchedObject } from "../utils/types";
import { createContext, ReactNode } from "react";

interface IContext {
  characters: FetchedObject[];
  onLoadMoreCharacters: () => void;
}

export const TemplateCharactersContext = createContext<IContext>({
  characters: [],
  onLoadMoreCharacters(): Promise<void> {
    return Promise.resolve(undefined);
  },
});

interface Props {
  children: ReactNode;
  characters: FetchedObject[];
  onLoadMoreCharacters: () => void;
}

export const TemplateCharactersContextProvider = ({
  children,
  characters,
  onLoadMoreCharacters,
}: Props) => (
  <TemplateCharactersContext.Provider
    value={{ characters, onLoadMoreCharacters }}
  >
    {children}
  </TemplateCharactersContext.Provider>
);
