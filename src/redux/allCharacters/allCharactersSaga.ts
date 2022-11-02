import { call, put, takeEvery } from "redux-saga/effects";
import {
  getAllCharactersSuccess,
  getAllCharactersFailure,
} from "./allCharactersSlice";
import { fetchAllCharacters } from "../../api/fetchData";

function* workGetAllCharactersFetch(): Generator {
  try {
    const response = yield call(fetchAllCharacters);
    yield put(getAllCharactersSuccess(response));
  } catch (error) {
    yield put(getAllCharactersFailure(error));
  }
}

export default function* allCharactersSaga() {
  yield takeEvery(
    "allCharacters/getAllCharactersFetch",
    workGetAllCharactersFetch
  );
}
