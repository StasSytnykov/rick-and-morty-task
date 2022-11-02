import { all } from "redux-saga/effects";
import charactersSaga from "./characters/charactersSaga";
import allCharactersSaga from "./allCharacters/allCharactersSaga";

export default function* rootSaga() {
  yield all([charactersSaga(), allCharactersSaga()]);
}