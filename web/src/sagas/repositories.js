import { takeEvery, put, call } from 'redux-saga/effects';
import { SEARCH_REPOSITORIES, updateStore } from '../actions/repositories';
import { updateSearchStore } from '../actions/search';
import * as api from '../helpers/api';

export function* searchRepositoriesWatcher() {
    yield takeEvery(SEARCH_REPOSITORIES, searchRepositories)
}

function* searchRepositories({ page, language, query }) {
    const resource = `repositories/search?page=${page}&language=${language}&query=${query}`
    const response = yield call(api.get, resource);
    yield put(updateSearchStore({ page, language, query }))
    if (response.data.success) {
        const { data } = response.data
        yield put(updateStore(data));
        return;
    }
}