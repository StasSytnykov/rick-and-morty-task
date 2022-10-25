import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";

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
      state.status = "success";
      state.characters = action.payload;
    },
  },
});

export const { fetchData } = charactersSlice.actions;

export default charactersSlice.reducer;
