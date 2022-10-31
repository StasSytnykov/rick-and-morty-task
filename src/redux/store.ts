import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import charactersSlice from "./characters/charactersSlice";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
