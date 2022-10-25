import { put, call, takeEvery } from "redux-saga/effects";
import { fetchData } from "./charactersSlice";
import fetchCharacters from "../../api/сharactersApi";

function* fetchCharactersSaga(): Generator {
  try {
    const response = yield call(fetchCharacters);
    yield put(fetchData(response));
  } catch (error) {
    yield put({ type: "CHARACTERS_FETCH_FAILED" });
  }
}

function* mySaga() {
  yield takeEvery("CHARACTERS_FETCH_REQUESTED", fetchCharactersSaga);
}

export default mySaga;
