import { all } from "redux-saga/effects";
import charactersSaga from "./characters/charactersSaga";
import allCharactersSaga from "./allCharacters/allCharactersSaga";
import locationSaga from "./location/locationSaga";

export default function* rootSaga() {
  yield all([charactersSaga(), allCharactersSaga(), locationSaga()]);
}
