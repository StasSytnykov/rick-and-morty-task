import { createSlice } from "@reduxjs/toolkit";
// import charactersOperation from "./charactersOperation";
// // import type { PayloadAction } from "@reduxjs/toolkit";
// // import { RootState } from "../store";
//
type TCharacter = {
  id?: number;
  name?: string;
  image?: string;
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
    fetchData: (state, action) => {
      return {
        characters: action.payload,
        status: "success",
        error: null,
      };
    },
  },
});

export const { fetchData } = charactersSlice.actions;

export default charactersSlice.reducer;
