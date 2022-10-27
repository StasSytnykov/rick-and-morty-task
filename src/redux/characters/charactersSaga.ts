import { call, delay, put, takeEvery } from "redux-saga/effects";
import { AnyAction } from "@reduxjs/toolkit";
import { getCharactersSuccess, getCharactersFailure } from "./charactersSlice";
import fetchCharacters from "../../api/сharactersApi";

function* workGetCharactersFetch({ payload }: AnyAction): Generator {
  try {
    const response = yield call(fetchCharacters, payload);
    yield delay(2000);
    yield put(getCharactersSuccess(response));
  } catch (error) {
    yield put(getCharactersFailure());
  }
}

export default function* charactersSaga() {
  yield takeEvery("characters/getCharactersFetch", workGetCharactersFetch);
}
