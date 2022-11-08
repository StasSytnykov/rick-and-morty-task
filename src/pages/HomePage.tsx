import { createContext, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { CharactersList } from "../components/CharactersList/CharactersList";
import { FetchedObject } from "../utils/types";
import { fetchCharacters } from "../api/fetchData";

interface IContext {
  characters: FetchedObject[];
  onLoadMoreCharacters: () => void;
}

const MAX_PAGE = 42;

export const CharactersContext = createContext<IContext>({
  characters: [],
  onLoadMoreCharacters(): Promise<void> {
    return Promise.resolve(undefined);
  },
});

export const HomePage = () => {
  const [characters, setCharacters] = useState<FetchedObject[]>([]);
  const [error, setError] = useState<null | { message: string }>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (characters.length === 0) {
      fetchCharacters(currentPage)
        .then((r) => {
          setTimeout(() => {
            setCharacters(r);
          }, 2000);
        })
        .catch((error) => setError(error));
    }
  }, [characters.length, currentPage]);

  const onLoadMoreCharacters = async () => {
    if (currentPage < MAX_PAGE) {
      setCurrentPage((prevState) => prevState + 1);
    }
    try {
      const loadedMoreCharacters = await fetchCharacters(currentPage + 1);
      setTimeout(() => {
        setCharacters((prevState) => [...prevState, ...loadedMoreCharacters]);
      }, 2000);
    } catch (error) {
      const err = error as AxiosError;
      setError(err);
    }
  };

  return error ? (
    <div>{error.message}</div>
  ) : (
    <div>
      <CharactersContext.Provider value={{ characters, onLoadMoreCharacters }}>
        <CharactersList />
      </CharactersContext.Provider>
    </div>
  );
};
