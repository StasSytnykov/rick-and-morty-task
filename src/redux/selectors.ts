import { RootState } from "./store";

const charactersSelector = (state: RootState) => state.characters.characters;
const charactersPageSelector = (state: RootState) => state.characters.page;
const charactersErrorSelector = (state: RootState) => state.characters.error;

const locationSelector = (state: RootState) => state.location.location;
const isLoadingLocation = (state: RootState) => state.location.status;
const locationErrorSelector = (state: RootState) => state.location.error;

export {
  charactersSelector,
  charactersPageSelector,
  charactersErrorSelector,
  locationSelector,
  isLoadingLocation,
  locationErrorSelector,
};
