import { UPDATE_SEARCH_STORE } from '../actions/search';

export default function Search(store = {}, action) {
    switch (action.type) {
        case UPDATE_SEARCH_STORE:
            return {
                ...action.searchData
            }
        default:
            return store;
    }
}