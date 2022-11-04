import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import charactersSlice from "./characters/charactersSlice";
import allCharactersSlice from "./allCharacters/allCharactersSlice";
import locationSlice from "./location/locationSlice";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
    allCharacters: allCharactersSlice,
    location: locationSlice,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
