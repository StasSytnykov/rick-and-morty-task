import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import charactersSlice from "./characters/charactersSlice";
import charactersSaga from "./characters/charactersSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(charactersSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
