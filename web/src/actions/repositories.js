export const SEARCH_REPOSITORIES = 'SEARCH_REPOSITORIES';
export const UPDATE_REPOSITORIES_STORE = 'UPDATE_REPOSITORIES_STORE';

export function search(page, language, query) {
    return {
        type: SEARCH_REPOSITORIES,
        page,
        language,
        query
    }
}

export function updateStore(repositories) {
    return {
        type: UPDATE_REPOSITORIES_STORE,
        repositories
    }
}