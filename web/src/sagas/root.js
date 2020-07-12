import { all, fork } from 'redux-saga/effects';
import * as repositories from './repositories';

export default function* rootSaga() {
    yield all([
        fork(repositories.searchRepositoriesWatcher),
    ]);
};