import { createSlice } from "@reduxjs/toolkit";
import { IEpisodes } from "../../utils/types";

type InitialState = {
  episodes: IEpisodes[];
  status: "idle" | "loading" | "success" | "failed";
  error: null | { message: string };
};

const initialState: InitialState = {
  episodes: [],
  status: "idle",
  error: null,
};

export const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    getEpisodesFetch: (state) => {
      state.status = "loading";
    },
    getEpisodesSuccess: (state, action) => {
      state.status = "success";
      state.episodes = action.payload;
    },
    getEpisodesFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { getEpisodesFetch, getEpisodesSuccess, getEpisodesFailure } =
  episodesSlice.actions;

export default episodesSlice.reducer;
