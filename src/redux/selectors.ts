import { RootState } from "./store";

const charactersSelector = (state: RootState) => state.characters.characters;
const charactersPageSelector = (state: RootState) => state.characters.page;
const charactersErrorSelector = (state: RootState) => state.characters.error;

const episodesSelector = (state: RootState) => state.episodes.episodes;
const episodesErrorSelector = (state: RootState) => state.episodes.error;

export {
  charactersSelector,
  charactersPageSelector,
  charactersErrorSelector,
  episodesSelector,
  episodesErrorSelector,
};
