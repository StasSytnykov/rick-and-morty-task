import { createSlice } from "@reduxjs/toolkit";
// import charactersOperation from "./charactersOperation";
// import type { PayloadAction } from "@reduxjs/toolkit";
// // import { RootState } from "../store";
import { ICharacter } from "../../utils/types";

type InitialState = {
  characters: ICharacter[];
  status: string;
  error: null | string;
};

const initialState: InitialState = {
  characters: [],
  status: "idle",
  error: null,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getCharactersFetch: (state, payload) => {
      state.status = "loading";
    },
    getCharactersSuccess: (state, action) => {
      state.status = "success";

      state.characters.length > 0
        ? (state.characters = state.characters.concat(action.payload))
        : (state.characters = action.payload);
    },
    getCharactersFailure: (state) => {
      state.status = "failed";
      state.error = "something went wrong";
    },
  },
});

export const {
  getCharactersFetch,
  getCharactersSuccess,
  getCharactersFailure,
} = charactersSlice.actions;

export default charactersSlice.reducer;
