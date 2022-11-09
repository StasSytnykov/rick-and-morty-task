import { CharactersList } from "../components/CharactersList/CharactersList";
import { TemplateCharactersContextProvider } from "../context/TemplateCharactersContext";
import { useFetchData } from "../hooks/useFetchData";

export const HomePage = () => {
  const { error } = useFetchData();

  return error ? (
    <div>{error.message}</div>
  ) : (
    <div>
      <TemplateCharactersContextProvider>
        <CharactersList />
      </TemplateCharactersContextProvider>
    </div>
  );
};
