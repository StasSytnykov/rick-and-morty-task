import { put, call, takeEvery } from "redux-saga/effects";
import fetchData from "../../api/сharactersApi";

function* fetchCharactersSaga(): Generator {
  try {
    const response = yield call(fetchData);
    yield put({ type: "CHARACTERS_FETCH_SUCCEEDED", user: response });
  } catch (error) {
    yield put({ type: "CHARACTERS_FETCH_FAILED", message: "error" });
  }
}

function* mySaga() {
  yield takeEvery("CHARACTERS_FETCH_REQUESTED", fetchCharactersSaga);
}

export default mySaga;
