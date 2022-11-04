import { call, put, takeEvery } from "redux-saga/effects";
import { getLocationSuccess, getLocationFailure } from "./locationSlice";
import { fetchLocation } from "../../api/fetchData";

function* workGetLocationFetch(): Generator {
  try {
    const response = yield call(fetchLocation);
    yield put(getLocationSuccess(response));
  } catch (error) {
    yield put(getLocationFailure(error));
  }
}

export default function* locationSaga() {
  yield takeEvery("location/getLocationFetch", workGetLocationFetch);
}
