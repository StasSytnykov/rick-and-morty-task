import { RootState } from "./store";

const charactersSelector = (state: RootState) => state.characters.characters;
const pageSelector = (state: RootState) => state.characters.page;
const errorSelector = (state: RootState) => state.characters.error;

export { charactersSelector, pageSelector, errorSelector };
