import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import charactersSlice from "./characters/charactersSlice";
import allCharacters from "./allCharacters/allCharactersSlice";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
    allCharacters: allCharacters,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
