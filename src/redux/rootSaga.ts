import { all } from "redux-saga/effects";
import charactersSaga from "./characters/charactersSaga";
import episodesSaga from "./episodes/episodesSaga";

export default function* rootSaga() {
  yield all([charactersSaga(), episodesSaga()]);
}
