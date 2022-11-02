import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../utils/types";

type InitialAllCharactersState = Omit<InitialState, "page">;

const initialState: InitialAllCharactersState = {
  characters: [],
  status: "idle",
  error: null,
};

export const allCharactersSlice = createSlice({
  name: "allCharacters",
  initialState,
  reducers: {
    getAllCharactersFetch: (state) => {
      state.status = "loading";
    },
    getAllCharactersSuccess: (state, action) => {
      state.status = "success";
      state.characters = action.payload;
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
