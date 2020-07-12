export const UPDATE_SEARCH_STORE = 'UPDATE_SEARCH_STORE';

export function updateSearchStore(searchData) {
    return {
        type: UPDATE_SEARCH_STORE,
        searchData
    }
}