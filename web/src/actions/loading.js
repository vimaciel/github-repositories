export const UPDATE_LOADING_STORE = 'UPDATE_LOADING_STORE';

export function updateLoadingStore(value) {
    return {
        type: UPDATE_LOADING_STORE,
        value
    }
}