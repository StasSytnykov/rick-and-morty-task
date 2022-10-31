import { all } from "redux-saga/effects";
import charactersSaga from "./characters/charactersSaga";

export default function* rootSaga() {
  yield all([charactersSaga()]);
}
