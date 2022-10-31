import { call, put, takeEvery } from "redux-saga/effects";
import { getEpisodesSuccess, getEpisodesFailure } from "./episodesSlice";
import { fetchEpisodes } from "../../api/fetchData";

function* workGetEpisodesFetch(): Generator {
  try {
    const response = yield call(fetchEpisodes);
    yield put(getEpisodesSuccess(response));
  } catch (error) {
    yield put(getEpisodesFailure(error));
  }
}

export default function* episodesSaga() {
  yield takeEvery("episodes/getEpisodesFetch", workGetEpisodesFetch);
}
