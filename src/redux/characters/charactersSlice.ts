import { createSlice } from "@reduxjs/toolkit";
// import charactersOperation from "./charactersOperation";
// import type { PayloadAction } from "@reduxjs/toolkit";
// // import { RootState } from "../store";

type TCharacter = {
  id: number;
  name: string;
  image: string;
};

interface IinitialState {
  characters: TCharacter[];
  status: string;
  error: null | string;
}

const initialState: IinitialState = {
  characters: [],
  status: "idle",
  error: null,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getCharactersFetch: (state) => {
      state.status = "loading";
    },
    getCharactersSuccess: (state, action) => {
      state.status = "success";
      state.characters = action.payload;
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
