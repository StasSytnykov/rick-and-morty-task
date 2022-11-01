import { createSlice } from "@reduxjs/toolkit";
// import charactersOperation from "./charactersOperation";
// import type { PayloadAction } from "@reduxjs/toolkit";
// // import { RootState } from "../store";
import { ICharacter } from "../../utils/types";

type InitialState = {
  characters: ICharacter[];
  status: "idle" | "loading" | "success" | "failed";
  error: null | { message: string };
  page: number;
};

const MAX_PAGE = 42;

const initialState: InitialState = {
  characters: [],
  status: "idle",
  error: null,
  page: 2,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getPage: (state) => {
      if (state.page < MAX_PAGE) {
        state.page = state.page + 1;
      }
    },
    getCharactersFetch: (state, payload) => {
      state.status = "loading";
    },
    getCharactersSuccess: (state, action) => {
      state.status = "success";

      state.characters.length > 0
        ? (state.characters = state.characters.concat(action.payload))
        : (state.characters = action.payload);
    },
    getCharactersFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  getCharactersFetch,
  getCharactersSuccess,
  getCharactersFailure,
  getPage,
} = charactersSlice.actions;

export default charactersSlice.reducer;
