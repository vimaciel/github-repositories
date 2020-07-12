import { UPDATE_LOADING_STORE } from '../actions/loading';

export default function Loading(store = false, action) {
    switch (action.type) {
        case UPDATE_LOADING_STORE:
            return action.value;
        default:
            return store;
    }
}