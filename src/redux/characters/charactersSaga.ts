import { put, call, takeEvery } from "redux-saga/effects";
import { getCharactersSuccess, getCharactersFailure } from "./charactersSlice";
import fetchCharacters from "../../api/сharactersApi";

function* workGetCharactersFetch(): Generator {
  try {
    const characters = yield call(fetchCharacters);
    yield put(getCharactersSuccess(characters));
  } catch (error) {
    yield put(getCharactersFailure());
  }
}

function* charactersSaga() {
  yield takeEvery("characters/getCharactersFetch", workGetCharactersFetch);
}

export default charactersSaga;
