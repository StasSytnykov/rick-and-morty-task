import { RootState } from "./store";

const charactersSelector = (state: RootState) => state.characters.characters;
const charactersPageSelector = (state: RootState) => state.characters.page;
const charactersErrorSelector = (state: RootState) => state.characters.error;

const allCharactersSelector = (state: RootState) =>
  state.allCharacters.allCharacters;
const allCharactersErrorSelector = (state: RootState) =>
  state.allCharacters.error;

export {
  charactersSelector,
  charactersPageSelector,
  charactersErrorSelector,
  allCharactersSelector,
  allCharactersErrorSelector,
};
