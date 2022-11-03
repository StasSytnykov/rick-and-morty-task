import { createSlice } from "@reduxjs/toolkit";
import { FetchedObject, Status } from "../../utils/types";

interface IInitialState {
  location: FetchedObject[];
  status: Status;
  error: null | { message: string };
}

const initialState: IInitialState = {
  location: [],
  status: "idle",
  error: null,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    getLocationFetch: (state) => {
      state.status = "loading";
    },
    getLocationSuccess: (state, action) => {
      state.status = "success";
      state.location = action.payload;
    },
    getLocationFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { getLocationFetch, getLocationSuccess, getLocationFailure } =
  locationSlice.actions;

export default locationSlice.reducer;
