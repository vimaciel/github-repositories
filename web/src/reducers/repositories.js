import { UPDATE_REPOSITORIES_STORE } from '../actions/repositories';

export default function Repositories(store = {}, action) {
    switch (action.type) {
        case UPDATE_REPOSITORIES_STORE:
            return {
                ...action.repositories
            }
        default:
            return store;
    }
}