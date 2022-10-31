import { createSlice } from "@reduxjs/toolkit";
import { IAllCharacters } from "../../utils/types";

type InitialState = {
  allCharacters: IAllCharacters[];
  status: "idle" | "loading" | "success" | "failed";
  error: null | { message: string };
};

const initialState: InitialState = {
  allCharacters: [],
  status: "idle",
  error: null,
};

export const allCharactersSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    getAllCharactersFetch: (state) => {
      state.status = "loading";
    },
    getAllCharactersSuccess: (state, action) => {
      state.status = "success";
      state.allCharacters = action.payload;
    },
    getAllCharactersFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  getAllCharactersFetch,
  getAllCharactersSuccess,
  getAllCharactersFailure,
} = allCharactersSlice.actions;

export default allCharactersSlice.reducer;
